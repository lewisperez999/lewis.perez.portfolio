// TypeScript interfaces for portfolio data
export interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
  order: number;
}

export interface PersonalInfo {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export type SkillsByCategory = Record<string, Skill[]>;
