import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { list } from '@vercel/blob';
import ReactMarkdown from 'react-markdown';
import PageHero from '@/app/components/PageHero';

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const { blobs } = await list({ prefix: 'blog/' });
    return blobs
      .filter((blob) => blob.pathname.endsWith('.md'))
      .map((blob) => {
        const filename = blob.pathname.replace('blog/', '').replace('.md', '');
        return { slug: filename };
      });
  } catch (e) {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${title} | Jax Moving Blog`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let markdown = '';
  let date = '';
  
  try {
    const { blobs } = await list({ prefix: `blog/${slug}.md` });
    if (blobs.length === 0) {
      notFound();
    }
    
    const response = await fetch(blobs[0].url);
    if (!response.ok) notFound();
    
    markdown = await response.text();
    
    const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      date = dateMatch[1];
    }
  } catch (e) {
    console.error(e);
    notFound();
  }

  return (
    <>
      <PageHero
        title="Moving Guide"
        subtitle={date ? `Published on ${new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` : ''}
        centered={false}
      />
      
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <Link href="/blog" style={{ display: 'inline-block', marginBottom: 32, color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
            &larr; Back to all guides
          </Link>
          
          <div className="markdown-body" style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--color-text)' }}>
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', marginTop: '2rem', lineHeight: 1.2 }} {...props} />,
                h2: ({node, ...props}) => <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', marginTop: '2.5rem', color: 'var(--color-primary)' }} {...props} />,
                h3: ({node, ...props}) => <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', marginTop: '1.5rem' }} {...props} />,
                p: ({node, ...props}) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
                ul: ({node, ...props}) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }} {...props} />,
                li: ({node, ...props}) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
                strong: ({node, ...props}) => <strong style={{ fontWeight: 700, color: 'var(--color-dark)' }} {...props} />,
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  );
}
