<template>
    <main>
        <Navigation :flag="true" titre="Quizz" />
        <form @submit.prevent="submit">
            <div class="entree">
                <label for="username">Pseudo</label>
                <input required id="username" autofocus type="text" maxlength="20" v-model="username">
            </div>
            <button type="submit">Démarrer une partie</button>
            <pre v-if="logs != ''" v-text="logs"></pre>
            <audio id="click">
                <source src="@/assets/audio/click.mp3" type="audio/mpeg">
            </audio>
        </form>
    </main>
</template>

<script>
export default{
    data: () => ({
        username: "",
        logs: ""
    }),
    setup(){
        const user = useState("user", () => false)
        return { user }
    },
    methods: {
        submit: async function() {
            const node = document.getElementById("click")
            const router = useRouter()
            if(this.username == "") return // pas de pseudo 
            if(this.user != false) router.push("/game") // Joueur authentifié

            await useLazyFetch("/api/records/register", {
                method: "POST",
                body: this.username
            })

            this.user = this.username
            node.play()
            setTimeout(() => {
                router.push("/game")
            }, 1500);
        }
    }
}
</script>

<style>
@media (min-width: 1000px) {
    form > div > input{width: 500px !important;}
}

div.separator{
    width: 95%;
    height: 2px;
    background-color: rgb(55,55,55);
    margin: 10px 2.5%;
}

form{
    background-color: #fff;
    margin-bottom: -10px;

    width: 100%;
    height: auto;
    padding: 10px 25px;}
form > div{
    display: flex;
    flex-direction: column;}
form > div > input{
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
    cursor: pointer;
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