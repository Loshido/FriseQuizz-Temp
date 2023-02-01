<template>
    <main>
        <Navigation titre="Quizz" />
        <form @submit.prevent="submit">
            <label for="username">Pseudo</label>
            <input required id="username" autofocus type="text" maxlength="20" v-model="username">
            <button type="submit">Démarrer une partie</button>
            <pre v-if="logs != ''" v-text="logs"></pre>
        </form>
    </main>
</template>

<script setup>
const client = useSupabaseClient()
const username = ref("")
const logs = ref("")
const user = useState("user", () => false)
const router = useRouter()

const submit = async () => {
    if(username == "") return // pas de pseudo 
    if(user.value != false) router.push("/game") // Joueur authentifié

    client.from("Quizz").insert({
        username: username.value,
        points: 0, parties: 0,
        isPlaying: false, tx_reussite: 0
    }).then(() => {
        user.value = username
        router.push("/game")
    })
}
</script>

<style>
@media (min-width: 1000px) {
    form > input{width: 500px !important;}
}

form{
    background-color: #fff;
    margin-bottom: -10px;

    width: 100%;
    height: auto;
    padding: 10px 25px;}
form > input{
    z-index: 1;
    position: relative;
    margin: 5px 0;
    padding: 15px;

    border: 2px solid rgb(55,55,55);
    border-radius: 5px;

    width: 80vw;
    font-size: 1.75em;
    color: rgb(55,55,55);}
form > button[type="submit"]{
    margin-top: 25px;
    padding: 15px;
    font-size: 1.75em;
    color: #fff;
    background-color: rgb(55,55,55);}
form > button[type="submit"]:disabled{
    background-color: rgba(55,55,55, 0.2);}
form > button[type="submit"]:hover{
    background-color: rgba(55,55,55, 0.9);}
</style>