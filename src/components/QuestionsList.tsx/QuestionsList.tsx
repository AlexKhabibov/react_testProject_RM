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
                    question={question} title={""} shortAnswer={""} complexity={0} rate={0}                />
            ))}
        </div>
    )
}

export default QuestionsList;