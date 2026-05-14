import type { Question } from "../types/type";
import { BASE_URL } from "./baseApi";

type GetQuestionsParams = {
    page: number;
    limit: number;
    title?: string;
    skills?: number[];
    specializationId?: number;
    skillFilterMode?: "ALL" | "ANY";
};

type GetQuestionsResponse = {
    data: Question[];
    page: number;
    limit: number;
    total: number;
};

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

    // 🔍 поиск
    if (title.trim()) {
        params.append("title", title.trim());
    }

    // 🛠 skills
    skills.forEach(skillId => {
        params.append("skills", String(skillId));
    });

    // 🧠 режим фильтрации
    if (skills.length) {
        params.append("skillFilterMode", skillFilterMode);
    }

    // 🎯 specialization
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