import { 
  Brain, Database, Network, Lock, BarChart, Zap,
  Factory, Cloud, LineChart, Bell, Cpu, Building2,
  WrenchIcon, Signal, Truck, ClipboardCheck, Bot,
  Send, Mail, User, MessageSquare, Linkedin, Twitter,
  Facebook, MapPin, Quote, Star, Target, Globe
} from 'lucide-react';

const iconMap = {
  Brain,
  Database,
  Network,
  Lock,
  BarChart,
  Zap,
  Factory,
  Cloud,
  LineChart,
  Bell,
  Cpu,
  Building2,
  WrenchIcon,
  Signal,
  Truck,
  ClipboardCheck,
  Bot,
  Send,
  Mail,
  User,
  MessageSquare,
  Linkedin,
  Twitter,
  Facebook,
  MapPin,
  Quote,
  Star,
  Target,
  Globe
};

export const getIconByName = (name: keyof typeof iconMap) => iconMap[name];

// Template Types
export interface HeroContent {
  company: {
    name: string;
    tagline: string;
  };
  mainHeading: {
    highlight: string;
    subtext: string;
  };
  description: string;
  buttons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  trustIndicators: Array<{
    text: string;
    color: string;
  }>;
}

export interface FeaturesContent {
  header: {
    title: string;
    description: string;
  };
  features: Array<{
    iconName: keyof typeof iconMap;
    title: string;
    description: string;
  }>;
}

export interface IndustryApplicationsContent {
  header: {
    title: string;
    description: string;
  };
  applications: Array<{
    title: string;
    iconName: keyof typeof iconMap;
    items: string[];
  }>;
  useCases: {
    header: {
      title: string;
      description: string;
    };
    items: Array<{
      title: string;
      iconName: keyof typeof iconMap;
      description: string;
    }>;
  };
}

interface ContactFormField {
  placeholder: string;
  iconName: string;
}

interface ContactContent {
  header: {
    title: string;
    description: string;
  };
  form: {
    fields: {
      name: ContactFormField;
      email: ContactFormField;
      message: ContactFormField;
    };
    submitButton: {
      text: string;
      loadingText: string;
      iconName: string;
    };
  };
  api: {
    formspreeEndpoint: string;
  };
  toast: {
    success: string;
    error: string;
  };
}

interface TimelineItem {
  year: string;
  description: string;
}

interface MissionCard {
  iconName: keyof typeof iconMap;
  title: string;
  description: string;
}

interface MissionContent {
  header: {
    title: string;
    description: string;
  };
  timeline: TimelineItem[];
  cards: MissionCard[];
}

interface TestimonialItem {
  content: string;
  name?: string;
  role?: string;
  company?: string;
}

interface TestimonialCardIcons {
  star: string;
  quote: string;
}

interface TestimonialsContent {
  header: {
    title: string;
    description: string;
  };
  items: TestimonialItem[];
  card: {
    icons: TestimonialCardIcons;
  };
}

interface FooterLink {
  text: string;
  url: string;
}

interface SocialLink {
  url: string;
  iconName: string;
}

interface ContactInfo {
  text: string;
  iconName: string;
}

interface FooterContent {
  company: {
    name: string;
    tagline: string;
    description: string;
    logo: {
      src: string;
      alt: string;
    };
    social: {
      linkedin: SocialLink;
      twitter: SocialLink;
      facebook: SocialLink;
    };
  };
  quickLinks: {
    title: string;
    links: FooterLink[];
  };
  solutions: {
    title: string;
    links: FooterLink[];
  };
  contact: {
    title: string;
    info: ContactInfo[];
  };
  bottomBar: {
    copyright: string;
    links: FooterLink[];
  };
}

export interface AppTemplateContent {
  hero: HeroContent;
  features: FeaturesContent;
  industryApplications: IndustryApplicationsContent;
  mission: MissionContent;
  contact: ContactContent;
  testimonials: TestimonialsContent;
  footer: FooterContent;
}
