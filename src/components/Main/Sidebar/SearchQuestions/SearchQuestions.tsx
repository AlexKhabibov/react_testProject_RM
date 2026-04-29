import styles from "./SearchQuestions.module.css";

type Props = {
    search: string;
    setSearch: (value: string) => void;
};

function SearchQuestions({ search, setSearch }: Props) {
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