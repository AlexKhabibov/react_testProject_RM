import styles from "./SkillsFilter.module.css";

function SkillsFilter() {
    return (
        <div className={styles.section}>

            <h3 className={styles.title}>
                Навыки
            </h3>

            <div className={styles.tags}>
                <button>React</button>
                <button>TypeScript</button>
                <button>Node.js</button>
                <button>Docker</button>
                <button>PostgreSQL</button>
            </div>

        </div>
    );
}

export default SkillsFilter;