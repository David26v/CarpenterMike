import { AppProviders } from '@/components/providers';
import './globals.css';

export default function RootLayout({ children }) {
  const metadata = {
    title: "Carpenter Mike | Kelowna's Trusted Renovation Specialist",
    description: "30+ years of residential & commercial remodeling in Kelowna, BC. Kitchens, bathrooms, custom woodwork & office makeovers. Free quotes.",
    openGraph: {
      url: "https://carpentermike.com",
      title: "Carpenter Mike | Kelowna's Trusted Renovation Specialist",
      description: "30+ years of residential & commercial remodeling in Kelowna, BC. Kitchens, bathrooms, custom woodwork & office makeovers. Free quotes.",
      images: [
        {
          url: "https://carpentermike.com/images/hero-remodeling.png",
          width: 1200,
          height: 630,
          alt: "Carpenter Mike Remodeling - Kelowna Kitchen & Bathroom Renovations",
        },
      ],
      siteName: "Carpenter Mike",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Carpenter Mike | Kelowna's Trusted Renovation Specialist",
      description: "30+ years of residential & commercial remodeling in Kelowna, BC. Kitchens, bathrooms, custom woodwork & office makeovers. Free quotes.",
      creator: "@CarpenterMikeBC",
      images: ["https://carpentermike.com/images/hero-remodeling.png"],
    },
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="25C73F122D81094B083C3CA4BF236676" />

        <meta name="google-site-verification" content="bWxu6a938CoP1F7xusHiIRKLHgLL5w-O0NsEKDuFbtw" />

      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}