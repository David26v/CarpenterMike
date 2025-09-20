import GeneralHomeProjectsPage from "@/app/servicePage/GeneralHomeProjectsPage ";

export const metadata = {
  title: 'General Home Projects Kelowna | Handyman Services & Home Repairs | Carpenter Mike',
  description: 'Reliable home improvement services in Kelowna, BC. Interior painting, flooring installation, home repairs, maintenance, and general contracting. 30+ years experience with versatile skills for projects big and small. Honest pricing and quality workmanship.',
  keywords: 'handyman services Kelowna, home repairs Kelowna BC, interior painting Kelowna, flooring installation Kelowna, general contractor Kelowna, home improvement Kelowna, home maintenance BC, flagstone work Kelowna, exterior tile installation, home renovation Kelowna, reliable contractor BC',
  openGraph: {
    title: 'General Home Projects Kelowna | Handyman Services & Home Repairs',
    description: 'Reliable home improvement services in Kelowna, BC. Painting, flooring, repairs, maintenance. 30+ years experience.',
    type: 'website',
    locale: 'en_CA',
  },
  robots: 'index, follow',
  canonical: 'https://carpentermike.com/services/general-home-projects'
};

export default function Page() {
  return <GeneralHomeProjectsPage />;
}