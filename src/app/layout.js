import { AppProviders } from '@/components/providers';
import './globals.css';

export const metadata = {
  title: "Carpenter Mike | Kelowna's Trusted Renovation Specialist",
  description:
    "30+ years of residential & commercial remodeling in Kelowna, BC. Kitchens, bathrooms, custom woodwork & office makeovers. Free quotes.",
  openGraph: {
    url: "https://carpentermike.com", 
    title: "Carpenter Mike | Kelowna's Trusted Renovation Specialist",
    description:
      "30+ years of residential & commercial remodeling in Kelowna, BC. Kitchens, bathrooms, custom woodwork & office makeovers. Free quotes.",
    images: [
      {
        url: "https://carpentermike.com/images/hero-remodeling.png", 
        width: 1200,
        height: 630,
        alt: "Carpenter Mike Remodeling - Kelowna Kitchen & Bathroom Renovations",
      },
    ],
    siteName: "Carpenter Mike",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Carpenter Mike | Kelowna's Trusted Renovation Specialist",
    description:
      "30+ years of residential & commercial remodeling in Kelowna, BC. Kitchens, bathrooms, custom woodwork & office makeovers. Free quotes.",
    creator: "@CarpenterMikeBC", 
    images: ["https://carpentermike.com/images/hero-remodeling.png"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}