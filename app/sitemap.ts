import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jaxflmovers.com';
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/services/local-moves`, lastModified },
  ];
}

