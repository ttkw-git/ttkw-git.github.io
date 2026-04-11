import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  metrics: string;
  technicalDetails?: string;
  limitations?: string;
  businessValue?: string;
  comparisonUrl?: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
  featured?: boolean;
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
