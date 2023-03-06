const answers: Answers = [
    {
        id: 0,
        answer: 1
    },
    {
        id: 1,
        answer: 2
    },
    {
        id: 2,
        answer: 0
    },
    {
        id: 3,
        answer: 1
    },
    {
        id: 4,
        answer: 0
    },
    {
        id: 5,
        answer: 2
    },
    {
        id: 6,
        answer: 1
    },
    {
        id: 7,
        answer: 1
    },
    {
        id: 8,
        answer: 1
    }
]

type Answers = {
    id: number,
    answer: number
}[]

export default defineEventHandler(() => answers)