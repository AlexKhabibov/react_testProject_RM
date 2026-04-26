export const getSkills = async () => {
    try {
        const response = await fetch('https://api.yeatwork.ru/api#/skills/SkillController_getSkills');
        if (!response.ok) {
            throw new Error(`HTTP ошибка! Код: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке навыков:', error);
        throw error;
    }
};