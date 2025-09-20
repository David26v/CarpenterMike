import CommercialInteriorsPage from "@/app/servicePage/CommercialInteriorsPage";

export const metadata = {
  title: 'Commercial Interior Renovation Kelowna | Business Remodeling | Carpenter Mike',
  description: 'Professional commercial interior renovation services in Kelowna, BC. Office remodeling, retail space renovation, wellness center improvements, and custom cabinet builds for businesses. Minimal disruption, quality results, 30+ years experience serving commercial clients.',
  keywords: 'commercial renovation Kelowna, office remodeling Kelowna BC, retail renovation Kelowna, commercial interior design Kelowna, business renovation Kelowna, commercial contractor Kelowna, wellness center renovation, commercial cabinet build, office space renovation BC, commercial painting Kelowna',
  openGraph: {
    title: 'Commercial Interior Renovation Kelowna | Business Remodeling',
    description: 'Professional commercial renovations in Kelowna, BC. Office remodeling, retail spaces, minimal business disruption.',
    type: 'website',
    locale: 'en_CA',
  },
  robots: 'index, follow',
  canonical: 'https://carpentermike.com/services/commercial-interiors'
};

export default function Page() {
  return <CommercialInteriorsPage />;
}