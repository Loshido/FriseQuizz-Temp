// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/supabase',
        "@nuxt/devtools"
    ],
    runtimeConfig: {
        public: {
            NTFYKEY: "",
            LocalNetwork: true // True pour travailler sans affecter la base de donnée
        }
    },
    css: [
        "@/assets/spinner.css"
    ]
})
