const env = useRuntimeConfig()

export default defineEventHandler(async event => {
    if(!env.NTFYFEEDBACK) return
    const body = await readBody(event)
    await fetch("https://ntfy.sh", {
        method: "POST",
        body: JSON.stringify({
            "topic": env.NTFYFEEDBACK,
            "message": body,
            "title": "Message entrant : feedback du site sur l'amitié franco-allemande."
        })
    })
    return body
})