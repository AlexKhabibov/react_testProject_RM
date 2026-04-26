import { BASE_URL } from "./api";

export const getSkills = async () => {
    try {
        const response = await fetch(`${BASE_URL}skills`);
        if (!response.ok) {
            throw new Error(`HTTP ошибка! Код: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке навыков:', error);
        throw error;
    }
};