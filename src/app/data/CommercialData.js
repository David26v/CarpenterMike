import { 
    Building2,
    Users,
    Wrench,
    Shield,
    Briefcase
  } from 'lucide-react';

const commercialImages = [
    { 
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", 
      alt: "Modern Office Space Renovation",
      title: "Office Space Renovation"
    },
    { 
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      alt: "Retail Store Interior Design",
      title: "Retail Store Design"
    },
    { 
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80", 
      alt: "Restaurant Interior Renovation",
      title: "Restaurant Interior"
    },
    { 
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80", 
      alt: "Reception Area Design",
      title: "Reception Area Design"
    },
  ];

  const beforeAfterImages = [
    { 
      before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      after: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Corporate Office Transformation",
      description: "From outdated cubicles to an open, modern workspace with branded finishes and ergonomic furniture."
    },
    { 
      before: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      after: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Retail Store Revamp",
      description: "Enhanced lighting, custom shelving, and cohesive branding transformed this boutique into a customer magnet."
    },
  ];

  const processes = [
    {
      step: "1",
      title: "Business Needs Assessment & Consultation",
      desc: "We meet with you to understand your brand identity, workflow, customer experience goals, and functional requirements.",
      duration: "60-90 minutes",
      icon: Building2,
      details: [
        "On-site evaluation of current space",
        "Discussion of brand aesthetics and culture",
        "Employee and customer flow analysis",
        "Budget alignment and ROI expectations",
        "Detailed project scope document"
      ]
    },
    {
      step: "2", 
      title: "Design Planning & Material Selection",
      desc: "Our team creates custom design concepts, selects durable, professional-grade materials, and coordinates with architects if needed.",
      duration: "1-2 weeks",
      icon: Briefcase,
      details: [
        "Custom 3D renderings and floor plans",
        "Material samples (flooring, wall finishes, cabinetry)",
        "Lighting and electrical layout planning",
        "Furniture selection and procurement",
        "Permit coordination and compliance checks"
      ]
    },
    {
      step: "3",
      title: "Professional Installation & Project Execution", 
      desc: "Minimal disruption during business hours. We work efficiently with precision, safety, and cleanliness standards.",
      duration: "Varies by project",
      icon: Wrench,
      details: [
        "Scheduled work outside peak hours when possible",
        "Dust containment and debris management",
        "High-quality craftsmanship on all finishes",
        "Regular progress updates via photo logs",
        "Safety protocols for occupied spaces"
      ]
    },
    {
      step: "4",
      title: "Final Inspection & Handover",
      desc: "Thorough walkthrough with you to ensure every detail meets your vision and operational needs.",
      duration: "1-2 hours",
      icon: Shield,
      details: [
        "Comprehensive quality inspection checklist",
        "Final touch-ups and adjustments",
        "Cleaning and removal of all construction waste",
        "Documentation of warranties and maintenance tips",
        "Client sign-off and project closure"
      ]
    },
    {
      step: "5",
      title: "Ongoing Support & Maintenance",
      desc: "Your satisfaction doesn’t end at project completion. We offer post-project support and maintenance packages.",
      duration: "Ongoing",
      icon: Users,
      details: [
        "1-year warranty on all labor and installations",
        "Priority response for minor repairs",
        "Annual maintenance checkups available",
        "Upgrades and expansions planned in advance",
        "Dedicated point of contact for future projects"
      ]
    }
  ];

  const services = [
    "Office space redesign and renovation",
    "Retail store fit-outs and layouts",
    "Restaurant and café interior design",
    "Lobby and reception area upgrades",
    "Conference room and boardroom buildouts",
    "Custom cabinetry and millwork",
    "Lighting design and installation",
    "Flooring installation (hardwood, LVT, tile)",
    "Wall finishes (paint, paneling, feature walls)",
    "Ceiling systems and acoustic treatments",
    "ADA-compliant accessibility modifications",
    "Branding integration (signage, graphics, color schemes)"
  ];

  const testimonials = [
    {
      text: "Mike transformed our outdated office into a modern, inspiring workspace. Our team productivity increased, and clients notice the difference immediately. Worth every penny!",
      author: "Sarah Lin, CEO",
      rating: 5,
      project: "Corporate Office Renovation",
      location: "Kelowna, BC"
    },
    {
      text: "The restaurant remodel exceeded our expectations. The lighting, flooring, and bar design created exactly the vibe we wanted. Customers are raving about the atmosphere.",
      author: "James Rodriguez, Owner",
      rating: 5,
      project: "Restaurant Interior Design",
      location: "Kelowna, BC"
    },
    {
      text: "As a boutique retailer, our space had to reflect our brand. Mike listened, delivered beyond our vision, and kept us open during most of the work. Professional through and through.",
      author: "Emma Carter, Owner",
      rating: 5,
      project: "Retail Store Fit-Out",
      location: "Kelowna, BC"
    }
  ];

  const faqs = [
    {
      q: "What types of commercial spaces do you renovate?",
      a: "I specialize in offices, retail stores, restaurants, salons, medical clinics, co-working spaces, and light industrial facilities. No project is too large or small."
    },
    {
      q: "Do you work during business hours?",
      a: "Yes — I prioritize minimizing disruption. Most work is scheduled during evenings, weekends, or slow periods. I can also phase work to keep your business running smoothly."
    },
    {
      q: "Can you handle permits and inspections?",
      a: "I coordinate all necessary permits, inspections, and code compliance. I work with city officials and inspectors to ensure your project passes without delays."
    },
    {
      q: "How do you handle budget constraints?",
      a: "I provide transparent quotes with clear line items. If your budget changes, I offer flexible solutions — phased implementation, material substitutions, or prioritized phases."
    },
    {
      q: "Do you provide design services?",
      a: "Yes! I collaborate with designers or create custom concepts myself based on your brand and function. I’ll present options with visuals so you know exactly what you’re getting."
    },
    {
      q: "What’s your timeline for commercial projects?",
      a: "Small projects (e.g., reception area) take 1–2 weeks. Medium renovations (office or retail) take 3–6 weeks. Larger builds may take 8–12 weeks. I provide a detailed schedule upfront."
    }
  ];


export {
    commercialImages,
    beforeAfterImages,
    processes,
    services,
    testimonials,
    faqs
};