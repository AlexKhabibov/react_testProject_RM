import { useLoaderData, useNavigation, useNavigate } from "react-router-dom";
import type { Question } from "../../types/type";
import styles from './QuestionDetailsCard.module.css';

function QuestionDetailsCard() {
    const question = useLoaderData() as Question;
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    const navigate = useNavigate(); // Добавляем для кнопки «Назад»

    // Индикатор загрузки
    if (isLoading) {
        return (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
                <span>Загружаем вопрос...</span>
            </div>
        );
    }

    // Обработка отсутствия данных
    if (!question) {
        return <div className={styles.error}>Вопрос не найден</div>;
    }

    return (
        <div className={styles.card}>
            {/* Кнопка «Назад» в верхнем левом углу */}
            <button
                className={styles.backButton}
                onClick={() => navigate(-1)}
            >
                ← Назад
            </button>

            <div className={styles.imageWrapper}>
                {question.imageUrl ? (
                    <img
                        src={question.imageUrl}
                        alt={question.title ?? "Question preview"}
                        className={styles.image}
                    />
                ) : (
                    <div className={styles.placeholder}>
                        <span>Нет изображения</span>
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <h2 className={styles.title}>
                    {question.title}
                </h2>

                <p className={styles.description}>
                    {question.description || "Описание отсутствует"}
                </p>

                {/* Дополнительные поля */}
                {question.category && (
                    <div className={styles.category}>
                        Категория: {question.category}
                    </div>
                )}

                {question.difficulty && (
                    <div className={styles.difficulty}>
                        Сложность: {question.difficulty}
                    </div>
                )}

                {question.tags && question.tags.length > 0 && (
                    <div className={styles.tags}>
                        Теги: {question.tags.join(", ")}
                    </div>
                )}
            </div>

            {/* Кнопки «Предыдущий» / «Следующий» внизу */}
            <div className={styles.navigation}>
                <button
                    className={styles.prevButton}
                    onClick={() => navigate(`/questions/${question.previousId}`)} // замените на логику получения ID предыдущего вопроса
                >
                    ← Предыдущий
                </button>

                <button
                    className={styles.nextButton}
                    onClick={() => navigate(`/questions/${question.nextId}`)} // замените на логику получения ID следующего вопроса
                >
                    Следующий →
                </button>
            </div>
        </div>
    );
}

export default QuestionDetailsCard;