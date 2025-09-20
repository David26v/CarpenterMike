import BathroomRenovationPage from "@/app/servicePage/BathroomRenovationPage";

export const metadata = {
  title: 'Bathroom Renovations Kelowna | Walk-in Showers & Tile Work | Carpenter Mike',
  description: 'Professional bathroom renovations in Kelowna, BC. Expert tile work, walk-in showers, custom vanities, and complete bathroom makeovers. 30+ years experience with quality craftsmanship. Free consultation and honest estimates for all bathroom projects.',
  keywords: 'bathroom renovation Kelowna, bathroom remodel Kelowna BC, walk-in shower installation Kelowna, bathroom tile work Kelowna, custom vanity Kelowna, bathroom contractor Kelowna, shower renovation BC, bathroom makeover Kelowna, tile installation Kelowna, bathroom renovation cost',
  openGraph: {
    title: 'Bathroom Renovations Kelowna | Walk-in Showers & Tile Work',
    description: 'Expert bathroom renovations in Kelowna, BC. Walk-in showers, custom vanities, professional tile work. Free consultation.',
    type: 'website',
    locale: 'en_CA',
  },
  robots: 'index, follow',
  canonical: 'https://carpentermike.com/services/bathroom-renovations'
};

export default function Page() {
  return <BathroomRenovationPage />;
}