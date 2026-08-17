import { GymService, MembershipPlan, TrainerProfile, GalleryItem, TestimonialItem, GymBenefit } from '../types/gym';

export const BUSINESS_INFO = {
  name: "Success Fitness Center",
  tagline: "Train Hard. Live Strong.",
  shortDescription: "Premier strength, resistance, and conditioning gym located in the heart of Bole, Addis Ababa, Ethiopia.",
  location: "Bole, Addis Ababa, Ethiopia",
  district: "Bole Sub-City",
  city: "Addis Ababa",
  country: "Ethiopia",
  phone: "+251 967 28 12 46",
  phoneRaw: "+251967281246",
  currency: "ETB (Ethiopian Birr)",
  hoursNotice: "Contact gym management for daily morning, afternoon, and evening session schedules.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bole%2C+Addis+Ababa%2C+Ethiopia",
  heroImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1920&q=80",
  logoUrl: "./logo.png",
};

export const CORE_PILLARS = [
  { title: "STRENGTH", subtitle: "Heavy compound resistance", desc: "Build real physical power through disciplined iron training." },
  { title: "DISCIPLINE", subtitle: "Consistency over convenience", desc: "Daily dedication to transformation and athletic grit." },
  { title: "FITNESS", subtitle: "Complete functional conditioning", desc: "Balanced stamina, cardiovascular capacity, and muscle endurance." },
  { title: "CONFIDENCE", subtitle: "Unstoppable self-mastery", desc: "Confidence built through relentless effort under the bar." },
  { title: "PROFESSIONALISM", subtitle: "High-standard environment", desc: "Clean equipment, focused lifters, and supportive coaching." }
];

