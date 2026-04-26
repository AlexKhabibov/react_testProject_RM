export const getQuestions = async () => {
    try {
        const response = await fetch('https://api.yeatwork.ru/api#/questions/QuestionController_getPublicQuestions');
        if (!response.ok) {
            throw new Error(`HTTP ошибка! Код: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке вопросов:', error);
        throw error;
    }
};