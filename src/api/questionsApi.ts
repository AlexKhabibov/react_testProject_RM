import type { LoaderFunctionArgs } from "react-router-dom";
import type { GetQuestionsParams, GetQuestionsResponse, Question } from "../types/type";
import { BASE_URL } from "./baseApi";

// списко всех вопросов
export const getQuestions = async ({
    page,
    limit,
    title = "",
    skills = [],
    specializationId,
    skillFilterMode = "ANY"
}: GetQuestionsParams): Promise<GetQuestionsResponse> => {

    const params = new URLSearchParams();

    params.append("page", String(page));
    params.append("limit", String(limit));

    // поиск
    if (title.trim()) {
        params.append("title", title.trim());
    }

    // skills
    skills.forEach(skillId => {
        params.append("skills", String(skillId));
    });

    // режим фильтрации
    if (skills.length) {
        params.append("skillFilterMode", skillFilterMode);
    }

    // specialization
    if (specializationId !== undefined) {
        params.append(
            "specializationId",
            String(specializationId)
        );
    }

    const response = await fetch(
        `${BASE_URL}/questions/public-questions?${params.toString()}`
    );

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    return response.json();
};

// получаем вопрос по id
export const getQuestionById = async (id: number | string): Promise<Question> => {
    const response = await fetch(`${BASE_URL}/questions/public-questions/${id}`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    return response.json();
};

// loader для router
// loaders/questionDetailsLoader.ts
export const questionDetailsLoader = async ({
    params
}: LoaderFunctionArgs): Promise<Question> => {
    const { id } = params;

    if (!id) {
        throw new Error("ID вопроса не указан в параметрах маршрута");
    }

    try {
        const question = await getQuestionById(id);
        return question;
    } catch (error) {
        console.error("Ошибка загрузки вопроса:", error);
        throw error;
    }
};
