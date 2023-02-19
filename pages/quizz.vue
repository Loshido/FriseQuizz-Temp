<template>
    <main>
        <Navigation titre="Quizz" />
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
            const env = useRuntimeConfig()
            const router = useRouter()
            if(this.username == "") return // pas de pseudo 
            if(this.user != false) router.push("/game") // Joueur authentifié

            if(!env.public.LocalNetwork) {
                await useFetch("/api/auth/register", {
                    query: {
                        username: this.username
                    }
                })
            }
            this.user = this.username
            node.play()
            setTimeout(() => {
                router.push("/game")
            }, 2000);
        }
    }
}
</script>

<style>
@media (min-width: 1000px) {
    form > div > input{width: 500px !important;}
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