export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  image: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}
