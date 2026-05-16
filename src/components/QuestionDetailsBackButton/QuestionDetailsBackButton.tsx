import { useNavigate } from "react-router-dom";

import styles from './QuestionDetailsBackButton.module.css'

function QuestionDetailsBackButton() {

    const navigate = useNavigate();

    return (
        <button
            className={styles.backButton}
            onClick={() => navigate('/')}
        >
            ← Назад
        </button>
    );
}

export default QuestionDetailsBackButton;