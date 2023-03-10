import { serverSupabaseServiceRole } from "#supabase/server";

export default defineEventHandler(async event => {
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event)
    
    const { data: records } = await client.from("Quizz").select("*").eq("username", body.username)
    if(records[0]) {
        const user = {
            points: records[0].points,
            parties: records[0].parties,
            timing: records[0].best_timing
        }
        const timing = user.timing <= body.elapsed ? Math.floor(body.elapsed) : user.timing
        const tx_reussite = ((user.points + body.correct) / ((user.parties + 1) * body.length)) * 100
        const score = Math.floor((tx_reussite * 10_000) + (10_000 / timing))
        const { error } = await client.from("Quizz").update({
            parties: records[0].parties + 1,
            points: records[0].points + body.correct,
            tx_reussite: Math.floor(tx_reussite),
            best_timing: timing,
            score
        }).eq("username", body.username)
        if(error) throw error  
    }
})