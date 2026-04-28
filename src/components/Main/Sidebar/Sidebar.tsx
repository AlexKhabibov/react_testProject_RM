import styles from "./Sidebar.module.css";
import type { SearchQuestionsProps } from "../../../types/questionType";
import SearchQuestions from "./SearchQuestions/SearchQuestions";
import SpecializationFilter from "./SpecializationFilter/SpecializationFilter";
import SkillsFilter from "./SkillsFilter/SkillsFilter";
import ComplexityFilter from "./ComplexityFilter/ComplexityFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import StatusFilter from "./StatusFilter/StatusFilter";

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