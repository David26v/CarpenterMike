import { 
  Building2,
  Users,
  Wrench,
  Shield,
  Briefcase
} from 'lucide-react';

// Use generic commercial images - should be replaced with Mike's actual work photos
const commercialImages = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Commercial interior renovation Las Vegas - professional business space remodeling",
    title: "Commercial Renovation"
  },
  {
    src: "/gallery/Ashworth_Tile_Job/IMG_4140.jpg",
    alt: "Business interior design Las Vegas - commercial tile work and flooring installation",
    title: "Business Interior"
  },
  {
    src: "/gallery/Ashworth_Tile_Job/IMG_5006.jpg",
    alt: "Commercial remodel Las Vegas BC - professional business renovation services",
    title: "Commercial Remodel"
  },
  {
    src: "/gallery/Ashworth_Tile_Job/IMG_4973 (1).jpg",
    alt: "Commercial cabinet work Las Vegas - custom business storage and millwork solutions",
    title: "Commercial Cabinets"
  },
];

const beforeAfterImages = [
  {
    before: "/gallery/Ashworth_Tile_Job/IMG_4140.jpg",
    after: "/gallery/Ashworth_Tile_Job/IMG_4141.jpg",
    title: "Ashworth Commercial Tile Installation - Las Vegas",
    url:'/landing-page/7',
    description: "Professional commercial tile installation featuring expert craftsmanship, quality materials, and precise installation. This Las Vegas commercial project demonstrates professional tile work for business environments.",
  },
  {
    before:  "/gallery/Wellness-Spa/IMG_7300.jpg",
    after:   "/gallery/Wellness-Spa/IMG_7627.jpg",
    url:'/landing-page/28',
    title: "Wellness Spa Interior Makeover",
    description:  "Complete wellness spa build with sauna, shower, relaxation area, and premium wood finishes.",
  },
  {
    before: "/gallery/Baskins-Robbins-Repair/IMG_8269.jpg",
    after: "/gallery/Baskins-Robbins-Repair/IMG_8424.jpg",
    url:'/landing-page/8',
    title: "Baskins-Robbins Repair -Las Vegas",
    description:  "Complete wellness spa build with sauna, shower, relaxation area, and premium wood finishes.",
  },
  {
    before: "/gallery/FAITH/IMG_6481.jpg",
    after:   "/gallery/FAITH/IMG_8665.jpg",
    url:'/landing-page/11',
    title: "Faith Religous Services -Las Vegas",
    description: "Custom window framing and installation with enhanced insulation and aesthetic wood trim."
  },
  {
    before: "/gallery/FAITH/IMG_6481.jpg",
    after:"/gallery/FAITH/IMG_8665.jpg",
    url:'/landing-page/11',
    title: "Faith Religous Services -Las Vegas",
    description: "Custom window framing and installation with enhanced insulation and aesthetic wood trim."
  },
  {
    before:  "/gallery/Floats-Spa/FloatSpa-1.jpeg",
    after:   "/gallery/Floats-Spa/FloatsSpa-12.jpeg",
    title: "Float Spa - Las Vegas",
    url: "/landing-page/12",
    description:"Complete plumbing and shower installation for a commercial float spa. Work included pipe rerouting, valve replacement, waterproof wall framing, and precise tiling to ensure a durable, leak-free, and professional finish suited for a spa environment.",
  }
  
];

const processes = [
  {
    step: "1",
    title: "Business Consultation",
    desc: "I meet with you to understand your business needs, space requirements, and budget for the project.",
    duration: "60-90 minutes",
    icon: Building2,
    details: [
      "Space evaluation and assessment",
      "Discussion of business needs",
      "Budget planning",
      "Project scope discussion"
    ]
  },
  {
    step: "2", 
    title: "Planning & Coordination",
    desc: "I plan the work to minimize disruption to your business operations and coordinate any needed permits.",
    duration: "1-2 weeks",
    icon: Briefcase,
    details: [
      "Work planning and scheduling",
      "Material selection and sourcing",
      "Permit coordination if needed",
      "Timeline development"
    ]
  },
  {
    step: "3",
    title: "Professional Installation", 
    desc: "Quality work completed efficiently with minimal disruption to your business.",
    duration: "Varies by project",
    icon: Wrench,
    details: [
      "Professional workmanship",
      "Minimal business disruption",
      "Daily cleanup",
      "Progress updates"
    ]
  },
  {
    step: "4",
    title: "Project Completion",
    desc: "Final walkthrough and cleanup to ensure your space is ready for business.",
    duration: "1-2 hours",
    icon: Shield,
    details: [
      "Quality inspection",
      "Final cleanup",
      "Project completion",
      "Customer satisfaction"
    ]
  },
  {
    step: "5",
    title: "Follow-up Support",
    desc: "Available for any follow-up needs or future projects.",
    duration: "Ongoing",
    icon: Users,
    details: [
      "Post-project support",
      "Future project planning",
      "Maintenance assistance",
      "Ongoing relationship"
    ]
  }
];

// Realistic service list - only what Mike actually does
const services = [
  "Commercial interior renovation",
  "Custom cabinet build and installation", 
  "Complete interior painting",
  "Flooring installation",
  "General commercial maintenance",
  "Business space improvements",
  "Fixture installation",
  "General carpentry and repairs"
];

// Real testimonials from Mike's actual Las Vegas clients
const testimonials = [
  {
    text: "Mike did an outstanding job on our wellness center renovation. The commercial interior remodel, custom cabinet build, and complete paint job transformed our space completely. Professional, reliable, and delivered exactly what we envisioned.",
    author: "Selah Harper, Wellness Center",
    rating: 5,
    project: "Commercial Interior Remodel",
    location: "Las Vegas, NV",
  },
  {
    text: "Professional commercial work with attention to detail. Mike understood our business needs and delivered quality results.",
    author: "Judge Bonaventure",
    rating: 5,
    project: "Commercial Project",
    location: "Las Vegas, NV",
  }
];

const faqs = [
  {
    q: "What types of commercial spaces do you work on?",
    a: "I work on various commercial spaces including offices, wellness centers, and other business interiors. Each project is evaluated based on scope and requirements."
  },
  {
    q: "Do you work during business hours?",
    a: "I work to minimize disruption to your business. Depending on the project, work can often be scheduled during off-hours or slow periods."
  },
  {
    q: "Can you handle permits and inspections?",
    a: "I coordinate permits and inspections as needed and work with local officials to ensure compliance with requirements."
  },
  {
    q: "How do you handle budget planning?",
    a: "I provide transparent estimates and work within your budget. If scope changes during the project, we discuss options and costs upfront."
  },
  {
    q: "Do you provide design services?",
    a: "I provide practical design input based on your business needs and space requirements, focusing on functional solutions."
  },
  {
    q: "What's your timeline for commercial projects?",
    a: "Timeline depends on project scope. Small projects may take days, while larger renovations can take weeks. I provide realistic timelines during consultation."
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