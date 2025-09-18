import { AppProviders } from '@/components/providers';
import './globals.css';

export default function RootLayout({ children }) {
  // Detect the domain dynamically
  const host =
    typeof window !== "undefined"
      ? window.location.hostname
      : "carpentermike.com"; // fallback for SSR

  // Set metadata based on the domain
  const isKelownaRemodels = host.includes("KelownaRemodels.ca");

  const metadata = {
    title: isKelownaRemodels
      ? "Kelowna Remodels | Expert Kitchen & Bathroom Renovations"
      : "Carpenter Mike | Kelowna's Trusted Renovation Specialist",
    description: isKelownaRemodels
      ? "Professional kitchen, bathroom & home renovations in Kelowna, BC. Free quotes available."
      : "30+ years of residential & commercial remodeling in Kelowna, BC. Kitchens, bathrooms, custom woodwork & office makeovers. Free quotes.",
    openGraph: {
      url: isKelownaRemodels
        ? "https://KelownaRemodels.ca"
        : "https://carpentermike.com",
      title: isKelownaRemodels
        ? "Kelowna Remodels | Expert Kitchen & Bathroom Renovations"
        : "Carpenter Mike | Kelowna's Trusted Renovation Specialist",
      description: isKelownaRemodels
        ? "Professional kitchen, bathroom & home renovations in Kelowna, BC. Free quotes available."
        : "30+ years of residential & commercial remodeling in Kelowna, BC. Kitchens, bathrooms, custom woodwork & office makeovers. Free quotes.",
      images: [
        {
          url: "https://carpentermike.com/images/hero-remodeling.png",
          width: 1200,
          height: 630,
          alt: isKelownaRemodels
            ? "Kelowna Remodels - Kitchen & Bathroom Renovations"
            : "Carpenter Mike Remodeling - Kelowna Kitchen & Bathroom Renovations",
        },
      ],
      siteName: isKelownaRemodels ? "Kelowna Remodels" : "Carpenter Mike",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isKelownaRemodels
        ? "Kelowna Remodels | Expert Kitchen & Bathroom Renovations"
        : "Carpenter Mike | Kelowna's Trusted Renovation Specialist",
      description: isKelownaRemodels
        ? "Professional kitchen, bathroom & home renovations in Kelowna, BC. Free quotes available."
        : "30+ years of residential & commercial remodeling in Kelowna, BC. Kitchens, bathrooms, custom woodwork & office makeovers. Free quotes.",
      creator: "@CarpenterMikeBC",
      images: ["https://carpentermike.com/images/hero-remodeling.png"],
    },
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        <meta name="msvalidate.01" content="25C73F122D81094B083C3CA4BF236676" />

      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
