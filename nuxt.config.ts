// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/supabase',
        "@nuxt/devtools"
    ],
    runtimeConfig: {
        NTFYKEY: "",
        public: {
            LocalNetwork: false // True pour travailler sans affecter la base de donnée
        }
    },
    css: [
        "@/assets/spinner.css"
    ]
})
