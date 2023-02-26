// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/supabase',
        "@nuxt/devtools"
    ],
    plugins: [
        {src: "@/plugins/vercel.ts", mode: "client"}
    ],
    runtimeConfig: {
        NTFYKEY: "",
        NTFYFEEDBACK: ""
    },
    css: [
        "@/assets/spinner.css"
    ]
})
