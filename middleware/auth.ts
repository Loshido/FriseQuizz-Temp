export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path == "/game") {
        const user = useState("user", () => false)
        if(user.value === false) return "/quizz"
    }
})