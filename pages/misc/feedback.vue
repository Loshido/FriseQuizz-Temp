<template>
    <main>
        <div class="goback">
            <NuxtLink to="/">Accueil</NuxtLink>
        </div>
        <form @submit.prevent="send">
            <label for="feedback">Laisser un petit mot ?</label>
            <textarea v-model="message" name="feedback" id="feedback" cols="30" rows="2"></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </main>
</template>

<script>
export default{
    data: () => ({
        message: ""
    }),
    methods: {
        send: async function(){
            const { data: response } = await useFetch("/api/feedback", {
                method: "POST",
                body: this.message
            })
            const node = document.querySelector("form > button[type='submit']")
            node.setAttribute("disabled", true)
            node.innerText = "Message envoyé!"
            node.classList.add("success")
            console.log(response)
        }
    }
}
</script>

<style scoped>
main{
    height: auto;}
main > form{
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;}
main > form > textarea{
    width: 100%;
    padding: .5em;
    font-size: 1.4em;
    resize: vertical;
    border: 1px solid rgba(55, 55, 55, 0.25)}
main > form > button[type="submit"]{
    margin: 0;
    padding: 8px 16px;
    cursor: pointer;
    color: #fff;
    font-size: 1.2em;
    background-color: rgb(55, 55, 55);
    width: 100%;}
main > form > button[type="submit"].success{
    background-color: rgb(3, 148, 136);
}
main > div.goback{
    margin: 21px 14px;}
main > div.goback > a{
    width: fit-content;
    color: black;
    text-decoration: none;
    font-size: 1.3em;
    padding: 8px 16px;
    font-weight: 500;
    transition: all .5s ease-in-out;}
main > div.goback > a:hover{
    background-color: rgba(0,0,0, 0.75);
    color: #fff;}
</style>