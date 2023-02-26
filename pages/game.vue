<template>
    <main v-if="data">
        <h2 id="user">Connecté en tant que {{ user }}</h2>
        <form @submit.prevent="submit" v-if="data">
            <section v-for="section in data" :key="section.id">
                <h1 class="title" v-text="section.titre" />
                <p v-html="section.description" />
                <div class="reponses">
                    <div 
                        class="reponse" 
                        @click="answers == undefined ? section.answer = reponse.id : null"
                        :class="{
                            'active': section.answer != undefined && section.answer == reponse.id,
                            'correct': (section.answer != undefined && answers != undefined) && section.answer == answers.data[section.id].answer && section.answer == reponse.id,
                            'uncorrect': (section.answer != undefined && answers != undefined) && section.answer != answers.data[section.id].answer && section.answer == reponse.id
                        }"
                        v-for="reponse in section.reponses" 
                        v-text="reponse.value"  />
                </div>
            </section>
            <button v-if="answers == undefined" type="submit">Envoyer</button>
            <div class="results" v-else>
                <p :class="{
                    'good': results.correct > (data.length * 0.7),
                    'normal': results.correct > (data.length * 0.4),
                    'bad': (data.length * 0.4) > results.correct                     
                }">Vous avez {{ results.correct }} réponses correctes sur {{ data.length }} questions! ({{ Math.floor((results.correct / data.length) * 100) }}%)</p>
                <NuxtLink class="redirect" to="/leaderboard">Classement</NuxtLink>
                <NuxtLink class="redirect" to="/">Accueil</NuxtLink>
            </div>
            <audio id="success">
                <source src="@/assets/audio/success.mp3" type="audio/mpeg">
            </audio>
            <audio id="error">
                <source src="@/assets/audio/error.mp3" type="audio/mpeg">
            </audio>
        </form>
    </main>
    <div v-else class="spinner"></div>
</template>

<script>
export default {
    async setup(){
        const user = useState("user", () => false)
        const answers = ref(undefined)
        const results = ref({})
        const { data } = await useLazyFetch("/api/quizz/questions")
        definePageMeta({
            middleware: ["auth"]
        })

        return { user, answers, results, data }
    },
    methods: {
        submit: async function(){
            this.answers = await useFetch("/api/quizz/answers")
            const SumFn = (total, value) => value.answer == this.answers.data[value.id].answer ? total + 1 : total
            const correct = this.data.reduce(SumFn, 0)
            this.results.correct = correct

            if(correct > this.data.length * 0.5) this.playSuccess()
            else this.playError()

            await useLazyFetch("/api/records/update", {
                method: "POST",
                body: {
                    username: this.user,
                    length: this.data.length,
                    correct
                }
            })
        },
        playError(){
            const node = document.querySelector("form audio#error")
            node.play()
        },
        playSuccess(){
            const node = document.querySelector("form audio#success")
            node.play()
        }
    }
}
</script>

<style scoped>
button[type="submit"]{cursor: pointer;}
h2#user{
    color: rgb(77,77,77);
    font-weight: 500;
    padding: 25px 0;
    text-align: center;}
form{
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 75px;}
form > section{
    border: 3px solid rgba(77,77,77,0.25);
    border-radius: 5px;
    padding: 5px;}
form > section > h1.title{
    text-decoration: underline rgb(12, 74, 110);
    padding: 15px;}
form > section > div.reponses{
    padding: 10px 5px;
    display: flex;
    gap: 10px;
    flex-direction: column;}
form > section > div.reponses > .reponse{
    cursor: pointer;
    font-weight: 500;
    padding: 15px;
    background-color: rgba(25,25,25,0.25);
    border: 2px solid transparent;
    border-radius: 5px;
    transition: background-color .25s ease-in-out, border .25s ease-in-out;}
form > section > div.reponses > .reponse:hover{
    background-color: rgba(12, 74, 110,0.25);}
form > section > div.reponses > .reponse.active{
    border-color:rgba(18, 108, 160,0.75);
    background-color: rgba(18, 108, 160, 0.5);}
form > section > div.reponses > .reponse.correct{
    border-color:rgba(13, 148, 136,1);
    background-color: rgba(13, 148, 136, 0.75);}
form > section > div.reponses > .reponse.uncorrect{
    border-color: rgb(166, 30, 77);
    background-color: rgba(166, 30, 77, 0.5);}
form > div.results{
    display: flex;
    flex-direction: column;
    gap: 15px;}
form > div.results > .redirect {
    color: white;
    cursor: pointer;
    font-weight: 500;
    padding: 15px;
    background-color: rgba(55,55,55,1);
    border: 2px solid transparent;
    border-radius: 5px;
    transition: background-color .25s ease-in-out, border .25s ease-in-out;}
form > div.results > .redirect:hover{
    background-color: rgba(55, 55, 55,0.75);}
form > div.results > p{
    width: 100%;
    height: auto;
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    padding: 15px;

    background-color: rgb(13, 148, 136);
    border-radius: 5px;}
form > div.results > p.good{
    background: linear-gradient(120deg, rgba(13,148,136, 0.6), rgba(13,148,136, 0.8));
    border: 3px solid rgb(13, 148, 136);}
form > div.results > p.normal{
    background: linear-gradient(120deg, rgba(18, 108, 160, 0.5), rgba(18, 108, 160, 0.65));
    border: 3px solid rgb(18, 108, 160);}
form > div.results > p.bad{
    background: linear-gradient(120deg, rgba(166, 30, 77, 0.25), rgba(166, 30, 77, 0.45));
    border: 3px solid rgb(166, 30, 77);}

form > section p{
    margin: 5px 15px;
    font-size: 1.5em;
    font-weight: 600;}
pre{margin: 25px;}
</style>
