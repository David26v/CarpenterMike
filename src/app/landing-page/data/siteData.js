import {
  Instagram,
  Facebook,
  Youtube,
  Hammer,
} from "lucide-react";

export const siteData = {
  branding: {
    name: "Carpenter Mike Remodels Kelowna",
    tagline:
      "Residential and Commercial Interior Remodels, Renovations & Makeovers in Kelowna, BC, Canada",
    logo: { icon: Hammer, gradient: "from-gray-600 to-gray-800" },
  },

  hero: {
    title:
      "Complete Remodeling, Renovations & Makeovers — Residential & Commercial Interior.",
    subtitle:
      "With over 30 years of experience, I’ve completed remodels, renovations, and makeovers across both residential and commercial spaces. From kitchens and bathrooms to custom woodworking and office interiors, I create practical, reliable solutions that fit your vision and budget. Take a look at some of my completed projects below.",
    backgroundImage: "/images/hero-bg.jpg",
    ctaButtons: [
      { text: "Login to View Projects", action: "login", primary: true },
      { text: "See My Work", action: "jobs", primary: false },
    ],
  },



  services: [
    {
      id: 1,
      title: "Kitchen Renovations",
      desc: "Practical kitchen updates including cabinets, counters, and layouts designed to fit your needs and budget.",
      icon: "🍴",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      id: 2,
      title: "Bathroom Renovations",
      desc: "Bathroom updates and improvements with custom storage and durable finishes.",
      icon: "🚿",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      title: "Custom Woodwork",
      desc: "Cabinetry, shelving, and built-ins tailored to your home.",
      icon: "🪚",
      gradient: "from-green-400 to-green-600",
    },
    {
      id: 4,
      title: "General Home Projects",
      desc: "Small to medium home renovation projects and handyman services.",
      icon: "🏠",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      id: 5,
      title: "Commercial Interiors",
      desc: "Remodels and Makeovers are not limited to residential buildings.",
      icon: "🏢",
      gradient: "from-amber-400 to-amber-600",
    },
  ],
  

  about: {
    name: "Michael F. Schulze",
    title: "Carpenter & Renovation Specialist",
    image: "/images/mike_about.jpg",
    story: `I’m an all-trades craftsman with over 30 years of experience. My work goes far beyond carpentry, as my photo gallery demonstrates. 
    I’ve performed:
    • Remodels (changing the structure)
    • Renovations (restoring or updating)
    • Makeovers (cosmetic refreshing)

    I perform every aspect of the work—no subcontractors, no outside crews, except where licensed experts are required. From building custom cabinets to complete residential makeovers and commercial interior work, I personally ensure the job is done right. 

    I keep my operation small, with minimal overhead. That means fair pricing and personal attention you won’t get from larger companies.

    My entire portfolio consists of projects done in the United States. I’ve now relocated to the beautiful city of Kelowna to bring that same experience and craftsmanship to this community. References can be provided.`
    ,
    testimonial: {
      text: "Mike did an excellent job updating our kitchen. The work was solid, on budget, and he made the process easy for us.",
      author: "Elizabeth Bushea",
    },
  },

  contact: {
    phone: "(250) 300-4551",
    email: "expertmike@yahoo.com",
    location: "Kelowna, BC, Canada",
    social: [
      { platform: "Instagram", icon: Instagram, url: "#" },
      { platform: "Facebook", icon: Facebook, url: "#" },
      { platform: "Youtube", icon: Youtube, url: "#" },
    ],
    consultationLine: "Contact me if you’d like to discuss your project.",
    projectPrompt:
      "Give me a brief description of the project you have in mind.",
    visionPrompt: "Give me a basic idea of the project you have in mind.",
  },
};
