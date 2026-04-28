import styles from "./Sidebar.module.css";
import type { SearchQuestionsProps } from "../../../types/questionType";
import SearchQuestions from "./SearchQuestions/SearchQuestions";
import SpecializationFilter from "./SearchQuestions/SpecializationFilter/SpecializationFilter";
import SkillsFilter from "./SearchQuestions/SkillsFilter/SkillsFilter";
import ComplexityFilter from "./SearchQuestions/ComplexityFilter/ComplexityFilter";
import RatingFilter from "./SearchQuestions/RatingFilter/RatingFilter";
import StatusFilter from "./SearchQuestions/StatusFilter/StatusFilter";

function Sidebar({ search, setSearch }: SearchQuestionsProps) {
    return (
        <aside className={styles.sidebar}>

            <SearchQuestions
                search={search}
                setSearch={setSearch}
            />

            <SpecializationFilter />

            <SkillsFilter />

            <ComplexityFilter />

            <RatingFilter />

            <StatusFilter />

        </aside>
    );
}

export default Sidebar;