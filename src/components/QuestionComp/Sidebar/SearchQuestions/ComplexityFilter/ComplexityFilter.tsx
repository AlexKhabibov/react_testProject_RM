import styles from "./ComplexityFilter.module.css";

function ComplexityFilter() {
    return (
        <div className={styles.section}>

            <h3 className={styles.title}>
                Уровень сложности
            </h3>

            <div className={styles.column}>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Junior
                </label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Middle
                </label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Senior
                </label>

            </div>

        </div>
    );
}

export default ComplexityFilter;