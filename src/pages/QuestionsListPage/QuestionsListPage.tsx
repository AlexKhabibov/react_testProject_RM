import { useState } from "react";
import styles from "./QuestionsListPage.module.css";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import Sidebar from "../../components/QuestionsListSidebar/QuestionsListSidebar";
import Pagination from "../../components/Pagination/Pagination";
import { useDebounce } from "../../hooks/useDebounce";
import { useQuestions } from "../../hooks/useQuestions";
import { useQuestionsFilters } from "../../hooks/useQuestionsFilters";
import { useFiltersData } from "../../hooks/useFiltersData";

function QuestionsListPage() {
    const { skills, specializations } = useFiltersData();

    const filters = useQuestionsFilters();
    const debouncedSearch = useDebounce(filters.search.trim(), 500);

    const [page, setPage] = useState(1);
    const limit = 10;

    const { questions, total, loading } = useQuestions({
        page,
        limit,
        search: debouncedSearch,
        skills: filters.selectedSkills,
        specializations: filters.selectedSpecializations,
    });

    const handleSearch = (value: string) => {
        filters.setSearch(value);
        setPage(1);
    };

    const handleSkillToggle = (id: number) => {
        filters.toggleSkill(id);
        setPage(1);
    };

    const handleSpecToggle = (id: number) => {
        filters.toggleSpecialization(id);
        setPage(1);
    };

    if (loading) {
        return (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <QuestionsList questions={questions} />

            <Sidebar
                search={filters.search}
                setSearch={handleSearch}
                skills={skills}
                selectedSkills={filters.selectedSkills}
                setSelectedSkills={handleSkillToggle}
                specializations={specializations}
                selectedSpecializations={filters.selectedSpecializations}
                setSelectedSpecializations={handleSpecToggle}
            />

            <Pagination
                page={page}
                setPage={setPage}
                total={total}
                limit={limit}
            />
        </div>
    );
}

export default QuestionsListPage;