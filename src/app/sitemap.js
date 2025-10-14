
export default function sitemap() {
    const baseUrl = "https://carpentermike.com";
  
    return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 1.0,
      },
      {
        url: `${baseUrl}/#about`,
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/#jobs`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/#contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      
      {
        url: `${baseUrl}/services/bathroom-renovations`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/kitchen-renovations`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/commercial-interiors`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/custom-woodwork`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/general-home-projects`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
    ];
  }
  