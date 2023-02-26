<template>
    <main>
        <Navigation :flag="true" titre="Leaderboard" />
        <span v-if="sortMethod != undefined">trie par {{ sortMethod }}.</span>
        <table v-if="!pending">
            <thead>
                <tr>
                    <th @click="data = sortMethods(data, 'username')" class="username">Pseudo</th>
                    <th @click="data = sortMethods(data, 'points')" class="pts">Points</th>
                    <th @click="data = sortMethods(data, 'parties')" class="prt">Parties</th>
                    <th @click="data = sortMethods(data, 'tx_reussite')" class="trs"> % réussite</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="user in data" 
                    :class="{'currentUser': userState === user.username}">
                    <td class="username" v-text="user.username" />
                    <td class="pts" v-text="user.points" />
                    <td class="prt" v-text="user.parties" />
                    <td class="trs" v-text="`${user.tx_reussite}%`" />
                </tr>
            </tbody>
        </table>
        <div v-else class="spinner"></div>
    </main>
</template>

<script setup>
const userState = useState("user", () => false)
const methods = {
    username: "ordre alphabetique",
    points: "points",
    parties: "parties",
    tx_reussite: "taux de réussite"
}
const sortMethod = ref(undefined)
const sortMethods = (array, params) => {
    sortMethod.value = methods[params]
    if(params == "username") return array.sort((a, b) => a.username.toLowerCase() < b.username.toLowerCase() ? -1 : 1)
    return array.sort((a, b) => a[params] > b[params] ? -1 : 1)
}

const client = useSupabaseClient()

const { data, pending } = await useLazyAsyncData(async () => {
    const { data, error } = await client.from("Quizz").select()
    if(error) throw error
    return data
})
client.channel('live-leaderboard-updates')
    .on('postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'Quizz' },
    (payload) => {
        const index = data.value.findIndex(user => user.id === payload.new.id) 
        data.value[index] = payload.new
        if(sortMethod.value != undefined) data.value = sortMethods(data.value, sortMethod.value)
    }
).subscribe()

</script>

<style scoped>
@media (min-width: 1000px) {
    main > table{
        margin: 25px;
        width: calc(100% - 50px);
    }
}
.currentUser{background-color: rgba(0,0,0,0.1);}
.currentUser .username::after{
    content:" (vous)";
    color: rgba(0,0,0,0.75);
    font-weight: 700;}
main > span{
    margin-left: 25px;
    font-weight: 300;
    font-style: italic;
}
table{
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 25px;
    width: 100%;}
table th{cursor: pointer;}
table :is(th, td){
    padding: 10px 5px;
    border: 1px solid;}
table :is(td, th).username{width: 40%;}
table :is(td, th).pts{width: 12.5%;}
table :is(td, th).prt{width: 12.5%;}
table :is(td, th).trs{width: 25%;}
</style>
