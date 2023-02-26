import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async event => {
    const client = serverSupabaseClient(event)
    const username = await readBody(event)
    await client.from("Quizz").insert({
        username,
        points: 0,
        parties: 0,
        tx_reussite: 0
    })
    return true
})