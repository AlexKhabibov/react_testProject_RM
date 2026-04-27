import { useState } from "react";
import QuestionsList from "./QuestionsList/QuestionsList";
import Sidebar from "./Sidebar/Sidebar";
import styles from './QuestionsParentComp.module.css'

function QuestionsParentComp() {
    const [search, setSearch] = useState("");

    return (
        <div className={styles.layout}>
            <QuestionsList search={search} />
            <Sidebar search={search} setSearch={setSearch} />
        </div>
    );
}

export default QuestionsParentComp;