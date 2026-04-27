import type { SearchQuestionsProps } from "../../../types/questionType";
import SearchQuestions from "./SearchQuestions/SearchQuestions";
import styles from './Sidebar.module.css'

function Sidebar({ search, setSearch }: SearchQuestionsProps) {
    return (
        <aside className={styles.sidebar}>
            <SearchQuestions search={search} setSearch={setSearch} />
        </aside>
    );
}

export default Sidebar;