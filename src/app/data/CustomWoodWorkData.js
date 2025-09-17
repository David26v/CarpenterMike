import { Home, Ruler, Hammer, Wrench, Shield } from "lucide-react";

const woodworkImages = [
    { 
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80", 
      alt: "Built-in Bookcase and Entertainment Center",
      title: "Built-in Entertainment Center"
    },
    { 
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      alt: "Custom Kitchen Cabinets",
      title: "Custom Kitchen Cabinets"
    },
    { 
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80", 
      alt: "Built-in Shelving Unit",
      title: "Custom Built-in Shelving"
    },
    { 
      src: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80", 
      alt: "Custom Closet System",
      title: "Walk-in Closet System"
    },
  ];

  const beforeAfterImages = [
    { 
      before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Built-in Entertainment Center",
      description: "From empty wall space to stunning custom built-in with integrated lighting"
    },
    { 
      before: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80",
      after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      title: "Custom Closet Organization",
      description: "Transformed chaotic closet into organized storage solution"
    },
  ];

  const processes = [
    {
      step: "1",
      title: "Design Consultation & Measurement",
      desc: "I visit your home to understand your storage needs, take precise measurements, and create custom design solutions that fit your space perfectly.",
      duration: "1-2 hours",
      icon: Home,
      details: [
        "Comprehensive space assessment and measurement",
        "Discussion of storage needs and functionality",
        "Style preferences and wood type selection",
        "Budget planning and timeline discussion",
        "Initial sketches and design concepts"
      ]
    },
    {
      step: "2", 
      title: "Design Refinement & Planning",
      desc: "I create detailed drawings and select materials. We refine the design until it's perfect, ensuring every detail meets your needs and vision.",
      duration: "3-5 days",
      icon: Ruler,
      details: [
        "Detailed technical drawings and specifications",
        "Wood species and finish selection",
        "Hardware and accent choices",
        "Integration with existing room elements",
        "Final cost estimates and material ordering"
      ]
    },
    {
      step: "3",
      title: "Material Preparation & Crafting", 
      desc: "I carefully select and prepare all materials in my workshop, ensuring quality and precision in every cut, joint, and detail.",
      duration: "1-2 weeks",
      icon: Hammer,
      details: [
        "Premium wood selection and preparation",
        "Precision cutting and joinery work",
        "Pre-finishing and quality control",
        "Hardware preparation and fitting",
        "Custom detail work and craftsmanship"
      ]
    },
    {
      step: "4",
      title: "Professional Installation",
      desc: "Careful installation in your home with attention to protecting your space. Every piece is fitted precisely and finished to perfection.",
      duration: "1-3 days",
      icon: Wrench,
      details: [
        "Protection of surrounding areas",
        "Precise fitting and installation",
        "Final sanding and finishing touches",
        "Hardware installation and adjustment",
        "Integration with electrical if needed"
      ]
    },
    {
      step: "5",
      title: "Final Inspection & Care Instructions",
      desc: "Complete walkthrough to ensure everything meets our high standards, plus detailed care instructions to keep your woodwork beautiful for years.",
      duration: "30 minutes",
      icon: Shield,
      details: [
        "Complete quality inspection",
        "Function testing and adjustments",
        "Wood care and maintenance instructions",
        "Warranty documentation", 
        "Final cleanup and project completion"
      ]
    }
  ];

  const services = [
    "Built-in bookcases and entertainment centers",
    "Custom closet organization systems", 
    "Window seats with storage compartments",
    "Floating shelves and wall-mounted units",
    "Home office built-ins and desk solutions",
    "Mudroom storage benches and cubbies",
    "Custom trim work and crown molding",
    "Kitchen and bathroom cabinet refacing",
    "Furniture restoration and refinishing",
    "Custom mantels and fireplace surrounds",
    "Walk-in pantry shelving systems",
    "Bedroom built-in wardrobes and dressers"
  ];

  const testimonials = [
    {
      text: "Mike built us the most beautiful built-in entertainment center. The craftsmanship is exceptional and it fits our room perfectly. It looks like it was always meant to be there!",
      author: "Patricia & James Miller",
      rating: 5,
      project: "Built-in Entertainment Center",
      location: "Kelowna, BC"
    },
    {
      text: "Our custom closet system has transformed our bedroom. Mike's attention to detail and quality workmanship exceeded our expectations. Highly recommended!",
      author: "Sandra Thompson", 
      rating: 5,
      project: "Walk-in Closet System",
      location: "Kelowna, BC"
    },
    {
      text: "Mike restored our antique dining table to like-new condition. His knowledge of wood and finishing techniques is impressive. The table looks amazing!",
      author: "Michael Davis",
      rating: 5,
      project: "Furniture Restoration", 
      location: "Kelowna, BC"
    }
  ];

  const faqs = [
    {
      q: "What types of wood do you work with?",
      a: "I work with a wide variety of woods including oak, maple, cherry, pine, cedar, and exotic species. I'll help you select the best wood for your project based on durability, appearance, and budget."
    },
    {
      q: "Can you match existing woodwork in my home?",
      a: "Yes, I can match existing trim, cabinets, or furniture. I'll bring samples to ensure a perfect match in both wood species and finish."
    },
    {
      q: "Do you provide design services or do I need plans?",
      a: "I provide complete design services. I'll create custom designs based on your needs, space, and style preferences. No need to have plans - I handle everything from concept to completion."
    },
    {
      q: "How long do custom woodwork projects typically take?",
      a: "Timeline varies by project complexity. Simple shelving might take 1-2 weeks, while elaborate built-ins can take 3-4 weeks. I'll provide a detailed timeline during consultation."
    },
    {
      q: "Do you offer warranties on your woodwork?",
      a: "Yes, all my custom woodwork comes with a 2-year warranty on craftsmanship. I stand behind every project and will address any issues that arise."
    },
    {
      q: "Can you work around my schedule and minimize disruption?",
      a: "Absolutely. Most of the work is done in my workshop, with minimal time needed in your home for installation. I work around your schedule and protect your living space."
    }
  ];

  export {
    woodworkImages,
    beforeAfterImages,
    processes,
    services,
    testimonials,
    faqs
  }