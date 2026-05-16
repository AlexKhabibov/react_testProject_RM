// import { useLoaderData, useNavigate } from "react-router-dom";

import { useLoaderData, useNavigate } from "react-router-dom";
import type {
    QuestionWithNavigation
} from "../../types/type";

import styles from './QuestionNavigation.module.css';

function QuestionNavigation() {

    const question = useLoaderData() as QuestionWithNavigation;

    const navigate = useNavigate();

    return (
        <div className={styles.navigationWrapper}>

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
    );
}

export default QuestionNavigation;