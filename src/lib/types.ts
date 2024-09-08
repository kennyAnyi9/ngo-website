export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  startDate: Date;
  endDate?: Date;
  isFeatured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface DonationCounterData {
  totalDonations: number;
  donorsCount: number;
  lastUpdated: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface NewsletterSubscription {
  email: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  ctaText: string;
  ctaLink: string;
}
