import { useEffect, useState } from "react";
import { getQuestions } from "../../../api/questionsApi";
import QuestionCard from "../../QuestionCard/QuestionCard";
import styles from './QuestionsList.module.css'
import type { Question } from "../../../types/questionType";

function QuestionsList({ search }: { search: string }) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getQuestions()
            .then(setQuestions)
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    const filtered = questions.filter(q =>
        q.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.list}>
            {filtered.map((question) => (
                <QuestionCard
                    key={question.id}
                    question={question}
                />
            ))}
        </div>
    );
}

export default QuestionsList;