import { Award,  Instagram, Facebook, Youtube,Crown,Sparkles,Diamond } from 'lucide-react';

export const siteData = {

  branding: {
    name: "Carpenter Mike",
    tagline: "Your home renovation specialist in Kelowna, BC, Canada",
    logo: { icon: Crown, gradient: "from-amber-500 to-orange-600" }
  },
  hero: {
    title: "Home Renovation Projects",
    subtitle: "With over 30 years of remodeling expertise, I can bring your vision to life. Whether it's a new kitchen, bathroom, addition, or custom carpentry project, I work within your budget to deliver complete satisfaction. I'd be happy to meet with you, talk through your project, and even suggest options you may not have considered. Let's make your home more inviting — together.",
    backgroundImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&auto=format", 
    ctaButtons: [
      { text: "Get In Touch", action: "contact", primary: true },
      { text: "View My Work", action: "jobs", primary: false }
    ]
  },
  stats: [
    { number: '30+', label: 'Years Master Craftsmanship', icon: Crown, color: 'amber' },
    { number: '200+', label: 'Luxury Kitchen Renovations', icon: Sparkles, color: 'purple' },
    { number: '150+', label: 'Custom Cabinet Suites', icon: Diamond, color: 'blue' },
    { number: '$2M+', label: 'Premium Projects Completed', icon: Award, color: 'green' },
  ],
  services: [
    { 
      title: 'Complete Kitchen Renovations', 
      desc: 'Full-scale luxury kitchen transformations featuring custom cabinetry, premium countertops, and sophisticated design integration. From concept to completion.', 
      icon: '🏛️',
      gradient: 'from-amber-400 to-orange-500' 
    },
    { 
      title: 'Custom Cabinet Systems', 
      desc: 'Handcrafted, bespoke cabinetry using premium hardwoods, soft-close hardware, and innovative storage solutions tailored to your lifestyle.', 
      icon: '🏆',
      gradient: 'from-purple-400 to-indigo-500' 
    },
    { 
      title: 'Luxury Bathroom Makeovers', 
      desc: 'Sophisticated bathroom renovations with custom vanities, built-in storage, and premium finishes that create spa-like retreats.', 
      icon: '💎',
      gradient: 'from-blue-400 to-cyan-500' 
    },
    { 
      title: 'Architectural Millwork', 
      desc: 'Custom built-ins, wainscoting, crown molding, and architectural details that add character and value to luxury homes.', 
      icon: '🏡',
      gradient: 'from-emerald-400 to-teal-500' 
    },
    { 
      title: 'Premium Material Sourcing', 
      desc: 'Access to exotic hardwoods, designer hardware, and exclusive finishes through our network of luxury suppliers.', 
      icon: '✨',
      gradient: 'from-rose-400 to-pink-500' 
    },
  ],
  about: {
    name: "Michael F. Schulze ",
    title: "Master Journeyman Carpenter & Design Craftsman",
    image: "/images/Mike.jpg",
    story: "With over 30 years of remodeling expertise in the Kelowna area, I've helped countless families transform their houses into dream homes. I take pride in working within your budget while delivering quality craftsmanship that exceeds expectations. Every project is unique, and I'm here to guide you through the process from start to finish.",
    testimonial: {
      text: "Michael completely transformed our kitchen into a showpiece that rivals any luxury home magazine. The attention to detail and quality of craftsmanship exceeded every expectation.",
      author: "Sarah Chen, Luxury Homeowner"
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