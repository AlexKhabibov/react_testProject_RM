// API
export type QuestionSkill = {
    id: number;
    title: string;
};

export type QuestionAuthor = {
    username: string;
};

export type Question = {
    id: number;
    title: string;
    description?: string;
    imageUrl?: string;
    category?: string;
    difficulty?: string;
    complexity?: string;
    tags?: string[];
    rate?: number;
    longAnswer?: string;
    keywords?: string[];
    questionSkills?: QuestionSkill[];
    createdBy?: QuestionAuthor;
};

export type QuestionWithNavigation = Question & {
    previousQuestionId: number | null;
    nextQuestionId: number | null;
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

export type NavigationQuestion = {
    id: number;
    title: string;
}

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