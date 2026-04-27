import type { SearchQuestionsProps } from "../../types/questionType";
import SearchQuestions from "./SearchQuestions/SearchQuestions";

function Sidebar({ search, setSearch }: SearchQuestionsProps) {
    return (
        <>
            <SearchQuestions search={search} setSearch={setSearch} />
        </>
    );
}

export default Sidebar;