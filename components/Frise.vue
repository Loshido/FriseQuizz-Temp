<template>
    <div class="frise">
        <div class="langue-check">
            <div @click="fr = (fr && !de) ? fr : !fr" class="fr" :class="fr ? 'active' : ''">🇫🇷</div>
            <div @click="de = (de && !fr) ? de : !de" class="de" :class="de ? 'active' : ''">🇩🇪</div>
        </div>
        <div class="data">
            <section v-for="section in sections">
                <a v-text="section.date" />
                <div>
                    <span />
                    <div class="info">
                        <div class="fr" v-if="fr" v-html="section.paragraph"></div>
                        <span v-if="de && fr" />
                        <div class="de" v-if="de" v-html="section.paragraph_de"></div>
                    </div>
                </div>
            </section>
        </div>
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
@media (min-width: 1000px) {
    div.frise > div.data{
        width: 100%;
        overflow-y: scroll;
        display: grid;
        grid-template-columns: repeat(10, 50%);
        grid-template-rows: 1fr;
        gap: 50px;
    }
    div.frise > div.data > section{
        width: 100%
    }
}

div.frise{
    width: 100%;
    height: auto;
    padding: 25px 15px;}
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
    padding: 10px 0 15px 15px;}
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