import type { LoaderFunctionArgs } from "react-router-dom";

import type {
    GetQuestionsParams,
    GetQuestionsResponse,
    Question,
    QuestionWithNavigation
} from "../types/type";

import { BASE_URL } from "./baseApi";

// список всех вопросов
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
export const getQuestionById = async (
    id: number | string
): Promise<Question> => {

    const response = await fetch(
        `${BASE_URL}/questions/public-questions/${id}`
    );

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    return response.json();
};

// loader для router
export const questionDetailsLoader = async ({
    params
}: LoaderFunctionArgs): Promise<QuestionWithNavigation> => {

    const { id } = params;

    if (!id) {
        throw new Error("ID вопроса не указан");
    }

    try {

        // текущий вопрос
        const question = await getQuestionById(id);

        // только текущая страница вопросов
        const questionsResponse = await getQuestions({
            page: 1,
            limit: 100
        });

        const questions = questionsResponse.data ?? [];

        const currentIndex = questions.findIndex(
            q => q.id === question.id
        );

        return {
            ...question,

            previousQuestionId:
                currentIndex > 0
                    ? questions[currentIndex - 1].id
                    : null,

            nextQuestionId:
                currentIndex < questions.length - 1
                    ? questions[currentIndex + 1].id
                    : null,
        };

    } catch (error) {

        console.error(error);

        return {
            id: 0,
            title: "Ошибка",
            previousQuestionId: null,
            nextQuestionId: null,
        };
    }
};