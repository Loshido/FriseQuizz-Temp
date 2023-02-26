const questions: Questions = [
    {
        id: 0,
        titre: "Date du traité de l'Élysée",
        description: `Quand est-ce que le traité de l'Élysée a été signé ?`,
        reponses: [
            {
                id: 0,
                value: "22 Février, 1957"
            },
            {
                id: 1,
                value: "22 Janvier, 1963"
            },
            {
                id: 2,
                value: "Décembre, 1970"
            },
            {
                id: 3,
                value: "3 Décembre, 1993"
            }
        ],
        answer: undefined
    },
    {
        id: 1,
        titre: "Acteurs du Traité de l'Élysée",
        description: `Qui a permis le traité de l'Élysée d'exister ?`,
        reponses: [
            {
                id: 0,
                value: "François Mitterrand & Hermann Müller"
            },
            {
                id: 1,
                value: "Georges Pompidou & Konrad Adenauer"
            },
            {
                id: 2,
                value: "Charles de Gaulle & Konrad Adenauer"
            }
        ],
        answer: undefined
    },
    {
        id: 2,
        titre: "Objectif du Traité de l'Élysée",
        description: `Quel a été l'object premier du traité de l'Élysée ?`,
        reponses: [
            {
                id: 0,
                value: "L'Union des deux pays voisins"
            },
            {
                id: 1,
                value: "Combattre les problèmes écologiques"
            },
            {
                id: 2,
                value: "Instaurer une paix temporaire"
            }
        ],
        answer: undefined
    },
]
type Question = {
    id: number,
    titre: string,
    description: string,
    reponses: {
        id: number,
        value: string
    }[],
    answer: any
}
type Questions = Question[]

const SortQuestions = (arr: Questions): Questions => {
    arr.sort(() => Math.random() > 0.5 ? 1 : -1)
    arr.forEach(question => {
        question.reponses.sort(() => Math.random() > 0.5 ? 1 : -1)
    })
    return arr
}
export default defineEventHandler(() => SortQuestions(questions))