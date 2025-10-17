import { Home, Paintbrush, Wrench, Shield, Settings } from "lucide-react";

// Use generic home project images - should be replaced with Mike's actual work photos
const homeProjectImages = [
  {
    src: "/gallery/Ashworth_Hood/IMG_5588.jpg",
    alt: "Interior home improvement Kelowna - custom hood installation and kitchen upgrades",
    title: "Interior Painting",
  },
  {
    src: "/gallery/Ashworth_Tile_Job/IMG_4445.jpg",
    alt: "Flooring installation Kelowna BC - professional tile and flooring services",
    title: "Flooring Work",
  },
  {
    src: "/gallery/Ashworth_Tile_Job/IMG_4444.jpg",
    alt: "Home renovation projects Kelowna - general contracting and home improvements",
    title: "Home Improvements",
  },
  {
    src: "/gallery/Ashworth_Kitchen_Makeover/IMG_4853.jpg",
    alt: "General contracting Kelowna - home maintenance and repair services",
    title: "General Contracting",
  },
];

const beforeAfterImages = [
  {
    before: "/gallery/Ashworth_Hood/IMG_5523.jpg",
    after: "/gallery/Ashworth_Hood/IMG_5670.jpg",
    url:'/landing-page/5',
    title: "Ashworth Custom Hood Installation Project - Las Vegas",
    description: "Professional custom hood installation featuring structural reinforcement, precise fitting, and quality finish work. This Las Vegas home improvement project upgraded kitchen ventilation while enhancing the overall aesthetic and functionality of the space.",
  },
  {
    before: "/gallery/Elizabeth_Kitchen_Makeover/Before 1.jpeg",
    after: "/gallery/Elizabeth_Kitchen_Makeover/IMG_7914.jpg",
    title: "Elizabeth's Complete Kitchen Transformation - Las Vegas",
    description: "Complete kitchen renovation featuring new cabinets, modern countertops, and improved lighting. This Las Vegas kitchen makeover transformed an outdated space into a functional, beautiful cooking area with quality craftsmanship and attention to detail.",
    url:'/landing-page/9'
  },
  {
    before: "/gallery/Tatina-Guest-Bedroom/IMG_5315.jpg",
    title: "Tatiana's Guest Bedroom Makeover Flooring - Las Vegas",
    after: "/gallery/Tatina-Guest-Bedroom/IMG_5375.jpg",
    url: "/landing-page/21",
    description: "Stylish guest bedroom renovation in Las Vegas featuring built-in storage, custom lighting, and modern finishes for a functional, upgraded space."
  },
  {
    before:  "/gallery/absorbtionPit/Before.jpg",
    title: "Absorbtion Pit- Las Vegas",
    after:  "/gallery/absorbtionPit/absfinal2.jpg",
    url: "/landing-page/1",
    description: "Professional installation of an absorption pit for drainage and water management, built to last with durable materials and precise engineering."
  },
  {
    before: "/gallery/AlPool/allpool3.jpg",
    title: "Al's Pool - Las Vegas",
    after: "/gallery/AlPool/alspool_new_3.jpeg",
    url: "/landing-page/3",
    description: "Complete pool restoration and resurfacing project featuring a rebuilt spa area, new tiling, and improved water circulation system. Enhanced the pool’s structure, drainage, and aesthetic appeal for long-term durability and a refreshed resort-style look."
  }
  
  
];

