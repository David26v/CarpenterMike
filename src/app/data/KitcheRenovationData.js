import { 
    Award, 
    Home,
    Palette,
    Wrench,
    Shield
  } from 'lucide-react';

const kitchenImages = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Modern Kitchen with White Cabinets and Island",
    title: "Modern White Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    alt: "Traditional Kitchen with Dark Wood Cabinets",
    title: "Traditional Dark Wood Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-4f5417d22bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Kitchen with Large Island and Pendant Lights",
    title: "Kitchen Island Design",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Custom Kitchen Cabinets",
    title: "Custom Cabinet Work",
  },
];

const beforeAfterImages = [
  {
    before:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
    after:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Complete Kitchen Transformation",
    description:
      "From outdated oak cabinets to modern white shaker style with quartz countertops",
  },
  {
    before:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    after:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Galley Kitchen Makeover",
    description: "Maximized storage and improved workflow in a compact space",
  },
];

const processes = [
  {
    step: "1",
    title: "Free Consultation & Design",
    desc: "I visit your home to understand your needs, take precise measurements, and discuss your vision, style preferences, and budget constraints.",
    duration: "1-2 hours",
    icon: Home,
    details: [
      "Comprehensive space assessment",
      "Discussion of your cooking habits and needs",
      "Style and material preferences",
      "Budget planning and timeline discussion",
      "Initial design concepts and sketches",
    ],
  },
  {
    step: "2",
    title: "Planning & Material Selection",
    desc: "Together we choose materials, finishes, appliances, and create a detailed plan with 3D renderings that fits your timeline and budget.",
    duration: "1-2 weeks",
    icon: Palette,
    details: [
      "3D kitchen design and renderings",
      "Cabinet style and finish selection",
      "Countertop material choices",
      "Appliance selection and coordination",
      "Lighting and electrical planning",
      "Final cost estimates and contracts",
    ],
  },
  {
    step: "3",
    title: "Preparation & Demolition",
    desc: "Careful removal of old fixtures, cabinets, and preparation of the space. I protect your home and minimize dust and disruption.",
    duration: "1-2 days",
    icon: Wrench,
    details: [
      "Protecting adjacent rooms and furniture",
      "Safe removal of old cabinets and appliances",
      "Disposal of all demolition materials",
      "Rough plumbing and electrical updates",
      "Wall and floor preparation",
    ],
  },
  {
    step: "4",
    title: "Installation & Construction",
    desc: "Professional installation of cabinets, countertops, backsplash, flooring, lighting, and all finishing touches with attention to every detail.",
    duration: "2-3 weeks",
    icon: Award,
    details: [
      "Precision cabinet installation",
      "Countertop templating and installation",
      "Backsplash tile work",
      "Flooring installation",
      "Electrical and plumbing connections",
      "Hardware and fixture installation",
    ],
  },
  {
    step: "5",
    title: "Final Walkthrough & Warranty",
    desc: "We review everything together, I demonstrate features, and provide care instructions. All work comes with my satisfaction guarantee.",
    duration: "1 hour",
    icon: Shield,
    details: [
      "Complete quality inspection",
      "Demonstration of all features",
      "Care and maintenance instructions",
      "Warranty documentation",
      "Final cleanup and project completion",
    ],
  },
];

const services = [
  "Custom cabinet design and installation",
  "Cabinet refacing and refinishing",
  "Countertop installation (granite, quartz, marble, butcher block)",
  "Kitchen island design and construction",
  "Backsplash tile installation and design",
  "Kitchen lighting design and installation",
  "Hardwood and tile flooring installation",
  "Appliance integration and built-in solutions",
  "Pantry and storage optimization",
  "Kitchen layout redesign and space planning",
  "Plumbing fixture updates and relocations",
  "Electrical upgrades and outlet additions",
];

const testimonials = [
  {
    text: "Mike completely transformed our 1980s kitchen into a stunning modern space. His attention to detail is incredible, and he stayed within our budget. We couldn't be happier!",
    author: "Sarah & Tom Johnson",
    rating: 5,
    project: "Complete Kitchen Renovation",
    location: "Kelowna, BC",
  },
  {
    text: "Professional work at a fair price. Mike explained everything clearly, kept us informed throughout the process, and delivered exactly what he promised. Highly recommended!",
    author: "David Chen",
    rating: 5,
    project: "Kitchen Island & Cabinet Upgrade",
    location: "Kelowna, BC",
  },
  {
    text: "From design to completion, Mike made the entire process smooth and stress-free. Our new kitchen is the heart of our home now. Thank you, Mike!",
    author: "Linda Robertson",
    rating: 5,
    project: "Galley Kitchen Makeover",
    location: "Kelowna, BC",
  },
];

const faqs = [
  {
    q: "How long does a typical kitchen renovation take?",
    a: "Most kitchen renovations take 3-4 weeks from start to finish, depending on the scope of work. Simple cabinet replacements might take 2 weeks, while complete renovations with structural changes can take up to 6 weeks. I provide a detailed timeline during our consultation.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Yes, I take care of all necessary permits for electrical, plumbing, and structural work. I coordinate with city inspectors to ensure everything meets current building codes and safety standards.",
  },
  {
    q: "Can I use my kitchen during the renovation?",
    a: "I work to minimize disruption to your daily routine. While there will be periods when your kitchen isn't fully functional, I can set up a temporary kitchen area with essentials like a microwave, mini-fridge, and coffee maker.",
  },
  {
    q: "What's included in your warranty?",
    a: "All my workmanship comes with a comprehensive 2-year warranty. This covers installation issues, cabinet adjustments, and any defects in my work. Material warranties are provided by manufacturers.",
  },
  {
    q: "How do you determine the cost of a kitchen renovation?",
    a: "Costs depend on several factors: kitchen size, cabinet quality, countertop materials, appliances, and complexity of the work. After our consultation, I provide a detailed written estimate with no hidden fees.",
  },
  {
    q: "Do you work with my existing appliances?",
    a: "Absolutely! I can design around your existing appliances if they're in good condition. I can also recommend new appliances and coordinate delivery and installation.",
  },
];

export { services, testimonials, faqs, processes, kitchenImages ,beforeAfterImages };
