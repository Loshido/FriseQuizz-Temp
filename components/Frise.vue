<template>
    <div class="frise">
        <div class="langue-check">
            <div
                @click="lang.fr = (lang.fr && !lang.de) ? lang.fr : !lang.fr" class="fr" 
                :class="lang.fr ? 'active' : ''">🇫🇷</div>
            <div 
                @click="lang.de = (lang.de && !lang.fr) ? lang.de : !lang.de" class="de" 
                :class="lang.de ? 'active' : ''">🇩🇪</div>
        </div>
        <div class="data">
            <slot/>
        </div>
    </div>
</template>

<script setup>
const lang = useState("lang", () => ({
    fr: true,
    de: false
}))
</script>

<style>
@media (min-width: 1000px) {
    div.frise{
        padding: 25px 15px;}
    div.frise > div.data{
        width: 100%;
        overflow-y: scroll;
        display: grid;
        grid-template-columns: repeat(4, 50%);
        grid-template-rows: 1fr;
        gap: 50px;
    }
    div.frise > div.data > section{
        width: 100%}
    div.frise section > div > div.info{
        padding: 10px 0 15px 15px !important;}
}

div.frise{
    width: 100%;
    height: auto;
    padding: 12.5px 7.5px;}
div.frise section{
    margin-top: 1.25em;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25em;
    display: flex;}
div.frise section > div{
    display: grid;
    grid-template-columns: 1em auto;
    justify-items: flex-start;}
div.frise section > a{
    color: rgb(55, 55, 55);
    font-size: 1.5em;
    line-height: 1em;
    font-weight: 900;}
div.frise section > div > span{
    width: 5px;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(55, 55, 55, 0.5);}
div.frise section > div > div.info{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 0 7.5px 7.5px;}
div.frise section > div > div.info > span{
    margin: 10px 5%;
    width: 90%;
    height: 2px;
    background-color: rgba(55, 55, 55, 0.2);
}
div.frise > div.langue-check{
    padding: 5px;
    display: flex;
    flex-direction: row;
    gap: 15px;}
div.frise > div.langue-check > div{
    border-radius: 5px;
    background-color: rgba(55,55,55,0.5);
    color: #fff;
    padding: 5px 8px;
    cursor: pointer;}
div.frise > div.langue-check > div:hover{background-color: rgba(55, 55, 55, 0.8);}
div.frise > div.langue-check > div.active{background-color: rgba(55, 55, 55, 0.9);}
</style>