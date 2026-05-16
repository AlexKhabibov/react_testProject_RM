
import QuestionDetailsBackButton from "../../components/QuestionDetailsBackButton/QuestionDetailsBackButton";
import QuestionDetailsCard from "../../components/QuestionDetailsCard/QuestionDetailsCard";
import QuestionDetailsLongAnswer from "../../components/QuestionDetailsLongAnswer/QuestionDetailsLongAnswer";
import QuestionDetailsShortAnswer from "../../components/QuestionDetailsShortAnswer/QuestionDetailsShortAnswer";
import QuestionNavigation from "../../components/QuestionNavigation/QuestionNavigation";

import styles from './QuestionDetailsPage.module.css';

function QuestionDetailsPage() {
    return (
        <div className={styles.container}>
            <QuestionDetailsBackButton />
            <QuestionDetailsCard />
            <QuestionNavigation />
            <QuestionDetailsShortAnswer />
            <QuestionDetailsLongAnswer />
        </div>
    );
}

export default QuestionDetailsPage;