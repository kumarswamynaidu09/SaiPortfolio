export type SectionId = 'home' | 'about' | 'skills' | 'hackathons' | 'contact';

export interface SkillItem {
  id: string;
  name: string;
  category: 'programming' | 'cs-data' | 'hardware';
  registerTag: string;
  subtag: string;
  description: string;
  focusType: string;
}

export interface HackathonItem {
  id: string;
  index: string;
  year: string;
  name: string;
  edition: string;
  category: 'hardware' | 'data';
  badge: string;
  badgeType?: 'default' | 'apex';
  description: string;
  architecture: string;
  runtime: string;
  tags: string[];
  nodeRef: string;
}
