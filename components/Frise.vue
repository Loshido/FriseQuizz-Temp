<template>
    <div class="frise">
        <section v-for="section in sections">
            <div class="date">
                <a v-text="section.date"></a>
                <span />
            </div>
            <div class="info" v-html="section.paragraph"></div>
        </section>
    </div>
</template>

<script>
export default{
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
    background-color: rgba(55, 55, 55, 0.5);
}
div.frise > section > div.info{
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 15px;}
</style>