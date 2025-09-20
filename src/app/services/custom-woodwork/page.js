import CustomWoodworkPage from "@/app/servicePage/CustomWoodworkPage";

export const metadata = {
  title: 'Custom Woodwork Kelowna | Built-in Cabinets & Storage Solutions | Carpenter Mike',
  description: 'Expert custom woodwork services in Kelowna, BC. Built-in cabinets, custom storage solutions, pantry units, stair railings, and furniture restoration. Quality craftsmanship with 30+ years experience. Custom oak cabinets and millwork designed for your space.',
  keywords: 'custom woodwork Kelowna, built-in cabinets Kelowna, custom storage solutions BC, pantry units Kelowna, stair railings Kelowna, furniture restoration Kelowna, custom shelving Kelowna, millwork Kelowna, oak cabinets Kelowna, custom carpentry BC, built-in entertainment center',
  openGraph: {
    title: 'Custom Woodwork Kelowna | Built-in Cabinets & Storage Solutions',
    description: 'Quality custom woodwork in Kelowna, BC. Built-in cabinets, storage solutions, furniture restoration. 30+ years experience.',
    type: 'website',
    locale: 'en_CA',
  },
  robots: 'index, follow',
  canonical: 'https://carpentermike.com/services/custom-woodwork'
};

export default function Page() {
  return <CustomWoodworkPage />;
}