import type { SearchQuestionsProps } from "../../../types/questionType";

function SearchQuestions({ search, setSearch }: SearchQuestionsProps) {

    return (
        <input
            type="text"
            placeholder="Поиск вопроса..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export default SearchQuestions;