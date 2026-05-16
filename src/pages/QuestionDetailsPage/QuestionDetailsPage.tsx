import QuestionDetailsBackButton from "../../components/QuestionDetailsBackButton/QuestionDetailsBackButton";
import QuestionDetailsCard from "../../components/QuestionDetailsCard/QuestionDetailsCard";
import QuestionDetailsLongAnswer from "../../components/QuestionDetailsLongAnswer/QuestionDetailsLongAnswer";
import QuestionDetailsShortAnswer from "../../components/QuestionDetailsShortAnswer/QuestionDetailsShortAnswer";
import QuestionDetailsSidebar from "../../components/QuestionDetailsSidebar/QuestionDetailsSidebar";
import QuestionNavigation from "../../components/QuestionNavigation/QuestionNavigation";

import styles from './QuestionDetailsPage.module.css';

function QuestionDetailsPage() {

    return (
        <div className={styles.page}>

            <main className={styles.main}>

                <QuestionDetailsBackButton />

                <QuestionDetailsCard />

                <QuestionNavigation />

                <QuestionDetailsShortAnswer />

                <QuestionDetailsLongAnswer />

            </main>

            <aside className={styles.sidebar}>

                <QuestionDetailsSidebar />

            </aside>

        </div>
    );
}

export default QuestionDetailsPage;