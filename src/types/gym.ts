export interface GymService {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  iconName: string;
  imageUrl: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceDisplay: string;
  currency: string;
  billingPeriod: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface TrainerProfile {
  id: string;
  title: string;
  role: string;
  specialty: string;
  experience: string;
  focusAreas: string[];
  imageUrl: string;
  isPlaceholder?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'freeweights' | 'racks' | 'machines' | 'cardio';
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  isPlaceholderNote?: string;
}

export interface GymBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
