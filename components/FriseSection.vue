<template>
    <section>
        <a v-text="titre" :id="identifier ? identifier : null" :href="identifier ? '#' + identifier : null" />
        <div>
            <span />
            <div class="info">
                <slot v-if="lang.fr" name="fr" />
                <span v-if="lang.de && lang.fr" />
                <slot v-if="lang.de" name="de" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup(){
        const lang = useState("lang", () => ({
            fr: true,
            de: false
        }))
        return { lang }
    },
    props: {
        titre: {
            type: String,
            required: true
        },
        identifier: {
            type: String,
            required: false
        }
    }
}
</script>