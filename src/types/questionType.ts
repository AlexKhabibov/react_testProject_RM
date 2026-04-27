export type Question = {
    id: number
    title: string
    shortAnswer: string
    longAnswer: string
    complexity: number
    rate: number
}

export type QuestionCardProps = {
    question: Question
}

export type SearchQuestionsProps = {
  search: string;
  setSearch: (value: string) => void;
};