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
                value: "Georges Pompidou et Willy Brandt"
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
    {
        id: 3,
        titre: "Enjeux de L'UE",
        description: "Quels sont les enjeux de l'union européen ?<br><div class=\"separator\"></div> Was sind die Herausforderungen der Europäischen Union ?",
        reponses: [
            {
                id: 0,
                value: "Faire face au changement climatique"
            },
            {
                id: 1,
                value: "Faire face aux problèmes de migrations et au terrorisme"
            },
            {
                id: 2,
                value: "Faire face à la pauvreté et encourager le développement durable"
            }
        ],
        answer: undefined
    },
    {
        id: 4,
        titre: "Pays Fondateurs ?",
        description: "Vrai ou faux l'Allemagne et la France ont été des pays fondateurs de cette union ?<br><div class=\"separator\"></div> Waren Deutschland und Frankreich Gründungsländer dieser Union?",
        reponses: [
            {
                id: 0,
                value: "Vrai"
            },
            {
                id: 1,
                value: "Faux"
            }
        ],
        answer: undefined
    },
    {
        id: 5,
        titre: "Le traité de l'Aix la chapelle",
        description: "Qui a signé le traité de l'Aix la chapelle?<br><div class=\"separator\"></div> Wer hat den Vertrag von Aachen unterschrieben?",
        reponses: [
            {
                id: 0,
                value: "François Mitterrand & Helmut Kohl"
            },
            {
                id: 1,
                value: "François Mitterrand & Hermann Müller"
            },
            {
                id: 2,
                value: "Emmanuel Macron & Angela Merkel"
            },
            {
                id: 3,
                value: "Jacques Chirac & Gerhard Schröder"
            }
        ],
        answer: undefined
    },
    {
        id: 6,
        titre: "Le traité de l'Aix la chapelle",
        description: "Quel est son principal objectif ?<br><div class=\"separator\"></div> Was ist sein Hauptziel?",
        reponses: [
            {
                id: 0,
                value: "Rendre les deux pays bilinguiste"
            },
            {
                id: 1,
                value: "Instaurer une zone économique commune"
            },
            {
                id: 2,
                value: "L'Union des deux pays voisins"
            },
        ],
        answer: undefined
    }
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