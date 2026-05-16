import { useLoaderData } from "react-router-dom";

import type {
    QuestionWithNavigation
} from "../../types/type";

import styles from './QuestionDetailsSidebar.module.css';

function QuestionDetailsSidebar() {

    const question = useLoaderData() as QuestionWithNavigation;

    return (
        <div className={styles.container}>

            <div className={styles.block}>

                <div className={styles.label}>
                    Уровень:
                </div>

                <div className={styles.metaRow}>

                    <div className={styles.badge}>
                        Сложность:
                        <span>
                            {question.complexity ||
                                question.difficulty ||
                                "—"}
                        </span>
                    </div>

                    <div className={styles.badge}>
                        Рейтинг:
                        <span>
                            {question.rate ?? "—"}
                        </span>
                    </div>

                </div>

            </div>

            {!!question.questionSkills?.length && (

                <div className={styles.block}>

                    <div className={styles.label}>
                        Навыки:
                    </div>

                    <div className={styles.tags}>

                        {question.questionSkills.map(skill => (

                            <div
                                key={skill.id}
                                className={styles.tag}
                            >
                                {skill.title}
                            </div>

                        ))}

                    </div>

                </div>
            )}

            {!!question.keywords?.length && (

                <div className={styles.block}>

                    <div className={styles.label}>
                        Ключевые слова:
                    </div>

                    <div className={styles.keywords}>

                        {question.keywords.map(keyword => (

                            <span key={keyword}>
                                #{keyword}
                            </span>

                        ))}

                    </div>

                    <div className={styles.author}>

                        <div className={styles.label}>
                            Автор:
                        </div>

                        <span className={styles.authorName}>
                            {question.createdBy?.username ?? "Неизвестный автор"}
                        </span>

                    </div>

                </div>
            )}

        </div>
    );
}

export default QuestionDetailsSidebar;