import {
  Banknote, Briefcase, Building2, Calculator, Car, Cpu, Factory, GraduationCap, Hammer, Handshake, HardHat, HeartPulse, Hotel,
  Laptop, Plane, Scale, ShoppingBag, Smile, Store, Truck, type LucideIcon,
} from "lucide-react";

export const industryIcons: Record<string, LucideIcon> = {
  saas: Laptop, ecommerce: ShoppingBag, healthcare: HeartPulse, dental: Smile, "real-estate": Building2, finance: Banknote,
  education: GraduationCap, legal: Scale, accounting: Calculator, automotive: Car, hospitality: Hotel, travel: Plane,
  manufacturing: Factory, logistics: Truck, construction: HardHat, "home-services": Hammer, b2b: Handshake,
  "professional-services": Briefcase, technology: Cpu, "local-businesses": Store,
};
