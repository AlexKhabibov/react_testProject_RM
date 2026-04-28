import styles from "./RatingFilter.module.css";

function RatingFilter() {
    return (
        <div className={styles.section}>

            <h3 className={styles.title}>
                Рейтинг
            </h3>

            <div className={styles.column}>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    5+
                </label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    7+
                </label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    9+
                </label>

            </div>

        </div>
    );
}

export default RatingFilter;