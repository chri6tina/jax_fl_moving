import type { Metadata } from 'next';
import Link from 'next/link';
import { list } from '@vercel/blob';
import PageHero from '@/app/components/PageHero';

export const metadata: Metadata = {
  title: 'Moving Blog & Relocation Guides | Jax Moving',
  description: 'Tips, checklists, and local guides for moving in Jacksonville, FL.',
};

export const revalidate = 3600; // Revalidate every hour

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  url: string;
  pathname: string;
}

export default async function BlogIndex() {
  let posts: BlogPost[] = [];
  try {
    const { blobs } = await list({ prefix: 'blog/' });
    posts = blobs
      .filter((blob) => blob.pathname.endsWith('.md'))
      .map((blob) => {
        // Extract slug and date from filename like "blog/2026-04-28-my-post.md"
        const filename = blob.pathname.replace('blog/', '').replace('.md', '');
        const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
        
        let date = '';
        let slug = filename;
        let title = filename.replace(/-/g, ' ');

        if (dateMatch) {
          date = dateMatch[1];
          slug = dateMatch[2];
          // Simple title formatting
          title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }

        return {
          slug: filename, // We'll use the full filename as the slug to easily fetch it
          title,
          date,
          url: blob.url,
          pathname: blob.pathname
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (e) {
    console.error("Failed to list blog posts:", e);
  }

  return (
    <>
      <PageHero
        eyebrow="Moving Guides"
        title="Jax Moving Blog"
        subtitle="Expert tips, local insights, and everything you need to know about relocating in Northeast Florida."
      />

      <section className="section" style={{ background: '#FEFCF8', minHeight: '50vh' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--color-muted)' }}>
              <p>Check back soon for new moving guides and local neighborhood tips!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {posts.map((post) => (
                <Link key={post.pathname} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article style={{ background: '#fff', padding: 32, borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s ease' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: 8 }}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: 12, color: 'var(--color-text)' }}>{post.title}</h2>
                    <div style={{ display: 'inline-block', fontWeight: 600, color: 'var(--color-accent)', fontSize: '0.95rem' }}>
                      Read article →
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
