import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { areas } from '@/app/data/areas';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(request: Request) {
  // Ensure the request is authorized by Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const neighborhoods = areas.map(a => a.name);
    
    // Pick a random neighborhood to build hyper-local authority
    const randomNeighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
    const currentMonthYear = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

    const prompt = `You are a professional local SEO copywriter for Jax Moving, a premier local and long-distance moving company based in Jacksonville, FL.
Write a highly engaging, 1,000-word blog post about moving tips, relocation advice, or moving checklists specifically tailored for homeowners and renters in ${randomNeighborhood}, FL.
Include specific local context (e.g. housing styles, weather, parking), mention the local real estate vibe in that area, and firmly state that Jax Moving offers transparent flat-rate pricing with zero hidden fees.
Format the entire response in clean Markdown.
Start directly with a # heading for the title, do not wrap the output in markdown code blocks. Make it highly readable with bullet points and H2s.`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4o",
      temperature: 0.7,
    });

    const markdownContent = completion.choices[0].message.content || "";
    
    // Extract title to create a slug
    const titleMatch = markdownContent.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : `Moving Guide for ${randomNeighborhood} - ${currentMonthYear}`;
    
    // Format filename with date: 2026-04-28-moving-guide.md
    const dateStr = new Date().toISOString().split('T')[0];
    const rawSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const filename = `blog/${dateStr}-${rawSlug}.md`;

    // Upload directly to Vercel Blob
    const blob = await put(filename, markdownContent, {
      access: 'public',
      contentType: 'text/markdown',
      addRandomSuffix: false, // Ensures the file name perfectly matches our slug, preventing 404s
    });

    // Instantly burst the Next.js cache so the new post appears immediately
    revalidatePath('/blog');
    revalidatePath('/sitemap.xml');

    return NextResponse.json({
      success: true,
      message: "Monthly post generated and uploaded to Vercel Blob successfully",
      url: blob.url,
      title: title
    });

  } catch (error: any) {
    console.error("Failed to generate and upload post:", error);
    return NextResponse.json({ error: "Failed to generate post", details: error.message }, { status: 500 });
  }
}
