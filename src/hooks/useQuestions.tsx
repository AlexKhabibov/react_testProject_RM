// hooks/useQuestions.ts
import { useEffect, useState } from "react";
import { getQuestions } from "../api/questionsApi";
import type { Question } from "../types/type";

type Params = {
    page: number;
    limit: number;
    search: string;
    skills: number[];
    specializations: number[];
};

export function useQuestions(params: Params) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const load = async () => {
            setLoading(true);

            try {
                const res = await getQuestions({
                    page: params.page,
                    limit: params.limit,
                    title: params.search,
                    skills: params.skills,
                    specializationId: params.specializations[0],
                    skillFilterMode: "ANY",
                });

                setQuestions(res.data);
                setTotal(res.total);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        load();

        return () => controller.abort();
    }, [
        params.page,
        params.limit,
        params.search,
        params.skills,
        params.specializations
    ]);

    return { questions, total, loading };
}