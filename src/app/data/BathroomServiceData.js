import { 
  ArrowLeft, 
  Phone, 
  CheckCircle, 
  Star, 
  Clock, 
  DollarSign, 
  Award, 
  Image,
  ArrowRight,
  Home,
  Lightbulb, 
  Wrench,
  Droplets, 
  Shield,
} from 'lucide-react';

export const bathroomImages = [
    { 
      src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", 
      alt: "Modern Bathroom with Walk-in Shower",
      title: "Modern Shower Design"
    },
    { 
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      alt: "Elegant Bathroom Vanity",
      title: "Custom Vanity Installation"
    },
    { 
      src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      alt: "Luxury Bathroom with Freestanding Tub",
      title: "Luxury Bathroom Design"
    },
    { 
      src: "https://images.unsplash.com/photo-1556909114-7724cd7be22e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      alt: "Bathroom Tile Work",
      title: "Custom Tile Installation"
    },
];

export  const beforeAfterImages = [
    { 
      before: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Complete Bathroom Transformation",
      description: "From outdated fixtures to modern walk-in shower with custom tile work"
    },
    { 
      before: "https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Small Bathroom Makeover",
      description: "Maximized storage and improved functionality in a compact space"
    },
  ];

  export const processes = [
    {
      step: "1",
      title: "Free Consultation & Assessment",
      desc: "I evaluate your current bathroom, discuss your needs, and provide design recommendations that work within your space and budget.",
      duration: "1 hour",
      icon: Home,
      details: [
        "Space measurement and layout assessment",
        "Plumbing and electrical evaluation",
        "Discussion of style preferences and needs",
        "Budget planning and timeline discussion",
        "Initial design concepts and suggestions"
      ]
    },
    {
      step: "2", 
      title: "Design & Material Planning",
      desc: "Together we select fixtures, tiles, vanities, and create a detailed plan that maximizes your space while staying within budget.",
      duration: "3-5 days",
      icon: Lightbulb,
      details: [
        "Detailed bathroom design and layout",
        "Fixture and fitting selection",
        "Tile and flooring material choices",
        "Vanity and storage solutions",
        "Lighting and ventilation planning",
        "Final estimates and project timeline"
      ]
    },
    {
      step: "3",
      title: "Preparation & Demolition", 
      desc: "Careful removal of old fixtures and tiles while protecting the rest of your home. I ensure proper disposal and minimal mess.",
      duration: "1 day",
      icon: Wrench,
      details: [
        "Protection of adjacent areas",
        "Safe removal of old fixtures and tiles",
        "Proper disposal of all materials",
        "Assessment of plumbing and electrical",
        "Surface preparation for new installation"
      ]
    },
    {
      step: "4",
      title: "Installation & Construction",
      desc: "Professional installation of all fixtures, tiles, vanity, and plumbing. I ensure everything is perfectly waterproofed and finished.",
      duration: "1-2 weeks",
      icon: Droplets,
      details: [
        "Plumbing rough-in and updates",
        "Electrical work and lighting installation",
        "Waterproofing and tile installation",
        "Vanity and fixture installation",
        "Final plumbing connections and testing"
      ]
    },
    {
      step: "5",
      title: "Final Details & Walkthrough",
      desc: "Complete quality check, final touches, and demonstration of all features. Your bathroom is ready to enjoy with full warranty coverage.",
      duration: "1 hour",
      icon: Shield,
      details: [
        "Complete quality inspection",
        "Final caulking and touch-ups",
        "Demonstration of all features",
        "Care and maintenance instructions", 
        "Warranty documentation and cleanup"
      ]
    }
  ];

  export const services = [
    "Complete bathroom remodeling and design",
    "Walk-in shower installation and conversion", 
    "Bathtub installation and replacement",
    "Custom vanity design and installation",
    "Tile work and waterproofing systems",
    "Bathroom lighting design and installation",
    "Ventilation fan installation and upgrades",
    "Plumbing fixture updates and relocations",
    "Accessibility modifications and grab bars",
    "Custom storage solutions and medicine cabinets",
    "Heated floor installation",
    "Mirror and glass shower door installation"
  ];

 export  const testimonials = [
    {
      text: "Mike transformed our small bathroom into a beautiful, functional space. His tile work is absolutely perfect, and he completed everything on time and within budget.",
      author: "Jennifer & Mark Wilson",
      rating: 5,
      project: "Complete Bathroom Renovation",
      location: "Kelowna, BC"
    },
    {
      text: "Professional work from start to finish. Mike's attention to detail in the shower installation was impressive. We love our new bathroom!",
      author: "Carol Stevens", 
      rating: 5,
      project: "Walk-in Shower Installation",
      location: "Kelowna, BC"
    },
    {
      text: "Mike helped us design a bathroom that works perfectly for our family. His suggestions saved us money while giving us everything we wanted.",
      author: "Robert Kim",
      rating: 5,
      project: "Master Bathroom Makeover", 
      location: "Kelowna, BC"
    }
  ];

  export const faqs = [
    {
      q: "How long does a bathroom renovation typically take?",
      a: "Most bathroom renovations take 1-2 weeks depending on the scope. Simple fixture updates might take a few days, while complete renovations with tile work typically take 2-3 weeks. I provide a detailed timeline during consultation."
    },
    {
      q: "Can you work around my schedule if it's the only bathroom?",
      a: "Absolutely. I understand the inconvenience of losing your only bathroom. I can work in phases to minimize downtime and coordinate with you to ensure access when needed most."
    },
    {
      q: "Do you handle plumbing and electrical work?",
      a: "Yes, I coordinate all plumbing and electrical work. I work with licensed professionals when required and ensure all work meets current codes and standards."
    },
    {
      q: "What about waterproofing and preventing water damage?",
      a: "Proper waterproofing is critical in bathroom renovations. I use modern waterproofing systems and techniques to ensure your bathroom is completely protected against water damage."
    },
    {
      q: "Can you help make my bathroom more accessible?",
      a: "Yes, I can install grab bars, comfort-height toilets, walk-in showers, and other accessibility features to make your bathroom safer and more comfortable."
    },
    {
      q: "Do you provide design help or do I need to have everything planned?",
      a: "I provide complete design assistance. I'll help you select fixtures, tiles, and layout options that work best for your space, needs, and budget."
    }
  ];