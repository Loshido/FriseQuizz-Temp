import { serverSupabaseServiceRole } from "#supabase/server";

export default defineEventHandler(async event => {
    const client = serverSupabaseServiceRole(event)
    const url = new URL("http://localhost:3000" + event.path)

    const username = url.searchParams.get("username")
    const correct = parseInt(url.searchParams.get("correct"))
    const length = parseInt(url.searchParams.get("length")) // taille du questionnaire pour détérminer tx_reussite

    const { data: records } = await client.from("Quizz").select("*").eq("username", username)
    if(records[0]) {
        const user = {
            points: parseInt(records[0].points),
            parties: parseInt(records[0].parties)
        }
        const tx_reussite = ((user.points + correct) / ((user.parties + 1) * length)) * 100
        const { error } = await client.from("Quizz").update({
            parties: records[0].parties + 1,
            points: records[0].points + parseInt(correct),
            tx_reussite: Math.floor(tx_reussite)
        }).eq("username", username)
        if(error) throw error  
    }
})