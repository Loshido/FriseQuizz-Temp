<template>
    <div class="frise">
        <div class="langue-check">
            <div @click="fr = !fr" class="fr" :class="fr ? 'active' : ''">🇫🇷</div>
            <div @click="de = !de" class="de" :class="de ? 'active' : ''">🇩🇪</div>
        </div>
        <section v-for="section in sections">
            <div class="date">
                <a v-text="section.date"></a>
                <span />
            </div>
            <div class="info">
                <div class="fr" v-if="fr || !fr && !de" v-html="section.paragraph"></div>
                <div class="de" v-if="de" v-html="section.paragraph_de"></div>
            </div>
        </section>
    </div>
</template>

<script>
export default{
    data: () => ({
        fr: true,
        de: false
    }),
    props: {
        sections: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
div.frise{
    width: 100%;
    height: auto;
    padding: 25px 15px;}
div.frise > section{
    display: grid;
    grid-template-columns: auto auto;}
div.frise > section > div.date{
    display: grid;
    grid-template-rows: 3em auto;
    justify-items: flex-start;}
div.frise > section > div.date > a{
    color: rgb(55, 55, 55);
    font-size: 1.5em;
    line-height: 2.5em;
    font-weight: 900;
    text-align: center;}
div.frise > section > div.date > span{
    width: 5px;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(55, 55, 55, 0.5);}
div.frise > section > div.info{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0 15px 15px;}
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