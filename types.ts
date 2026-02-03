
export interface Project {
  name: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  scale?: string;
  os?: string;
}

export interface Experience {
  id: string;
  title: string;
  company?: string; // プロジェクト名がメインの場合はオプショナル
  location?: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  projects?: Project[];
  roleInExp?: string;
  scaleInExp?: string;
  osInExp?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface ResumeData {
  name: string;
  nameKana: string;
  age: string;
  gender: string;
  address: string;
  station: string;
  industryExp: string;
  education: string;
  role: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  experiences: Experience[];
  skillCategories: SkillCategory[];
  strengths: string[];
  selfPr: {
    title: string;
    content: string;
  }[];
}
