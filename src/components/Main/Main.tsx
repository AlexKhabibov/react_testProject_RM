import { useEffect, useMemo, useState } from "react";
import QuestionsList from "./QuestionsList/QuestionsList";
import Sidebar from "./Sidebar/Sidebar";

import { getQuestions } from "../../api/questionsApi";
import { getSkills } from "../../api/skills";
import { getSpecializations } from "../../api/specializations";

import styles from "./Main.module.css";

import type {
    Question,
    Skill,
    Specialization
} from "../../types/type";

function Main() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [specializations, setSpecializations] = useState<Specialization[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
    const [selectedSpecializations, setSelectedSpecializations] = useState<number[]>([]);

    useEffect(() => {
        Promise.all([
            getQuestions(),
            getSkills(),
            getSpecializations()
        ])
            .then(([questionsData, skillsData, specData]) => {
                setQuestions(questionsData);
                setSkills(skillsData);
                setSpecializations(specData);
            })
            .finally(() => setIsLoading(false));
    }, []);

    const filteredQuestions = useMemo(() => {
        return questions.filter(q => {

            const matchesSearch =
                q.title.toLowerCase().includes(search.toLowerCase());

            const matchesSkills =
                selectedSkills.length === 0 ||
                selectedSkills.some(id =>
                    q.skills?.includes(id)
                );

            const matchesSpecializations =
                selectedSpecializations.length === 0 ||
                q.specializations?.some(id => selectedSpecializations.includes(id));

            return matchesSearch && matchesSkills && matchesSpecializations;
        });
    }, [
        questions,
        search,
        selectedSkills,
        selectedSpecializations
    ]);

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
            </div>
        );
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
                specializations={specializations}
                selectedSpecializations={selectedSpecializations}
                setSelectedSpecializations={setSelectedSpecializations}
            />

        </div>
    );
}

export default Main;