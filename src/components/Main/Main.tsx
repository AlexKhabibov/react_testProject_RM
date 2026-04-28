import { useEffect, useMemo, useState } from "react";
import QuestionsList from "./QuestionsList/QuestionsList";
import Sidebar from "./Sidebar/Sidebar";
import { getQuestions } from "../../api/questionsApi";
import { getSkills } from "../../api/skills";
import styles from "./Main.module.css";
import type { Question, Skill } from "../../types/type";

function Main() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

    useEffect(() => {
        Promise.all([getQuestions(), getSkills()])
            .then(([questionsData, skillsData]) => {
                setQuestions(questionsData);
                setSkills(skillsData);
            })
            .finally(() => setIsLoading(false));
    }, []);

    const filteredQuestions = useMemo(() => {
        return questions.filter(q => {
            const matchesSearch =
                q.title.toLowerCase().includes(search.toLowerCase());

            const matchesSkills =
                selectedSkills.length === 0 ||
                q.skills.some(skillId =>
                    selectedSkills.includes(skillId)
                );

            return matchesSearch && matchesSkills;
        });
    }, [questions, search, selectedSkills]);

    if (isLoading) {
        return <div className={styles.loader}>
            <div className={styles.spinner}></div>
        </div>
    }

    return (
        <div className={styles.layout}>

            <QuestionsList questions={filteredQuestions} />

            <Sidebar
                search={search}
                setSearch={setSearch}
                skills={skills}
                selectedSkills={selectedSkills}
                setSelectedSkills={setSelectedSkills}
            />

        </div>
    );
}

export default Main;