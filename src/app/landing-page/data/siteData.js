import { Instagram, Facebook, Youtube, Hammer, Home, Wrench, Ruler, Smile } from 'lucide-react';

export const siteData = {

  branding: {
    name: "Carpenter Mike",
    tagline: "Home renovation and carpentry in Kelowna, BC, Canada",
    logo: { icon: Hammer, gradient: "from-gray-600 to-gray-800" }
  },

  hero: {
    title: "My Work in Home Renovation",
    subtitle: "I’ve been working with carpentry and home renovation projects for over 30 years. From kitchens and bathrooms to custom woodworking, I focus on creating practical and reliable solutions that fit your home and budget. Take a look at some of my completed projects below.",
    backgroundImage: "/images/hero-bg.jpg", 
    ctaButtons: [
      { text: "Login to View Projects", action: "login", primary: true },
      { text: "See My Work", action: "jobs", primary: false }
    ]
  },

  stats: [
    { number: '30+', label: 'Years Experience', icon: Ruler },
    { number: '200+', label: 'Renovations Done', icon: Home },
    { number: '150+', label: 'Carpentry Projects', icon: Wrench },
    { number: '100+', label: 'Happy Clients', icon: Smile },
  ],
  

  services: [
    { 
      id:1,
      title: 'Kitchen Renovations', 
      desc: 'Practical kitchen updates including cabinets, counters, and layouts designed to fit your needs and budget.', 
      icon: '🍴',
      gradient: 'from-gray-400 to-gray-600' 
    },
    { 
      id:2,
      title: 'Bathroom Renovations', 
      desc: 'Bathroom updates and improvements with custom storage and durable finishes.', 
      icon: '🚿',
      gradient: 'from-blue-400 to-blue-600' 
    },
    { 
      id:3,
      title: 'Custom Woodwork', 
      desc: 'Cabinetry, shelving, and built-ins tailored to your home.', 
      icon: '🪚',
      gradient: 'from-green-400 to-green-600' 
    },
    { 
      id:4,
      title: 'General Home Projects', 
      desc: 'Small to medium home renovation projects and handyman services.', 
      icon: '🏠',
      gradient: 'from-orange-400 to-orange-600' 
    },
  ],

  about: {
    name: "Michael F. Schulze",
    title: "Carpenter & Renovation Specialist",
    image: "/images/Mike.jpg",
    story: "I’ve worked in carpentry and home renovation for more than 30 years in the Kelowna area. My goal is simple: to provide quality work at a fair price, whether it’s a kitchen, bathroom, or custom woodworking project.",
    testimonial: {
      text: "Mike did an excellent job updating our kitchen. The work was solid, on budget, and he made the process easy for us.",
      author: "Client Testimonial"
    }
  },

  contact: {
    phone: "(250) 300-4551",
    email: "expertmike@yahoo.com",
    location: "Kelowna, BC, Canada",
    social: [
      { platform: "Instagram", icon: Instagram, url: "#" },
      { platform: "Facebook", icon: Facebook, url: "#" },
      { platform: "Youtube", icon: Youtube, url: "#" }
    ]
  }
};
