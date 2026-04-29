import type { Dispatch, SetStateAction } from "react";

// API
export type Question = {
    id: number;
    title: string;
    rate: number;
    complexity: number;
    longAnswer: string;
    keywords: string[];
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


// Props
export type QuestionCardProps = {
    question: Question
}

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
    setSelectedSkills: React.Dispatch<React.SetStateAction<number[]>>;
    specializations: Specialization[];
    selectedSpecializations: number[];
    setSelectedSpecializations: React.Dispatch<React.SetStateAction<number[]>>;
};

export type SpecializationFilterProps = {
    specializations: Specialization[];
    selectedSpecializations: number[];
    setSelectedSpecializations: React.Dispatch<
        React.SetStateAction<number[]>
    >;
};

export type SkillSFilterProps = {
    skills: Skill[];
    selectedSkills: number[];
    setSelectedSkills: Dispatch<SetStateAction<number[]>>;
};

export type PaginationProps = {
    page: number;
    setPage: (p: number) => void;
    total: number;
    limit: number;
};

// Для связи по id (на будущее)
export type QuestionWithRelations = Question & {
    skillIds: number[];
    specializationIds: number[];
};