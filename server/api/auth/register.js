import { serverSupabaseClient } from "#supabase/server";

const env = useRuntimeConfig()
export default defineEventHandler(async event => {
    const client = serverSupabaseClient(event)
    const url = new URL("http://localhost:3000" + event.path)
    const username = url.searchParams.get("username") || ""

    const { error } = await client.from("Quizz").insert({
        username,
        points: 0,
        parties: 0,
        tx_reussite: 0
    })
    if (error) {
        fetch("https://ntfy.sh", {
            method: "POST",
            body: JSON.stringify({
                "topic": env.NTFYKEY,
                "message": `Someone registered as ${username}`,
                "title": "Nouvel utilisateur enregistré sur le Quizz du site de l'amitié franco-allemande"
            })
        })
    }
    return true
})