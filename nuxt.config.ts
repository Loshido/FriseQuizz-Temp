// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/supabase',
        "@nuxt/devtools"
    ],
    runtimeConfig: {
        public: {
            NTFYKEY: ""
        }
    },
    css: [
        "@/assets/spinner.css"
    ]
})
