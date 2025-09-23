import { Home, Ruler, Hammer, Wrench, Shield } from "lucide-react";

// Use generic woodwork images - should be replaced with Mike's actual work photos
const woodworkImages = [
  {
    src: "/gallery/AkiKitchenMakeover/aki8.jpg",
    alt: "Built-in storage solutions Kelowna - custom woodwork and cabinetry by Carpenter Mike",
    title: "Built-in Storage"
  },
  {
    src: "/gallery/Ashworth_Kitchen_Makeover/IMG_5182.jpg",
    alt: "Custom cabinet installation Kelowna - handcrafted kitchen cabinets and millwork",
    title: "Custom Cabinet Work"
  },
  {
    src: "/gallery/Ashworth_Kitchen_Makeover/IMG_5500.jpg",
    alt: "Custom shelving Kelowna BC - built-in bookcase and storage solutions",
    title: "Custom Shelving"
  },
  {
    src: "/gallery/Ashworth_Kitchen_Makeover/IMG_7027.jpg",
    alt: "Storage solutions Kelowna - custom woodwork and organizational systems",
    title: "Storage Solutions"
  },
];

const beforeAfterImages = [
  {
    before: "/gallery/Elizabeth_Kitchen_Makeover/Before 1.jpeg",
    after: "/gallery/Elizabeth_Kitchen_Makeover/IMG_7914.jpg",
    title: "Elizabeth's Complete Kitchen Transformation - Kelowna",
    description: "Complete kitchen renovation featuring new cabinets, modern countertops, and improved lighting. This Kelowna kitchen makeover transformed an outdated space into a functional, beautiful cooking area with quality craftsmanship and attention to detail.",
    url:'/landing-page/9'
  },
  {
    before: "/gallery/AkiKitchenMakeover/aki1.jpg",
    after: "/gallery/AkiKitchenMakeover/aki12.jpg",
    url:'/landing-page/2',
    title: "Aki's Custom Kitchen Cabinet Project - Kelowna",
    description: "Complete custom cabinet transformation featuring handcrafted woodwork, quality joinery, and professional installation. This Kelowna custom woodwork project showcases expert craftsmanship in kitchen cabinet design and construction.",
  },
];


  // Simplified, honest process description
  const processes = [
    {
      step: "1",
      title: "Consultation & Assessment",
      desc: "I visit your home to understand your needs, take measurements, and discuss design possibilities within your budget.",
      duration: "1-2 hours",
      icon: Home,
      details: [
        "Space assessment and measurements",
        "Discussion of your storage needs",
        "Wood type and style preferences",
        "Budget planning and timeline"
      ]
    },
    {
      step: "2", 
      title: "Design & Planning",
      desc: "I create a design plan and select materials that work for your space and needs.",
      duration: "3-5 days",
      icon: Ruler,
      details: [
        "Design planning and sketches",
        "Wood selection and material sourcing",
        "Hardware choices",
        "Cost estimates and timeline"
      ]
    },
    {
      step: "3",
      title: "Crafting & Preparation", 
      desc: "I carefully prepare and craft all pieces with attention to quality and detail.",
      duration: "1-2 weeks",
      icon: Hammer,
      details: [
        "Quality wood preparation",
        "Precision cutting and joinery",
        "Pre-finishing work",
        "Hardware preparation"
      ]
    },
    {
      step: "4",
      title: "Installation",
      desc: "Professional installation in your home with care to protect your space.",
      duration: "1-3 days",
      icon: Wrench,
      details: [
        "Protection of surrounding areas",
        "Precise installation",
        "Final finishing touches",
        "Hardware installation"
      ]
    },
    {
      step: "5",
      title: "Final Inspection",
      desc: "Complete walkthrough to ensure quality and your satisfaction.",
      duration: "30 minutes",
      icon: Shield,
      details: [
        "Quality inspection",
        "Function testing",
        "Care instructions",
        "Project completion"
      ]
    }
  ];

  // Realistic service list - only what Mike actually does
  const services = [
    "Custom cabinets and built-ins",
    "Pantry units and storage solutions", 
    "Stair railings and trim work",
    "Custom shelving and bookcases",
    "Kitchen and bathroom cabinet work",
    "Storage benches and window seats",
    "Custom trim and molding",
    "Furniture repair and refinishing",
    "General carpentry and woodwork"
  ];

  

  const faqs = [
    {
      q: "What types of wood do you work with?",
      a: "I work with a variety of woods including oak, pine, cedar, and other species. I'll help you select the best wood for your project based on your needs and budget."
    },
    {
      q: "Can you match existing woodwork?",
      a: "Yes, I can work to match existing trim, cabinets, or furniture. I'll assess what's needed to achieve a good match."
    },
    {
      q: "Do you provide design services?",
      a: "I provide design assistance based on your space and needs. I'll work with you to create a plan that fits your requirements and budget."
    },
    {
      q: "How long do woodwork projects take?",
      a: "Timeline varies by project complexity. Simple projects might take 1-2 weeks, while more elaborate work can take 3-4 weeks. I'll provide a timeline during consultation."
    },
    {
      q: "What's your warranty policy?",
      a: "I stand behind my craftsmanship and will address any issues that arise. We'll discuss warranty details during our consultation."
    },
    {
      q: "Can you work around my schedule?",
      a: "Yes, I work to minimize disruption. Most crafting is done off-site, with installation scheduled around your convenience."
    }
  ];

  export {
    woodworkImages,
    beforeAfterImages,
    processes,
    services,
    faqs
  }