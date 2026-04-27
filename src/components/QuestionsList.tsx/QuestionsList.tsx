import { useEffect, useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { getQuestions } from "../../api/questionsApi";
import type { Question } from "../../types/questionType";
import styles from './QuestionsList.module.css'

function QuestionsList() {
    const [questions, setQuestions] = useState<Question[]>([])

    useEffect(() => {
        getQuestions().then(setQuestions)
    }, [])

    return (
        <div className={styles.list}>
            {questions.map((question) => (
                <QuestionCard
                    key={question.id}
                    question={question}
                />
            ))}
        </div>
    )
}

export default QuestionsList;