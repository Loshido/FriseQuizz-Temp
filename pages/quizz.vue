<template>
    <main>
        <Navigation titre="Quizz" />
        <form>
            <label for="username">Pseudo</label>
            <input required id="username" autofocus type="text" maxlength="20">
            <button type="submit">Démarrer une partie</button>
        </form>
    </main>
</template>

<style>
form{
    background-color: #fff;
    margin-bottom: -10px;

    width: 100%;
    height: auto;
    padding: 10px 25px;}
form > input{
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