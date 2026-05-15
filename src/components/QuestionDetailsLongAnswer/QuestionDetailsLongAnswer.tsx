import { useState } from "react";
import DOMPurify from "dompurify";
import styles from './QuestionDetailsLongAnswer.module.css';
import type { Question } from "../../types/type";
import { useLoaderData } from "react-router-dom";

function QuestionDetailsLongAnswer() {
    const question = useLoaderData() as Question;
    const [isExpanded, setIsExpanded] = useState(false);

    // Безопасное получение longAnswer с fallback‑значением
    const longAnswer = question.longAnswer ?? "";
    const hasContent = !!longAnswer.trim();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Развёрнутый ответ
            </h2>

            <div
                className={`${styles.content} ${isExpanded ? styles.expanded : styles.collapsed}`}
            >
                {hasContent ? (
                    <div
                        className={styles.text}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(longAnswer)
                        }}
                    />
                ) : (
                    <p className={styles.noContent}>
                        Развёрнутый ответ отсутствует
                    </p>
                )}
            </div>

            {hasContent && (
                <button
                    className={styles.toggle}
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                >
                    <span>{isExpanded ? "Свернуть" : "Развернуть"}</span>
                    <span
                        className={`${styles.toggleIcon} ${isExpanded ? styles.rotated : ''}`}
                    >
                        ↓
                    </span>
                </button>
            )}
        </div>
    );
}

export default QuestionDetailsLongAnswer;
