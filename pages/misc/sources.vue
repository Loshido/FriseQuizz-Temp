<template>
    <main>
        <div class="goback">
            <NuxtLink to="/">Accueil</NuxtLink>
        </div>
        <div class="sources">
            <a href="https://de.wikipedia.org/wiki/%C3%89lys%C3%A9e-Vertrag">Elysée-Vertrag - de.wikipedia.org</a>
        </div>
    </main>
</template>

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