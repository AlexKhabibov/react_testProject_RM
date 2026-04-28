import type { Skill } from "../types/type";
import { BASE_URL } from "./api";

type GetSkillsResponse = {
    data: Skill[];
};

export const getSkills = async (): Promise<Skill[]> => {
    const response = await fetch(`${BASE_URL}/skills`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result: GetSkillsResponse = await response.json();

    return result.data;
};