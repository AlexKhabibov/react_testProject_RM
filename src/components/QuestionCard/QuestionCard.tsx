import { useState } from "react";
import DOMPurify from "dompurify";
import styles from "./QuestionCard.module.css";
import type { QuestionCardProps } from "../../types/type";

function QuestionCard({ question }: QuestionCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.card}>

            <button
                className={styles.header}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className={styles.title}>
                    {question.title}
                </h3>

                <span>
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>

            {isOpen && (
                <div className={styles.answer}>

                    <div className={styles.meta}>
                        <span>⭐ {question.rate}</span>
                        <span>⚡ {question.complexity}/10</span>
                    </div>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(question.longAnswer)
                        }}
                    />

                </div>
            )}

        </div>
    );
}

export default QuestionCard;