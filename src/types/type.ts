// API
export type Question = {
    id: number;
    title: string;
    description?: string;
    imageUrl?: string;
    category?: string;
    difficulty?: string; // оставьте, если используется
    complexity?: string;  // новое поле
    tags?: string[];
    rate?: number;         // новое поле (например, рейтинг)
    longAnswer?: string;   // новое поле (развёрнутый ответ)
    previousId?: number; // ID предыдущего вопроса
    nextId?: number;     // ID следующего вопроса
};

export type Skill = {
    id: number;
    title: string;
    description: string;
    imageSrc: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy: null | unknown;
    specializations: Specialization[];
};

export type Specialization = {
    id: number;
    title: string;
    slug: string;
    description: string;
    imageSrc: string | null;
    createdAt: string;
    updatedAt: string;
};

export type GetQuestionsParams = {
    page: number;
    limit: number;
    title?: string;
    skills?: number[];
    specializationId?: number;
    skillFilterMode?: "ALL" | "ANY";
};

export type GetQuestionsResponse = {
    data: Question[];
    page: number;
    limit: number;
    total: number;
};


// Props
export type QuestionCardProps = {
    question: Question
}

export type QuestionCardListProps = {
    questions: Question[];
};

export type SearchQuestionsProps = {
    search: string;
    setSearch: (value: string) => void;
};

export type SkillsProps = {
    skills: string[];
    selectedSkills: string[];
    setSelectedSkills: React.Dispatch<React.SetStateAction<string[]>>;
};

export type SidebarProps = {
    search: string;
    setSearch: (value: string) => void;

    skills: Skill[];
    selectedSkills: number[];
    setSelectedSkills: (id: number) => void;

    specializations: Specialization[];
    selectedSpecializations: number[];
    setSelectedSpecializations: (id: number) => void;
};

export type SpecializationFilterProps = {
    specializations: Specialization[];
    selectedSpecializations: number[];
    setSelectedSpecializations: (id: number) => void;
};

export type SkillSFilterProps = {
    skills: Skill[];
    selectedSkills: number[];
    setSelectedSkills: (id: number) => void;
};

export type PaginationProps = {
    page: number;
    setPage: (p: number) => void;
    total: number;
    limit: number;
};

export type NavigationQuestion = {
    id: number;
    title: string;
}