import type { Dispatch, SetStateAction } from "react";

export type Question = {
    id: number;
    title: string;
    rate: number;
    complexity: number;
    keywords: string[];
};

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
    setSearch: React.Dispatch<React.SetStateAction<string>>;

    skills: Skill[];
    selectedSkills: number[];
    setSelectedSkills: React.Dispatch<
        React.SetStateAction<number[]>
    >;

    specializations: Specialization[];
    selectedSpecializations: number[];
    setSelectedSpecializations: React.Dispatch<
        React.SetStateAction<number[]>
    >;
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

export type SpecializationFilterProps = {
    specializations: Specialization[];
    selectedSpecializations: number[];
    setSelectedSpecializations: React.Dispatch<
        React.SetStateAction<number[]>
    >;
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

export type GetSkillsResponse = {
    data: Skill[];
};

export type SkillSFilterProps = {
    skills: Skill[];
    selectedSkills: number[];
    setSelectedSkills: Dispatch<SetStateAction<number[]>>;
};