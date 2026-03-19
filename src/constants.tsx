import React from 'react';
import { Snowflake, Flame, Shield, Clock, Phone, MapPin, Mail, Star, CheckCircle2, ArrowRight, Menu, X, Facebook, Twitter, Instagram, Linkedin, Zap, Thermometer } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  longDescription?: string;
  benefits?: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'ac-repair',
    title: 'AC Repair',
    description: 'Fast, reliable air conditioning repair services to keep you cool during the hottest days.',
    icon: <Snowflake className="w-8 h-8 text-hvac-blue-600" />,
    longDescription: 'Our expert technicians diagnose and fix all AC brands and models. From refrigerant leaks to compressor failures, we handle it all with precision and speed.',
    benefits: ['24/7 Emergency Support', 'Certified Technicians', 'Upfront Pricing', 'All Brands Serviced']
  },
  {
    id: 'heating',
    title: 'Heating System Tune-Ups',
    description: 'Ensure your furnace or heat pump is ready for winter with our comprehensive maintenance.',
    icon: <Flame className="w-8 h-8 text-hvac-red-600" />,
    longDescription: 'Prevent breakdowns before they happen. Our multi-point inspection ensures your heating system operates at peak efficiency and safety.',
    benefits: ['Energy Efficiency Boost', 'Safety Inspection', 'Extended System Life', 'Carbon Monoxide Check']
  },
  {
    id: 'emergency',
    title: 'Emergency HVAC Services',
    description: 'HVAC emergencies don\'t wait for business hours. Neither do we. Available 24/7.',
    icon: <Clock className="w-8 h-8 text-hvac-orange-600" />,
    longDescription: 'When your system fails in extreme weather, it\'s more than an inconvenience—it\'s a safety issue. We prioritize emergency calls to restore your comfort fast.',
    benefits: ['Immediate Response', 'No After-Hours Premium', 'Fully Stocked Vans', 'Priority Dispatch']
  },
  {
    id: 'replacement',
    title: 'Full System Replacement',
    description: 'Upgrade to a modern, high-efficiency system and save on your monthly energy bills.',
    icon: <Zap className="w-8 h-8 text-hvac-blue-800" />,
    longDescription: 'If your system is over 10-15 years old, a replacement can pay for itself in energy savings. We provide expert installation of top-tier brands.',
    benefits: ['Free In-Home Estimates', 'Energy Star Rated Systems', 'Professional Installation', 'Flexible Financing']
  },
  {
    id: 'maintenance',
    title: 'Maintenance Plans',
    description: 'Join our Comfort Club for priority service, discounts, and peace of mind year-round.',
    icon: <Shield className="w-8 h-8 text-hvac-orange-500" />,
    longDescription: 'Regular maintenance is the best way to avoid costly repairs. Our plans are designed to keep your systems running smoothly without the stress.',
    benefits: ['Priority Scheduling', '15% Repair Discount', 'Two Visits Per Year', 'No Diagnostic Fees']
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'CoolFlow saved us during a 100-degree heatwave. They arrived within 2 hours and had our AC running perfectly. Highly recommend!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Property Manager',
    content: 'We use CoolFlow for all our rental properties. Their maintenance plans are a lifesaver and their pricing is always transparent.',
    rating: 5
  },
  {
    name: 'Robert Miller',
    role: 'Homeowner',
    content: 'The installation team was professional, clean, and efficient. Our new heating system is so much quieter and our bills have dropped.',
    rating: 5
  }
];

export const MAINTENANCE_PLANS = [
  {
    name: 'Basic',
    price: '$14.99',
    period: 'per month',
    features: [
      'Annual AC Inspection',
      'Annual Heating Inspection',
      '10% Discount on Repairs',
      'Standard Scheduling'
    ],
    recommended: false
  },
  {
    name: 'Standard',
    price: '$24.99',
    period: 'per month',
    features: [
      'Annual AC Inspection',
      'Annual Heating Inspection',
      '15% Discount on Repairs',
      'Priority Scheduling',
      'No Diagnostic Fees',
      'Free Filter Replacement'
    ],
    recommended: true
  },
  {
    name: 'Premium',
    price: '$39.99',
    period: 'per month',
    features: [
      'Annual AC Inspection',
      'Annual Heating Inspection',
      '20% Discount on Repairs',
      'VIP Priority Scheduling',
      'No Diagnostic Fees',
      'Free Filter Replacement',
      '24/7 Emergency Priority'
    ],
    recommended: false
  }
];

export const SERVICE_AREAS = [
  'Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving', 
  'Garland', 'Grand Prairie', 'McKinney', 'Frisco', 'Mesquite',
  'Carrollton', 'Denton', 'Richardson', 'Lewisville', 'Allen'
];

export const FAQS = [
  {
    question: 'How often should I service my HVAC system?',
    answer: 'We recommend servicing your AC in the spring and your heating system in the fall to ensure peak performance and prevent breakdowns.'
  },
  {
    question: 'What are the signs I need a new AC unit?',
    answer: 'If your unit is over 10 years old, requires frequent repairs, or your energy bills are consistently rising, it might be time for an upgrade.'
  },
  {
    question: 'Do you offer emergency services on weekends?',
    answer: 'Yes! We provide 24/7 emergency HVAC services every day of the year, including weekends and holidays.'
  }
];
