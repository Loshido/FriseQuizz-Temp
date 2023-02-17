const questions = [
    {
        id: 0,
        titre: "Nia nia",
        description: `<strong> something </strong>`,
        reponses: [
            {
                id: 0,
                value: "True"
            },
            {
                id: 1,
                value: "False"
            }
        ],
        answer: undefined
    },
    {
        id: 1,
        titre: "Nia nia nia",
        description: `<em> something </em>`,
        reponses: [
            {
                id: 0,
                value: "0"
            },
            {
                id: 1,
                value: "1"
            },
            {
                id: 2,
                value: "2"
            }
        ],
        answer: undefined
    },
    {
        id: 2,
        titre: "Nia nia nia nia",
        description: `<pre> something </pre>`,
        reponses: [
            {
                id: 0,
                value: "Deutschland"
            },
            {
                id: 1,
                value: "Frankreich"
            }
        ],
        answer: undefined
    },
]

export default defineEventHandler(() => questions)