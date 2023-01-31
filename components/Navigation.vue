<template>
    <nav>
        <NuxtLink active-class="active" to="/">Frise Chronologique</NuxtLink>
        <NuxtLink active-class="active" to="/quizz">Quizz</NuxtLink>
        <NuxtLink active-class="active" to="/leaderboard">Leaderboard</NuxtLink>
    </nav>
</template>

<style>
nav{
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

nav > :hover{
    background-color: rgba(0,0,0, 0.75);
    color: #fff;}
nav > *.active{
    background-color: rgba(0,0,0, 0.5);
    color: #fff;}
</style>