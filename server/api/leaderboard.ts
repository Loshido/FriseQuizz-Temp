import { serverSupabaseServiceRole } from "#supabase/server"

export default defineEventHandler(async event => {
    const client = serverSupabaseServiceRole(event)

    const { data, error } = await client.from("Quizz").select()
    if(error) throw error
    return data
})