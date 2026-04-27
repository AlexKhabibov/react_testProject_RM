import { useEffect, useState } from "react";
import styles from './QuestionCard.module.css'
import type { Question } from "../../types/questionType";
import { getQuestions } from "../../api/questionsApi";

function QuestionCard() {
    const [openId, setOpenId] = useState<null | number>(null)
    const [questions, setQuestions] = useState<Question[]>([])

    useEffect(() => {
        getQuestions().then(setQuestions)
    }, [])

    return (
        <div>
            {questions.map((question) => (
                <div key={question.id} className={styles.card}>

                    <button
                        className={styles.header}
                        onClick={() =>
                            setOpenId(
                                openId === question.id
                                    ? null
                                    : question.id
                            )
                        }
                    >
                        <h3 className={styles.title}>
                            {question.title}
                        </h3>

                        <span>
                            {openId === question.id ? '▲' : '▼'}
                        </span>
                    </button>

                    {openId === question.id && (
                        <div className={styles.content}>

                            <div className={styles.meta}>
                                <span>⭐ {question.rate}</span>
                                <span>⚡ {question.complexity}/10</span>
                            </div>

                            <p className={styles.answer}>
                                {question.longAnswer}
                            </p>

                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default QuestionCard;