import { useLoaderData } from "react-router-dom";
import styles from './QuestionDetailsShortAnswer.module.css';
import type { Question } from "../../types/type";


function QuestionDetailsShortAnswer() {
    const question = useLoaderData() as Question;

    console.log(question);
    // Безопасное получение shortAnswer с fallback‑значением
    let shortAnswer: string;

    if (question.description) {
        shortAnswer = question.description;
    } else if (question.longAnswer) {
        const words = question.longAnswer.split(' ');
        shortAnswer = words.slice(0, 50).join(' ') + '...';
    } else {
        shortAnswer = "Краткий ответ отсутствует";
    }

    const hasContent = !!shortAnswer.trim();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Краткий ответ
            </h2>

            {hasContent ? (
                <p className={styles.text}>
                    {shortAnswer}
                </p>
            ) : (
                <p className={styles.noContent}>
                    Краткий ответ отсутствует
                </p>
            )}
        </div>
    );
}

export default QuestionDetailsShortAnswer;