export const GYM_SERVICES: GymService[] = [
  {
    id: "strength-training",
    title: "Strength & Powerlifting",
    category: "Heavy Iron",
    description: "Dedicated lifting platforms, Olympic barbells, calibrated bumper plates, and heavy-duty power racks for squats, deadlifts, and bench presses.",
    highlights: ["Olympic Barbells & Bumper Plates", "Heavy Duty Squat Cages", "Reinforced Deadlift Platforms", "Chalk & Belt Friendly"],
    iconName: "Dumbbell",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "free-weights",
    title: "Free Weights & Dumbbell Zone",
    category: "Hypertrophy",
    description: "Comprehensive dumbbell sets progressing from light warm-ups to heavy iron weights, complemented by multiple flat, incline, and decline adjustable benches.",
    highlights: ["Complete Dumbbell Sets", "Adjustable Heavy Benches", "Preacher Curl & Arm Blaster Stations", "Multiple Cable Crossover Columns"],
    iconName: "Flame",
    imageUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "resistance-machines",
    title: "Resistance & Machine Training",
    category: "Muscle Isolation",
    description: "High-grade selectorized and plate-loaded resistance machines targeting chest, back, shoulders, hamstrings, quadriceps, and calves safely and effectively.",
    highlights: ["Plate-Loaded Leg Press & Hack Squat", "Lat Pulldown & Seated Cable Rows", "Chest Press & Pec Dec Flyes", "Isolated Hamstring & Quad Extensions"],
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cardio-endurance",
    title: "Cardio & Conditioning Floor",
    category: "Endurance",
    description: "Modern cardiovascular equipment designed to enhance heart health, accelerate metabolic burn, and build stamina for athletes of all levels.",
    highlights: ["Commercial High-Incline Treadmills", "Stationary Resistance Cycles", "Stair Climbers & Ellipticals", "HIIT Interval Cardio Programs"],
    iconName: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "functional-training",
    title: "Functional & Core Training",
    category: "Athleticism",
    description: "Full range of functional fitness tools including cast-iron kettlebells, pull-up bars, resistance bands, plyometric stations, and core training gear.",
    highlights: ["Cast-Iron Kettlebells Array", "Multi-Grip Pull-Up Rigs", "Core & Abdominal Conditioning Stations", "Agility & Resistance Gear"],
    iconName: "Shield",
    imageUrl: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "personal-coaching",
    title: "Personal Training & Guidance",
    category: "Coaching",
    description: "One-on-one structured training plans focusing on proper biomechanics, lifting technique, progressive overload, and disciplined accountability.",
    highlights: ["Personalized Training Programs", "Form & Biomechanics Analysis", "Progressive Overload Tracking", "Direct Trainer Mentorship"],
    iconName: "Trophy",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80"
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly Membership",
    badge: "Flexible",
    isPopular: false,
    priceDisplay: "Contact for Price",
    currency: "Ethiopian Birr (ETB)",
    billingPeriod: "Per Month",
    description: "Ideal for lifters who desire full access to the gym with flexible month-by-month commitment.",
    features: [
      "Full access to strength & free weight floor",
      "Full access to cardio & conditioning equipment",
      "Access to all plate-loaded & pin-loaded machines",
      "Locker room & storage access",
      "Standard equipment orientation"
    ],
    ctaText: "Contact for Membership"
  },
  {
    id: "three-month",
    name: "3-Month Membership",
    badge: "Most Popular",
    isPopular: true,
    priceDisplay: "Contact for Price",
    currency: "Ethiopian Birr (ETB)",
    billingPeriod: "Quarterly (90 Days)",
    description: "Our recommended plan for dedicated individuals committing to noticeable strength and physique transformation.",
    features: [
      "Unlimited 90-day gym facility access",
      "Full priority access to all training zones",
      "Complete free weights, racks, & machine access",
      "Locker room & hydration station access",
      "Periodic progress & form check-ins",
      "Best long-term consistency value"
    ],
    ctaText: "Contact for Membership"
  },
  {
    id: "personal-training",
    name: "Personal Training",
    badge: "Coached",
    isPopular: false,
    priceDisplay: "Contact for Price",
    currency: "Ethiopian Birr (ETB)",
    billingPeriod: "Custom Package",
    description: "Tailored private coaching designed to accelerate your strength gains and optimize lifting technique.",
    features: [
      "Dedicated 1-on-1 coaching sessions",
      "Personalized lifting & workout regime",
      "Biomechanical form correction & safety",
      "Targeted strength & physique progression",
      "Includes full gym floor access"
    ],
    ctaText: "Contact for Membership"
  },
  {
    id: "day-pass",
    name: "Single Day Pass",
    badge: "Drop-In",
    isPopular: false,
    priceDisplay: "Contact for Price",
    currency: "Ethiopian Birr (ETB)",
    billingPeriod: "Single Session",
    description: "Perfect for travelers visiting Bole or athletes looking for an intense guest lifting session.",
    features: [
      "Single-day full facility access",
      "Access to all iron & cardio equipment",
      "Locker room usage",
      "No long-term commitment required"
    ],
    ctaText: "Contact for Membership"
  }
];

export const TRAINERS: TrainerProfile[] = [
  {
    id: "trainer-1",
    title: "Strength & Power Coach",
    role: "Head Strength Trainer",
    specialty: "Heavy Compound Movements, Hypertrophy & Progressive Overload",
    experience: "Dedicated Strength Professional",
    focusAreas: ["Squat, Bench & Deadlift Form", "Muscle Hypertrophy", "Power Development"],
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    isPlaceholder: true
  },
  {
    id: "trainer-2",
    title: "Conditioning & Movement Specialist",
    role: "Fitness & Performance Coach",
    specialty: "High-Intensity Conditioning, Functional Movement & Endurance",
    experience: "Athletic Conditioning Specialist",
    focusAreas: ["Cardio Stamina", "Core Stability & Agility", "Fat Loss Conditioning"],
    imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
    isPlaceholder: true
  },
  {
    id: "trainer-3",
    title: "Biomechanical Form & Recovery Coach",
    role: "Technique Coach",
    specialty: "Safe Lifting Mechanics, Mobility & Muscle Symmetry",
    experience: "Fitness & Technique Specialist",
    focusAreas: ["Lifting Biomechanics", "Injury Prevention", "Personalized Coaching"],
    imageUrl: "https://images.unsplash.com/photo-1577221084712-45b0445b2b00?auto=format&fit=crop&w=600&q=80",
    isPlaceholder: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Olympic Barbell & Bumper Iron",
    category: "racks",
    description: "Heavy Olympic barbells loaded for deadlifts and compound lifting.",
    imageUrl: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-2",
    title: "Heavy Dumbbell Arsenal",
    category: "freeweights",
    description: "Solid steel and rubber-coated dumbbell pairs for muscle building.",
    imageUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-3",
    title: "Main Training Facility Floor",
    category: "machines",
    description: "Spacious gym layout with heavy resistance machines and free weights.",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-4",
    title: "Calibrated Weight Plates",
    category: "freeweights",
    description: "High-density weight plates designed for precision loading.",
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-5",
    title: "Cardio & Stamina Station",
    category: "cardio",
    description: "High-performance cardiovascular machines for metabolic conditioning.",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-6",
    title: "Power Cage & Squat Station",
    category: "racks",
    description: "Rigid steel power racks with safety spotter arms for heavy squats.",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-7",
    title: "Functional Kettlebells & Iron Gear",
    category: "freeweights",
    description: "Cast-iron kettlebells on shock-absorbing rubber gym flooring.",
    imageUrl: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-8",
    title: "Selectorized Machine Row",
    category: "machines",
    description: "Clean, smoothly operating pin-selected machines for targeted muscle isolation.",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
  }
];

