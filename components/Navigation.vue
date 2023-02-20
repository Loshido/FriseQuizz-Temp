<template>
    <header>
        <nav>
            <NuxtLink active-class="active" to="/">Frise Chronologique</NuxtLink>
            <NuxtLink active-class="active" to="/quizz">Quizz</NuxtLink>
            <NuxtLink active-class="active" to="/leaderboard">Leaderboard</NuxtLink>
        </nav>
        <div class="title">
            <h1 class="title" v-text="titre"></h1>
            <div v-if="flag" class="french_flag flag">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div v-if="flag" class="german_flag flag">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div v-else class="underline" />
        </div>
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
        },
        flag: {
            type: Boolean,
            default: true,
            required: false
        }
    }
}
</script>

<style>
@media (min-width: 1000px){
    header > nav{font-size: 1em;}
    header > nav > a{font-size: 1em;}
    header > p{
        max-width: 60%;
    }
}
div.underline{
    width: 40px;
    height: 4px;
    margin-bottom: 10px;
    border-radius: 1px;
    background-color: rgba(55, 55, 55, 0.5);
}

div.title{
    display: flex;
    margin: 20px 25px;
    margin-bottom: 5px;
    gap: 10px;
    align-items: flex-end;
    flex-direction: row;}
div.title > div.flag{
    width: 20px;
    height: 10px;}

div.french_flag{
    display: grid;
    grid-template-columns: repeat(3, 1fr);}
div.german_flag{
    display: grid;
    grid-template-rows: repeat(3, 1fr);}
:is(div.french_flag, div.german_flag) > *{
    width: 100%;
    height: 100%;}
div.french_flag > span:nth-child(1){background-color: rgb(0,85,164);}
div.french_flag > span:nth-child(2){background-color: rgb(255, 255, 255);}
div.french_flag > span:nth-child(3){background-color: rgb(239,65,53);}

div.german_flag > span:nth-child(1){background-color: rgb(0,0,0);}
div.german_flag > span:nth-child(2){background-color: rgb(255, 0, 0);}
div.german_flag > span:nth-child(3){background-color: rgb(255,204,0);}

header h1.title{
    color: rgb(55, 55, 55);
    font-size: 2.25em;}
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