import { useState } from "react";

export function useQuestionsFilters() {
    const [search, setSearch] = useState("");
    const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
    const [selectedSpecializations, setSelectedSpecializations] = useState<number[]>([]);

    const toggleSkill = (id: number) => {
        setSelectedSkills(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    const toggleSpecialization = (id: number) => {
        setSelectedSpecializations(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    return {
        search,
        setSearch,
        selectedSkills,
        selectedSpecializations,
        setSearchRaw: setSearch,
        toggleSkill,
        toggleSpecialization,
    };
}