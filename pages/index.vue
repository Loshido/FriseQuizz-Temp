<template>
    <main>
        <Navigation titre="Bienvenue" description="Vous retrouverez sur cette page, une frise chronologique des événements qui ont contribué à l'<u>amitié</u> entre la France 🇫🇷 et l'Allemagne 🇩🇪" />
        <NuxtLink to="/quizz">
            <section id="quizz-button" class="module">
                <h1>
                    Quizz
                </h1>
                <p>Testez vos connaissances !</p>
            </section>
        </NuxtLink>
        <Frise :sections="frise" />
        <footer>
            <h3>Informations supplémentaires</h3>
            <div class="links">
                <NuxtLink to="misc/feedback">Contact / Feedback</NuxtLink>
                <NuxtLink to="misc/sources">Sources</NuxtLink>
            </div>
        </footer>
    </main>
</template>

<script setup>
import frise from "@/assets/frise.json"
</script>

<style>
@media (min-width: 1000px) {
    section.module{
        width: fit-content !important;
        padding-right: 75px !important;
    }
}

footer{
    margin: 15px 10px;}
footer > div.links{
    margin: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

section.module{
    background-color: rgba(0,0,0,0.1);
    border-radius: 5px;
    width: 92.5%;
    min-height: 50px;
    margin: 0 3.5%;
    padding: 15px;
    color: rgb(89, 115, 151);
    transition: all .25s ease-in-out;}
section.module > h1{font-size: 2em;}
section.module > p{font-size: 1em;}
section.module#quizz-button{
    background-color: rgba(89, 115, 151, 0.15);
    border: 2px solid rgba(89, 115, 151, 0.3);}
section.module#quizz-button:hover{background-color: rgba(89, 115, 151, 0.4);}
</style>