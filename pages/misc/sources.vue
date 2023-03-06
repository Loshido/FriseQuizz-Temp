<template>
    <main>
        <div class="goback">
            <NuxtLink to="/">Accueil</NuxtLink>
        </div>
        <div class="sources">
            <a v-for="source in sources" v-text="source.text" :href="source.link" target="_blank" />
        </div>
    </main>
</template>

<script setup lang="ts">

type Sources = {
    link: string,
    text: string,
}[]

const sources: Sources = [
    {
        link: "https://youtu.be/RXbcAYxuZxw",
        text: "L'amitié Franco-Allemande (Emmanuel Macron) - youtube.com"
    },
    {
        link: "https://youtu.be/NBSJBq7Egb8",
        text: "Le traité d'Aix-la-Chapelle (Brut) - youtube.com"
    },
    {
        link: "https://youtu.be/nA6h22QAikc",
        text: "Le traité d'Aix-la-Chapelle (Ministère de l'Europe et des Affaires étrangères) - youtube.com"
    },
    {
        link: "https://de.wikipedia.org/wiki/%C3%89lys%C3%A9e-Vertrag",
        text: "Elysée-Vertrag - de.wikipedia.org"
    },
    {
        link: "https://youtu.be/aYFNuwShrhM",
        text: "La Seconde Guerre mondiale (Histoire Géo) - youtube.com"
    }
]

</script>

<style scoped>
main > div.goback{
    margin: 21px 14px;}
main > div.goback > a{
    border: 2px solid rgba(0,0,0, 0.75);
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
main > div.sources{
    margin: 25px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}
</style>