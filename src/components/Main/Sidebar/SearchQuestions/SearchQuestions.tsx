import styles from "./SearchQuestions.module.css";
import type { SearchQuestionsProps } from "../../../../types/type";

function SearchQuestions({ search, setSearch }: SearchQuestionsProps) {
    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Поиск вопроса..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export default SearchQuestions;