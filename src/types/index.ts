export type Language = 'tr' | 'en';

export type Sector = 'maden' | 'mimarlik' | 'insaat';

export interface Project {
  id: string;
  title: Record<Language, string>;
  sector: Sector;
  category: Record<Language, string>;
  location: Record<Language, string>;
  year: string;
  client?: Record<Language, string>;
  areaOrCapacity: Record<Language, string>;
  status: 'completed' | 'ongoing';
  image: string;
  gallery: string[];
  description: Record<Language, string>;
  features: Record<Language, string>[];
  technicalSpecs: {
    label: Record<Language, string>;
    value: string;
  }[];
}

export interface NewsItem {
  id: string;
  title: Record<Language, string>;
  date: string;
  category: Record<Language, string>;
  sector: Sector | 'kurumsal';
  summary: Record<Language, string>;
  image: string;
  readTime: string;
  content: Record<Language, string>;
}

export interface StatItem {
  id: string;
  value: string;
  suffix?: string;
  label: Record<Language, string>;
  sublabel: Record<Language, string>;
  sector?: Sector;
}

export interface SectorDetail {
  id: Sector;
  title: Record<Language, string>;
  tagline: Record<Language, string>;
  shortDesc: Record<Language, string>;
  fullDesc: Record<Language, string>;
  heroImage: string;
  accentColor: string;
  capabilities: {
    title: Record<Language, string>;
    desc: Record<Language, string>;
    icon: string;
  }[];
  metrics: {
    value: string;
    label: Record<Language, string>;
  }[];
}
