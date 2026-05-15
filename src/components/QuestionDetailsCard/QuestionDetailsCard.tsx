import {
    useLoaderData,
    useNavigation,
    useNavigate
} from "react-router-dom";

import type {
    QuestionWithNavigation
} from "../../types/type";

import styles from './QuestionDetailsCard.module.css';

function QuestionDetailsCard() {

    const question = useLoaderData() as QuestionWithNavigation;

    const navigation = useNavigation();

    const isLoading = navigation.state === 'loading';

    const navigate = useNavigate();

    // loader
    if (isLoading) {
        return (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
                <span>Загружаем вопрос...</span>
            </div>
        );
    }

    // нет данных
    if (!question) {
        return (
            <div className={styles.error}>
                Вопрос не найден
            </div>
        );
    }

    return (
        <div className={styles.cardWrapper}>

            <button
                className={styles.backButton}
                onClick={() => navigate('/')}
            >
                ← Назад
            </button>

            <div className={styles.card}>

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
            </div>

            <div className={styles.navigation}>

                <button
                    className={styles.prevButton}
                    disabled={!question.previousQuestionId}
                    onClick={() => {
                        if (question.previousQuestionId) {
                            navigate(
                                `/questions/${question.previousQuestionId}`
                            );
                        }
                    }}
                >
                    ← Предыдущий
                </button>

                <button
                    className={styles.nextButton}
                    disabled={!question.nextQuestionId}
                    onClick={() => {
                        if (question.nextQuestionId) {
                            navigate(
                                `/questions/${question.nextQuestionId}`
                            );
                        }
                    }}
                >
                    Следующий →
                </button>

            </div>
        </div>
    );
}

export default QuestionDetailsCard;