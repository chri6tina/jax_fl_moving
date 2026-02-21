import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jaxflmovers.com';
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/services`, lastModified },
    { url: `${base}/pricing`, lastModified },
    { url: `${base}/services/local-moves`, lastModified },
    { url: `${base}/services/long-distance`, lastModified },
    { url: `${base}/services/packing`, lastModified },
    { url: `${base}/services/loading-unloading`, lastModified },
    { url: `${base}/services/office-moves`, lastModified },
    { url: `${base}/services/specialty-items`, lastModified },
  ];
}

