<template>
    <header>
        <nav>
            <NuxtLink active-class="active" to="/">Frise Chronologique</NuxtLink>
            <NuxtLink active-class="active" to="/quizz">Quizz</NuxtLink>
            <NuxtLink active-class="active" to="/leaderboard">Leaderboard</NuxtLink>
        </nav>
        <h1 class="title" v-text="titre"></h1>
        <p v-if="description" v-html="description" />
    </header>
</template>

<script>
export default{
    props: {
        titre: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    }
}
</script>

<style>
header > h1.title{
    color: rgb(55, 55, 55);
    font-size: 2.25em;
    margin: 20px 25px;
    margin-bottom: 5px;}
header > p{
    font-size: 1.2em;
    font-weight: 300;
    margin: 10px 30px;
    margin-right: 10px;
    margin-bottom: 20px;}
header > nav{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    gap: 25px;
    padding: 25px;}
    main > header > nav > a{
    color: black;
    text-decoration: none;
    font-size: 1.3em;
    padding: 8px 16px;
    font-weight: 500;
    transition: all .5s ease-in-out;}

header > nav > :hover{
    background-color: rgba(0,0,0, 0.75);
    color: #fff;}
header > nav > *.active{
    background-color: rgba(0,0,0, 0.5);
    color: #fff;}
</style>