import type { Question } from "../types/type";
import { BASE_URL } from "./baseApi";

type GetQuestionsResponse = {
    data: Question[];
    page: number;
    limit: number;
    total: number;
};

export const getQuestions = async (
    page: number,
    limit: number
): Promise<GetQuestionsResponse> => {

    const response = await fetch(
        `${BASE_URL}/questions/public-questions?page=${page}&limit=${limit}`
    );

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result: GetQuestionsResponse = await response.json();

    return result;
};


export const getAllQuestions = async (): Promise<Question[]> => {
    const response = await fetch(`${BASE_URL}/questions/public-questions-all`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result = await response.json();

    return result.data;
};