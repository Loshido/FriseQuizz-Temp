<template>
    <div>
        <p>Vous êtes connectez en tant que {{ user }}</p>
        <p>Partie en développement, j'ai pas pu finir...</p>

        <pre v-if="data">{{ data[0] }}</pre>

        <NuxtLink to="/">Accueil</NuxtLink>
    </div>
</template>

<script setup>
const user = useState("user", () => false)
definePageMeta({
    middleware: ["auth"]
})

const { data } = await useAsyncData(async () => {
    const client = useSupabaseClient()
    const { data, error} = await client.from("Quizz").select().eq("username", user.value)
    if(error) throw error
    return data
})

</script>

<style scoped>
p{
    margin: 10px;
    font-size: 1.5em;
    font-weight: 600;}
pre{margin: 25px;}
</style>