import styles from "./Pagination.module.css";

type Props = {
    page: number;
    setPage: (p: number) => void;
    total: number;
    limit: number;
};

function Pagination({ page, setPage, total, limit }: Props) {
    const totalPages = Math.ceil(total / limit);

    const getPageNumbers = () => {
        const delta = 2;
        const range: (number | "...")[] = [];

        const left = Math.max(2, page - delta);
        const right = Math.min(totalPages - 1, page + delta);

        range.push(1);

        if (left > 2) range.push("...");

        for (let i = left; i <= right; i++) {
            range.push(i);
        }

        if (right < totalPages - 1) range.push("...");

        if (totalPages > 1) range.push(totalPages);

        return range;
    };

    return (
        <div className={styles.pagination}>

            {/* ← */}
            <button
                className={`${styles.pageButton} ${styles.arrow}`}
                onClick={() => setPage(Math.max(page - 1, 1))}
                disabled={page === 1}
            >
                ←
            </button>

            {/* pages */}
            {getPageNumbers().map((p, i) =>
                p === "..." ? (
                    <div key={i} className={styles.dots}>
                        ...
                    </div>
                ) : (
                    <button
                        key={i}
                        onClick={() => setPage(p)}
                        className={`${styles.pageButton} ${
                            page === p ? styles.active : ""
                        }`}
                    >
                        {p}
                    </button>
                )
            )}

            {/* → */}
            <button
                className={`${styles.pageButton} ${styles.arrow}`}
                onClick={() =>
                    setPage(Math.min(page + 1, totalPages))
                }
                disabled={page === totalPages}
            >
                →
            </button>

        </div>
    );
}

export default Pagination;