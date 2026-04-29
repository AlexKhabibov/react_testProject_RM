import { useEffect, useMemo, useState } from "react";

import QuestionsList from "./QuestionsList/QuestionsList";
import Sidebar from "./Sidebar/Sidebar";

import { getAllQuestions, getQuestions } from "../../api/questionsApi";
import { getSkills } from "../../api/skillsApi";
import { getSpecializations } from "../../api/specializationsApi";

import styles from "./Main.module.css";

import type { Question, Skill, Specialization } from "../../types/type";

function Main() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [allQuestions, setAllQuestions] = useState<Question[]>([]);

    const [skills, setSkills] = useState<Skill[]>([]);
    const [specializations, setSpecializations] = useState<Specialization[]>([]);

    const [search, setSearch] = useState("");

    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [total, setTotal] = useState(0);

    const [isLoading, setIsLoading] = useState(true);
    const [isAllLoading, setIsAllLoading] = useState(true);

    // ======================
    // справочники
    // ======================
    useEffect(() => {
        Promise.all([
            getSkills(),
            getSpecializations()
        ]).then(([skillsData, specData]) => {
            setSkills(skillsData);
            setSpecializations(specData);
        });
    }, []);

    // ======================
    // пагинация
    // ======================
    useEffect(() => {
        const load = async () => {
            setIsLoading(true);

            const res = await getQuestions(page, limit);

            setQuestions(res.data);
            setTotal(res.total);

            setIsLoading(false);
        };

        load();
    }, [page, limit]);

    // ======================
    // ВСЕ вопросы (для поиска)
    // ======================
    useEffect(() => {
        const loadAll = async () => {
            setIsAllLoading(true);

            const res = await getAllQuestions();
            setAllQuestions(res);

            setIsAllLoading(false);
        };

        loadAll();
    }, []);

    // ======================
    // ПОИСК + ПАГИНАЦИЯ
    // ======================
    const displayedQuestions = useMemo(() => {
        const query = search.trim().toLowerCase();

        // 🔍 поиск по всем вопросам
        if (query && !isAllLoading) {
            return allQuestions.filter(q => {
                const titleMatch = q.title.toLowerCase().includes(query);

                const keywordMatch =
                    q.keywords?.some(k =>
                        k.toLowerCase().includes(query)
                    ) ?? false;

                return titleMatch || keywordMatch;
            });
        }

        // 📦 обычная пагинация
        return questions;
    }, [search, allQuestions, questions, isAllLoading]);

    // ======================
    // search handler
    // ======================
    const handleSearchChange = (value: string) => {
        setSearch(value);
        setPage(1);
    };

    const totalPages = Math.ceil(total / limit);

    // ======================
    // LOADER
    // ======================
    if (isLoading) {
        return (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div className={styles.layout}>

            {/* LIST */}
            <QuestionsList questions={displayedQuestions} />

            {/* SIDEBAR */}
            <Sidebar
                search={search}
                setSearch={handleSearchChange}

                skills={skills}
                selectedSkills={[]}
                setSelectedSkills={() => {}}

                specializations={specializations}
                selectedSpecializations={[]}
                setSelectedSpecializations={() => {}}
            />

            {/* PAGINATION (только если нет поиска) */}
            {!search && (
                <div className={styles.pagination}>

                    <button
                        onClick={() => setPage(p => Math.max(p - 1, 1))}
                        disabled={page === 1}
                    >
                        Назад
                    </button>

                    <span>
                        {page} / {totalPages || 1}
                    </span>

                    <button
                        onClick={() =>
                            setPage(p => Math.min(p + 1, totalPages))
                        }
                        disabled={page === totalPages}
                    >
                        Вперёд
                    </button>

                </div>
            )}

        </div>
    );
}

export default Main;