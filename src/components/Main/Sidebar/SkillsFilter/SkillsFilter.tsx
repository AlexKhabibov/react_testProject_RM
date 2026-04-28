import type { SkillSFilterProps } from "../../../../types/type";
import styles from "./SkillsFilter.module.css";



function SkillsFilter({
    skills,
    selectedSkills,
    setSelectedSkills
}: SkillSFilterProps) {
    const toggleSkill = (id: number) => {
        setSelectedSkills(prev =>
            prev.includes(id)
                ? prev.filter(s => s !== id)
                : [...prev, id]
        );
    };

    return (
        <div className={styles.section}>

            <h3 className={styles.title}>Навыки</h3>

            <div className={styles.tags}>
                {skills.map(skill => (
                    <button
                        key={skill.id}
                        onClick={() => toggleSkill(skill.id)}
                        className={
                            selectedSkills.includes(skill.id)
                                ? styles.active
                                : ""
                        }
                    >
                        {skill.title}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default SkillsFilter;