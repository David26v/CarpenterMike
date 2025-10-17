import { 
  Home,
  Palette,
  Wrench,
  Shield
} from 'lucide-react';

const kitchenImages = [
  {
    src: "/gallery/Ashworth_Kitchen_Makeover/IMG_3925.jpg",
    alt: "Modern kitchen renovation Las Vegas - custom cabinets and countertops by Carpenter Mike",
    title: "Modern Kitchen Design",
  },
  {
    src: "/gallery/Elizabeth_Kitchen_Makeover/Before 1.jpeg",
    alt: "Traditional kitchen before renovation - Las Vegas kitchen remodel project",
    title: "Traditional Kitchen Before",
  },
  {
    src: "/gallery/Elizabeth_Kitchen_Makeover/IMG_7914.jpg",
    alt: "Kitchen island design Las Vegas - custom kitchen renovation with modern finishes",
    title: "Kitchen Island Design",
  },
  {
    src: "/gallery/Elizabeth_Kitchen_Makeover/IMG_7480.jpg",
    alt: "Custom kitchen renovation Las Vegas - professional installation and craftsmanship",
    title: "Custom Kitchen Renovation",
  },
];

const beforeAfterImages = [
  {
    before: "/gallery/Elizabeth_Kitchen_Makeover/Before 1.jpeg",
    after: "/gallery/Elizabeth_Kitchen_Makeover/IMG_7914.jpg",
    title: "Elizabeth's Complete Kitchen Transformation - Las Vegas",
    description: "Complete kitchen renovation featuring new cabinets, modern countertops, and improved lighting. This Las Vegas kitchen makeover transformed an outdated space into a functional, beautiful cooking area with quality craftsmanship and attention to detail.",
    url:'/landing-page/9'
  },
  {
    before: "/gallery/AkiKitchenMakeover/aki1.jpg",
    after:  "/gallery/AkiKitchenMakeover/aki9.jpg",
    url:'/landing-page/2',
    title: "Aki's Custom Kitchen Cabinet Project - Las Vegas",
    description: "Complete custom cabinet transformation featuring handcrafted woodwork, quality joinery, and professional installation. This Las Vegas custom woodwork project showcases expert craftsmanship in kitchen cabinet design and construction.",
  },
  {
    before: "/gallery/Ashworth_Kitchen_Makeover/ashworth_before.jpeg", 
    after:  "/gallery/Ashworth_Kitchen_Makeover/ashworth_after.jpeg", 
    url:'/landing-page/6',
    title: "Ashworth Kitchen Makeover - Las Vegas",
    description: "Professional commercial tile installation featuring expert craftsmanship, quality materials, and precise installation. This Las Vegas commercial project demonstrates professional tile work for business environments.",
  },
  {
    before: "/gallery/Ashworth_Hood/IMG_5523.jpg",
    after: "/gallery/Ashworth_Hood/IMG_5670.jpg",
    url:'/landing-page/5',
    title: "Ashworth Custom Hood Installation Project - Las Vegas",
    description: "Professional custom hood installation featuring structural reinforcement, precise fitting, and quality finish work. This Las Vegas home improvement project upgraded kitchen ventilation while enhancing the overall aesthetic and functionality of the space.",
  },
  {
    before: "/gallery/Anderson_Kitchen_Island/IMG_4679.jpg",
    after: "/gallery/Anderson_Kitchen_Island/IMG_5819.jpg",
    url:'/landing-page/4',
    title: "Anderson Kitchen Island - Las Vegas",
    description: "Stunning custom kitchen island in Las Vegas with waterfall edge countertop, storage drawers, and breakfast bar seating.",
  },
];

const processes = [
{
  step: "1",
  title: "Free Consultation",
  desc: "I visit your home to understand your needs, discuss your vision, and provide an honest assessment of what's possible within your budget.",
  duration: "1-2 hours",
  icon: Home,
  details: [
    "Space assessment and measurements",
    "Discussion of your needs and preferences", 
    "Budget planning and realistic timeline",
    "Initial ideas and recommendations",
  ],
},
{
  step: "2",
  title: "Planning & Design",
  desc: "Together we plan your renovation, select materials, and create a detailed approach that fits your timeline and budget.",
  duration: "1-2 weeks",
  icon: Palette,
  details: [
    "Design planning based on your space",
    "Material selection and sourcing",
    "Detailed cost estimates", 
    "Timeline planning",
  ],
},
{
  step: "3",
  title: "Quality Installation",
  desc: "Professional installation with attention to detail. I keep your home clean and work efficiently to minimize disruption.",
  duration: "2-4 weeks",
  icon: Wrench,
  details: [
    "Professional installation",
    "Quality craftsmanship",
    "Daily cleanup",
    "Regular progress updates",
  ],
},
{
  step: "4",
  title: "Final Walkthrough",
  desc: "We review everything together to ensure you're completely satisfied with the work.",
  duration: "1 hour",
  icon: Shield,
  details: [
    "Complete quality inspection",
    "Final cleanup",
    "Project completion",
    "Satisfaction guarantee",
  ],
},
];

const services = [
  "Kitchen renovations and remodeling",
  "Cabinet installation and refacing",
  "Kitchen islands and custom storage",
  "Flooring installation", 
  "Painting and finishing work",
  "Electrical and plumbing coordination",
  "Tile work and backsplashes",
  "General carpentry and repairs",
];


const testimonials = [
  {
    text: "Mike completely transformed our kitchen with beautiful custom tile work and professional installation. His attention to detail on the stainless steel hood installation was impressive, and he handled our absorption pit work flawlessly. Highly recommend his expertise!",
    author: "Vonda Ashworth",
    rating: 5,
    project: "Kitchen Remodel & Custom Tile Work",
    location: "Las Vegas, NV",
  },
  {
    text: "The custom oak cabinets Mike built for us are absolutely stunning. His craftsmanship on our pantry units and stair railings exceeded our expectations. Professional, reliable, and truly skilled at his craft.",
    author: "Wonda Russel & Judge Bonaventure", 
    rating: 5,
    project: "Custom Oak Cabinets & Millwork",
    location: "Las Vegas, NV",
  },
];

const faqs = [
{
  q: "How long does a kitchen renovation typically take?",
  a: "Most kitchen renovations take 2-4 weeks depending on the scope of work. I provide a realistic timeline during our consultation based on your specific project.",
},
{
  q: "Do you handle permits and inspections?",
  a: "Yes, I coordinate with licensed professionals for electrical and plumbing work as needed and ensure all work meets current building codes.",
},
{
  q: "Can I use my kitchen during the renovation?",
  a: "I work to minimize disruption to your daily routine. While there will be periods when your kitchen isn't fully functional, I plan the work to reduce inconvenience as much as possible.",
},
{
  q: "What's your warranty policy?",
  a: "I stand behind my workmanship and will address any issues that arise. We'll discuss warranty details during our consultation.",
},
{
  q: "How do you determine the cost?", 
  a: "Costs depend on the scope of work, materials chosen, and complexity of the project. After our consultation, I provide a detailed written estimate.",
},
{
  q: "Do you work with existing appliances?",
  a: "Absolutely! I can design around your existing appliances if they're in good condition, or help coordinate new appliance installation.",
},
];

export { services, testimonials, faqs, processes, kitchenImages, beforeAfterImages };