import { 
    Home,
    Paintbrush,
    Wrench,
    Shield,
    Settings
  } from 'lucide-react';

const homeProjectImages = [
    { 
      src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      alt: "Interior Painting Project",
      title: "Interior Painting"
    },
    { 
      src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      alt: "Hardwood Flooring Installation",
      title: "Flooring Installation"
    },
    { 
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80", 
      alt: "Kitchen Renovation Project",
      title: "Kitchen Updates"
    },
    { 
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      alt: "Door and Window Installation",
      title: "Door & Window Work"
    },
  ];

  const beforeAfterImages = [
    { 
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      after: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Complete Room Makeover",
      description: "Fresh paint and updated fixtures transformed this living space"
    },
    { 
      before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      after: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Flooring Upgrade",
      description: "Beautiful hardwood flooring installation with professional finish"
    },
  ];

  const processes = [
    {
      step: "1",
      title: "Project Assessment & Quote",
      desc: "I evaluate your project needs, discuss your vision, and provide a detailed quote with timeline and cost breakdown.",
      duration: "30-60 minutes",
      icon: Home,
      details: [
        "Comprehensive project evaluation",
        "Discussion of your goals and preferences",
        "Material and finish recommendations",
        "Detailed written quote with breakdown",
        "Timeline planning and scheduling"
      ]
    },
    {
      step: "2", 
      title: "Material Procurement & Planning",
      desc: "I source quality materials at competitive prices and coordinate delivery to ensure your project starts on schedule.",
      duration: "1-3 days",
      icon: Settings,
      details: [
        "Quality material sourcing",
        "Competitive pricing through supplier relationships",
        "Delivery coordination and scheduling",
        "Tool and equipment preparation",
        "Project timeline confirmation"
      ]
    },
    {
      step: "3",
      title: "Efficient Project Execution", 
      desc: "Professional completion of your project with attention to detail, cleanliness, and minimal disruption to your daily routine.",
      duration: "Varies by project",
      icon: Wrench,
      details: [
        "Professional workmanship and technique",
        "Daily cleanup and organization",
        "Minimal disruption to your home",
        "Regular progress updates",
        "Quality control throughout process"
      ]
    },
    {
      step: "4",
      title: "Quality Inspection & Cleanup",
      desc: "Thorough inspection of completed work, final cleanup, and debris removal to leave your space ready to enjoy.",
      duration: "1-2 hours",
      icon: Paintbrush,
      details: [
        "Complete quality inspection",
        "Final touch-ups and adjustments",
        "Thorough cleanup and debris removal",
        "Protection removal and restoration",
        "Final walkthrough with client"
      ]
    },
    {
      step: "5",
      title: "Follow-up & Warranty Support",
      desc: "Post-project follow-up to ensure satisfaction and ongoing warranty support for any issues that may arise.",
      duration: "Ongoing",
      icon: Shield,
      details: [
        "Customer satisfaction follow-up",
        "Maintenance tips and care instructions",
        "Warranty documentation and support",
        "Future project planning assistance", 
        "Reliable ongoing relationship"
      ]
    }
  ];

  const services = [
    "Interior painting and color consultation",
    "Exterior painting and staining", 
    "Hardwood and laminate flooring installation",
    "Tile and vinyl flooring installation",
    "Door installation and replacement",
    "Window installation and trim work",
    "Deck and patio construction",
    "Crown molding and trim installation",
    "Drywall repair and texture matching",
    "Home maintenance and seasonal repairs",
    "Fixture installation and replacement",
    "Minor plumbing and electrical coordination"
  ];

  const testimonials = [
    {
      text: "Mike painted our entire house interior and the results are fantastic. He's reliable, reasonably priced, and pays attention to every detail. Highly recommend!",
      author: "Karen & Steve Martinez",
      rating: 5,
      project: "Interior Painting Project",
      location: "Kelowna, BC"
    },
    {
      text: "From small repairs to larger projects, Mike has been our go-to contractor for years. He's honest, skilled, and always delivers quality work on time.",
      author: "Dorothy Williams", 
      rating: 5,
      project: "Multiple Home Projects",
      location: "Kelowna, BC"
    },
    {
      text: "Mike installed beautiful hardwood floors in our living room. Professional work, fair pricing, and he kept everything clean throughout the project.",
      author: "Tony Chen",
      rating: 5,
      project: "Hardwood Flooring Installation", 
      location: "Kelowna, BC"
    }
  ];

  const faqs = [
    {
      q: "What types of projects do you handle?",
      a: "I handle a wide variety of home improvement projects, from small repairs and maintenance to larger renovations. If you're not sure if I can help with your project, just give me a call and we can discuss it."
    },
    {
      q: "Do you provide free estimates?",
      a: "Yes, I provide free estimates for all projects. I'll come to your home, assess the work needed, and provide a detailed written quote with no obligation."
    },
    {
      q: "How do you handle scheduling and timing?",
      a: "I work around your schedule whenever possible. For most projects, I can start within a week of approval and will give you a realistic timeline during the estimate."
    },
    {
      q: "Do you clean up after the project?",
      a: "Absolutely. I believe in leaving your home cleaner than I found it. Daily cleanup during the project and thorough final cleanup are included in all my services."
    },
    {
      q: "What if I'm not satisfied with the work?",
      a: "Customer satisfaction is my priority. If you're not completely satisfied, I'll work with you to make it right. All my work comes with a satisfaction guarantee."
    },
    {
      q: "Can you help with emergency repairs?",
      a: "Yes, I'm available for emergency repairs when possible. Give me a call and I'll do my best to help you quickly, especially for issues that could cause damage to your home."
    }
  ];




export {
    homeProjectImages,
    beforeAfterImages,
    processes,
    services,
    testimonials,
    faqs
}