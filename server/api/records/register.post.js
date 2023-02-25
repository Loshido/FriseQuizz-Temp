import { serverSupabaseClient } from "#supabase/server";

const env = useRuntimeConfig()
export default defineEventHandler(async event => {
    const client = serverSupabaseClient(event)
    const username = await readBody(event)
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
                "message": `Nouvel utilisateur : ${username}`,
                "title": "notification du site de l'amitié franco-allemande"
            })
        })
    }
    return true
})