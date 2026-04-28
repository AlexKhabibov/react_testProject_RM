import type { Specialization } from "../types/type";
import { BASE_URL } from "./api";

type GetSpecializationsResponse = {
    data: Specialization[];
};

export const getSpecializations = async (): Promise<Specialization[]> => {
    const response = await fetch(`${BASE_URL}/specializations`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result: GetSpecializationsResponse = await response.json();

    return result.data;
};