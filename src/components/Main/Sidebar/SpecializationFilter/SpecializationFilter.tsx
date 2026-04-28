import styles from "./SpecializationFilter.module.css";

function SpecializationFilter() {
    return (
        <div className={styles.section}>

            <h3 className={styles.title}>
                Специализация
            </h3>

            <div className={styles.tags}>
                <button>Frontend</button>
                <button>Backend</button>
                <button>Fullstack</button>
                <button>DevOps</button>
            </div>

        </div>
    );
}

export default SpecializationFilter;