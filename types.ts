import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  projectUrl: string;
  demoUrl?: string;
  category?: string;
  featured?: boolean;
  tags: string[];
  technologies?: string[];
  achievements?: string[];
  businessImpact?: string;
  learningOutcomes?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: number;
  years: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface Achievement {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}