export const WHY_US_BENEFITS: GymBenefit[] = [
  {
    id: "benefit-1",
    title: "Dedicated Training Environment",
    description: "A focused atmosphere where lifters come to train with serious discipline, zero distractions, and maximum effort.",
    iconName: "Target"
  },
  {
    id: "benefit-2",
    title: "Complete Heavy Iron & Machinery",
    description: "Comprehensive equipment selection including Olympic barbells, heavy dumbbells, power cages, and selectorized machines.",
    iconName: "Dumbbell"
  },
  {
    id: "benefit-3",
    title: "Prime Bole Location",
    description: "Conveniently situated in Bole, Addis Ababa, providing easy access for morning, midday, and evening training sessions.",
    iconName: "MapPin"
  },
  {
    id: "benefit-4",
    title: "Professional Standards & Upkeep",
    description: "Well-maintained weights, tidy platforms, and daily equipment hygiene for a premium training experience.",
    iconName: "ShieldCheck"
  },
  {
    id: "benefit-5",
    title: "Flexible ETB Memberships",
    description: "Transparent pricing structured in Ethiopian Birr (ETB) with flexible monthly, 3-month, and personal coaching options.",
    iconName: "CreditCard"
  },
  {
    id: "benefit-6",
    title: "Motivating Fitness Community",
    description: "Train alongside disciplined members who share your passion for physical strength, health, and personal growth.",
    iconName: "Users"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Add verified member testimonial here. [Example: Outstanding equipment and serious training atmosphere in Bole. The free weights and racks make every workout effective.]",
    author: "Verified Gym Member",
    role: "Strength Training Member",
    rating: 5,
    isPlaceholderNote: "Editable verified member feedback"
  },
  {
    id: "test-2",
    quote: "Add verified member testimonial here. [Example: Clean facility, excellent dumbbell range, and friendly community. Consistent training here has transformed my fitness.]",
    author: "Dedicated Athlete",
    role: "3-Month Member",
    rating: 5,
    isPlaceholderNote: "Editable verified member feedback"
  },
  {
    id: "test-3",
    quote: "Add verified member testimonial here. [Example: Convenient Bole location with top-notch coaching and machines. Great environment for anyone serious about getting strong.]",
    author: "Fitness Enthusiast",
    role: "Personal Coaching Member",
    rating: 5,
    isPlaceholderNote: "Editable verified member feedback"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Where is Success Fitness Center located?",
    answer: "We are located in Bole, Addis Ababa, Ethiopia. Contact us at +251 967 28 12 46 for exact directions and nearby landmark guidance."
  },
  {
    question: "How can I inquire about membership prices and payment in ETB?",
    answer: "Membership rates are in Ethiopian Birr (ETB). Please call us directly at +251 967 28 12 46 or visit our reception desk to receive current pricing and promotional packages."
  },
  {
    question: "Do you offer personal training and workout guidance?",
    answer: "Yes, we offer dedicated one-on-one personal coaching packages tailored to your strength, physique, and conditioning objectives."
  },
  {
    question: "Are daily passes or single session workouts available?",
    answer: "Yes, we offer single session passes for visitors and drop-ins. Please contact the front desk for immediate day pass details."
  }
];
