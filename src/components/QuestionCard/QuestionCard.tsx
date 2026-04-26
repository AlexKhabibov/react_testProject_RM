import { useEffect, useState } from "react";
import styles from './QuestionCard.module.css'
import type { Question } from "../../types/questionType";
import { getQuestions } from "../../api/questionsApi";

function QuestionCard() {
    const [open, setOpen] = useState(false)
    const [questions, setQuestions] = useState<Question[]>([])

    useEffect(() => {
        getQuestions().then(setQuestions)
    }, [])

    return (
        <div>
            {questions.map((question) => (
                <div key={question.id} className={styles.card}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>
                            {question.title}
                        </h3>

                        <div className={styles.meta}>
                            <span>⭐ {question.rate}</span>
                            <span>⚡ {question.complexity}/10</span>
                        </div>
                    </div>

                    <p className={styles.short}>
                        {question.shortAnswer}
                    </p>

                    <button
                        className={styles.button}
                    >
                        Показать ответ
                    </button>

                    <div className={styles.answer}>
                        {question.longAnswer}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default QuestionCard;