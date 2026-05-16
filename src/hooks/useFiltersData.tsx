import { useEffect, useState } from "react";
import { getSkills } from "../api/skillsApi";
import { getSpecializations } from "../api/specializationsApi";
import type { Skill, Specialization } from "../types/type";

export function useFiltersData() {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [specializations, setSpecializations] = useState<Specialization[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        Promise.all([getSkills(), getSpecializations()])
            .then(([skillsData, specData]) => {
                if (!mounted) return;

                setSkills(skillsData);
                setSpecializations(specData);
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, []);

    return { skills, specializations, loading };
}