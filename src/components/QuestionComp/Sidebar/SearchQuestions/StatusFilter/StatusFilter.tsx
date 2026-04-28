import styles from "./StatusFilter.module.css";

function StatusFilter() {
    return (
        <div className={styles.section}>

            <h3 className={styles.title}>
                Статус
            </h3>

            <div className={styles.column}>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Не начато
                </label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    В процессе
                </label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Изучено
                </label>

            </div>

        </div>
    );
}

export default StatusFilter;