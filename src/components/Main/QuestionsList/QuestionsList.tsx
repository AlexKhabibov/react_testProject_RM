import type { Question } from "../../../types/type";
import QuestionCard from "../../QuestionCard/QuestionCard";
import styles from "./QuestionsList.module.css";

type Props = {
    questions: Question[];
};

function QuestionsList({ questions }: Props) {
    return (
        <div className={styles.list}>
            {questions.map(q => (
                <QuestionCard
                    key={q.id}
                    question={q}
                />
            ))}
        </div>
    );
}

export default QuestionsList;