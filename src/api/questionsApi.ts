import { BASE_URL } from "./api";

export const getQuestions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/questions/public-questions`);
        if (!response.ok) {
            throw new Error(`HTTP ошибка! Код: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке вопросов:', error);
        throw error;
    }
};