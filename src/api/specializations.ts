export const getSpecializations = async () => {
    try {
        const response = await fetch('https://api.yeatwork.ru/api#/specializations/SpecializationController_getSpecializations');
        if (!response.ok) {
            throw new Error(`HTTP ошибка! Код: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке специализаций:', error);
        throw error;
    }
};