// Simplified, honest process description
const processes = [
  {
    step: "1",
    title: "Project Assessment",
    desc: "I evaluate your project needs, discuss your goals, and provide an honest assessment with realistic pricing.",
    duration: "30-60 minutes",
    icon: Home,
    details: [
      "Project evaluation and assessment",
      "Discussion of your goals",
      "Material recommendations",
      "Realistic timeline and pricing",
    ],
  },
  {
    step: "2",
    title: "Planning & Materials",
    desc: "I plan the work and source quality materials at fair prices.",
    duration: "1-3 days",
    icon: Settings,
    details: [
      "Work planning and scheduling",
      "Material sourcing",
      "Timeline confirmation",
      "Project preparation",
    ],
  },
  {
    step: "3",
    title: "Quality Work",
    desc: "Professional completion of your project with attention to detail and cleanliness.",
    duration: "Varies by project",
    icon: Wrench,
    details: [
      "Professional workmanship",
      "Daily cleanup",
      "Minimal disruption",
      "Progress updates",
    ],
  },
  {
    step: "4",
    title: "Completion & Cleanup",
    desc: "Final inspection and thorough cleanup to leave your space ready to enjoy.",
    duration: "1-2 hours",
    icon: Paintbrush,
    details: [
      "Quality inspection",
      "Final touch-ups",
      "Complete cleanup",
      "Project completion",
    ],
  },
  {
    step: "5",
    title: "Follow-up",
    desc: "Follow-up to ensure your satisfaction and address any questions.",
    duration: "Ongoing",
    icon: Shield,
    details: [
      "Customer satisfaction check",
      "Care instructions",
      "Warranty support",
      "Future project assistance",
    ],
  },
];

// Realistic service list - only what Mike actually does
const services = [
  "Interior and exterior painting",
  "Flooring installation and repair",
  "General carpentry and repairs",
  "Tile work and installation",
  "Home maintenance and upkeep",
  "Fixture installation",
  "Door and window work",
  "Trim and molding installation",
  "Drywall repair and finishing",
  "General handyman services",
];

const testimonials = [
  {
    text: "Mike completely transformed our kitchen with beautiful custom tile work and professional installation. His attention to detail on the stainless steel hood installation was impressive, and he handled our absorption pit work flawlessly. Highly recommend his expertise for any Las Vegas area project!",
    author: "Vonda Ashworth",
    rating: 5,
    project: "Kitchen Remodel & Custom Tile Work",
    location: "Las Vegas, NV",
    services: ["custom tile work", "stainless steel hood installation", "absorption pit work"]
  },
  {
    text: "The custom oak cabinets Mike built for us are absolutely stunning. His craftsmanship on our pantry units and stair railings exceeded our expectations. Professional, reliable, and truly skilled at his craft.",
    author: "Wonda Russel & Judge Bonaventure", 
    rating: 5,
    project: "Custom Oak Cabinets & Millwork",
    location: "Las Vegas, NV",
    services: ["custom oak cabinets", "pantry units", "stair railings", "flagstone work", "exterior tile"]
  },
  {
    text: "Mike did an excellent job updating our kitchen. The work was solid, on budget, and he made the process easy for us. Would definitely hire him again for future projects.",
    author: "Elizabeth Bushea",
    rating: 5,
    project: "Kitchen Update & Home Improvements",
    location: "Las Vegas, NV",
    services: ["kitchen updates", "home improvements"]
  },
];

const faqs = [
  {
    q: "What types of projects do you handle?",
    a: "I handle a variety of home improvement projects, from painting and repairs to flooring and general maintenance. If you're not sure if I can help, just give me a call.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes, I provide free estimates for projects. I'll assess the work needed and provide honest pricing with no obligation.",
  },
  {
    q: "How do you handle scheduling?",
    a: "I work around your schedule whenever possible. For most projects, I can start within a reasonable timeframe and will give you a realistic timeline.",
  },
  {
    q: "Do you clean up after projects?",
    a: "Absolutely. I believe in leaving your home clean and tidy. Daily cleanup during work and thorough final cleanup are included.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "Customer satisfaction is important to me. If you're not satisfied, I'll work with you to make it right.",
  },
  {
    q: "Can you help with emergency repairs?",
    a: "I'm available for emergency repairs when possible. Give me a call and I'll do my best to help quickly.",
  },
];

export {
  homeProjectImages,
  beforeAfterImages,
  processes,
  services,
  testimonials,
  faqs,
};
