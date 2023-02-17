<template>
    <main>
        <h2 id="user">Connecté en tant que {{ user }}</h2>
        <form @submit.prevent="submit">
            <section v-for="section in data">
                <h1 class="title" v-text="section.titre" />
                <p v-html="section.description" />
                <div class="reponses">
                    <div 
                        class="reponse" 
                        @click="answers == undefined ? section.answer = reponse : null"
                        :class="{
                            'active': section.answer != undefined && section.answer == reponse,
                            'correct': answers != undefined && answers[section.id].answer == reponse.id,
                            'uncorrect': answers != undefined && section.answer != undefined && section.answer == reponse && answers[section.id].answer != reponse.id
                        }"
                        v-for="reponse in section.reponses" 
                        v-text="reponse.value"  />
                </div>
            </section>
            <button type="submit">Envoyer</button>
        </form>
        <pre>{{ answers }}</pre>
    </main>
    <!-- <svg v-else class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg> -->
</template>

<script setup>
const user = useState("user", () => false)
const answers = ref(undefined)
definePageMeta({
    middleware: ["auth"]
})

const { data } = await useFetch('/api/quizz')
const submit = async () => {
    const { data: something } = await useFetch('/api/quizz_answers')
    answers.value = something
}

</script>

<style scoped>
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
    background-color: rgba(77,77,77,0.25);
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
p{
    margin: 10px;
    font-size: 1.5em;
    font-weight: 600;}
pre{margin: 25px;}
</style>
