export type Question = {
    id: number
    title: string
    shortAnswer: string
    longAnswer: string
    complexity: number
    rate: number
}

export type Props = {
    title: string
    shortAnswer: string
    complexity: number
    rate: number
    question: Question
}