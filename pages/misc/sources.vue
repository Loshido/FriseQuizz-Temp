<template>
    <main>
        <div class="goback">
            <NuxtLink to="/">Accueil</NuxtLink>
        </div>
        sources ici
    </main>
</template>

<style scoped>
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