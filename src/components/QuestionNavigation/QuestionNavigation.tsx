import { useNavigate } from "react-router-dom";
import styles from './QuestionNavigation.module.css';
import type { NavigationQuestion } from "../../types/type";

function QuestionNavigation({ previousQuestion, nextQuestion }: {
    previousQuestion?: NavigationQuestion;
    nextQuestion?: NavigationQuestion;
}) {
    const navigate = useNavigate();

    const handleNavigate = (questionId: number) => {
        navigate(`/questions/${questionId}`);
    };

    return (
        <div className={styles.navigation}>
            {previousQuestion && (
                <button
                    className={styles.prevButton}
                    onClick={() => handleNavigate(previousQuestion.id)}
                >
                    <span>← Предыдущий</span>
                </button>
            )}
            {nextQuestion && (
                <button
                    className={styles.nextButton}
                    onClick={() => handleNavigate(nextQuestion.id)}
                >
                    <span>Следующий →</span>
                </button>
            )}
        </div>
    );
}

export default QuestionNavigation;