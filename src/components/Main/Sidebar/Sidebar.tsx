import styles from "./Sidebar.module.css";
import SearchQuestions from "./SearchQuestions/SearchQuestions";
import SpecializationFilter from "./SpecializationFilter/SpecializationFilter";
import SkillsFilter from "./SkillsFilter/SkillsFilter";
import ComplexityFilter from "./ComplexityFilter/ComplexityFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import StatusFilter from "./StatusFilter/StatusFilter";
import type { SidebarProps } from "../../../types/type";


function Sidebar({
    search,
    setSearch,
    skills,
    selectedSkills,
    setSelectedSkills
}: SidebarProps) {
    return (
        <aside className={styles.sidebar}>

            <SearchQuestions
                search={search}
                setSearch={setSearch}
            />

            <SpecializationFilter />

            <SkillsFilter
                skills={skills}
                selectedSkills={selectedSkills}
                setSelectedSkills={setSelectedSkills}
            />

            <ComplexityFilter />
            <RatingFilter />
            <StatusFilter />

        </aside>
    );
}

export default Sidebar;