import { BASE_URL } from "./api";
import type { Question } from "../types/type";

type GetQuestionsResponse = {
    data: Question[];
};

export const getQuestions = async (): Promise<Question[]> => {
    const response = await fetch(`${BASE_URL}/questions/public-questions`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result: GetQuestionsResponse = await response.json();

    return result.data;
};