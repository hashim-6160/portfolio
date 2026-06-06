export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  features?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  gradient: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Achievement {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  roles: string[];
  contact: ContactInfo;
}
