import { MetadataRoute } from 'next';
import { list } from '@vercel/blob';
import { areas } from '@/app/data/areas';
import { services } from '@/app/data/services';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Dynamically get the base URL to prevent "URL not allowed" errors in Google Search Console
  // when submitting the sitemap from a Vercel preview/production domain.
  const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
  };
  
  const baseUrl = getBaseUrl();

  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/faq',
    '/contact',
    '/quote',
    '/services',
    '/areas',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Service Pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Dynamic Area Pages
  const areaRoutes = areas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 4. Dynamic Blog Posts (from Vercel Blob)
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const { blobs } = await list({ prefix: 'blog/' });
    blogRoutes = blobs
      .filter((blob) => blob.pathname.endsWith('.md'))
      .map((blob) => {
        const slug = blob.pathname.replace('blog/', '').replace('.md', '');
        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: blob.uploadedAt, // Use the actual upload date
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        };
      });
  } catch (e) {
    console.error('Failed to fetch blog posts for sitemap:', e);
  }

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
