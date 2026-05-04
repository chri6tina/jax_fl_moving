import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { put, list } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { areas } from '@/app/data/areas';

// We will instantiate the OpenAI client inside the GET handler
// so it doesn't throw a "Missing credentials" error during the Vercel build phase.

export async function GET(request: Request) {
  // Ensure the request is authorized by Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const neighborhoods = areas.map(a => a.name);

    // Dedupe: skip neighborhoods that already have a recent post
    let { blobs: existingBlobs } = await list({ prefix: 'blog/' });
    existingBlobs = existingBlobs
      .filter(b => b.pathname.endsWith('.md'))
      .sort((a, b) => (b.uploadedAt > a.uploadedAt ? 1 : -1));
    const recentPaths = existingBlobs
      .slice(0, Math.max(neighborhoods.length - 2, 8))
      .map(b => b.pathname.toLowerCase());
    const usedSlugs = neighborhoods.filter(n =>
      recentPaths.some(p => p.includes(n.toLowerCase().replace(/\s+/g, '-')))
    );
    const availableNeighborhoods = neighborhoods.filter(n => !usedSlugs.includes(n));
    const pool = availableNeighborhoods.length > 0 ? availableNeighborhoods : neighborhoods;
    const randomNeighborhood = pool[Math.floor(Math.random() * pool.length)];
    const currentMonthYear = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

    // Pick 2 neighbor neighborhoods to suggest as internal-link targets
    const linkTargetSlugs = (availableNeighborhoods.length ? availableNeighborhoods : neighborhoods)
      .filter(n => n !== randomNeighborhood)
      .slice(0, 2)
      .map(n => n.toLowerCase().replace(/\s+/g, '-'));
    const linkTargetText = linkTargetSlugs.map(s => "[/areas/" + s + "](/areas/" + s + ")").join(' or ');

    // Initialize OpenAI client here to avoid build-time errors
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = [
      "You are a professional local SEO copywriter for Jax Moving, a premier local and long-distance moving company based in Jacksonville, FL.",
      "Write a highly comprehensive, 1,500+ word deep-dive blog post about moving tips, relocation advice, or moving checklists specifically tailored for homeowners and renters in " + randomNeighborhood + ", FL.",
      "To achieve the 1,500+ word count, you MUST include:",
      "1. Deep local context (e.g., specific housing styles, weather considerations, traffic or parking rules in " + randomNeighborhood + ").",
      "2. A detailed, multi-step packing checklist.",
      "3. Information about the local real estate vibe or community amenities.",
      "4. An FAQ section at the end.",
      "5. Exactly 2-3 internal Markdown links woven naturally into the body, drawn from this list (use only paths that match - do NOT invent URLs):",
      "   - [/quote](/quote) for the free quote and booking call to action",
      "   - [/services/local](/services/local) for local moves",
      "   - [/services/long-distance](/services/long-distance) for long distance moves",
      "   - [/services/packing](/services/packing) for packing services",
      "   - [/services/storage](/services/storage) for climate-controlled storage",
      "   - [/services/commercial](/services/commercial) for office moves",
      "   - [/services/specialty](/services/specialty) for pianos, safes, specialty items",
      "   - " + linkTargetText + " for neighboring service areas",
      "Firmly state throughout the article that Jax Moving offers transparent flat-rate pricing with zero hidden fees.",
      "Format the entire response in clean Markdown.",
      "Start directly with a # heading for the title, do not wrap the output in markdown code blocks. Make it highly readable with bullet points, H2s, and H3s."
    ].join("\n");

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4o",
      temperature: 0.7,
    });

    const markdownContent = completion.choices[0].message.content || "";

    // Extract title to create a slug
    const titleMatch = markdownContent.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : "Moving Guide for " + randomNeighborhood + " - " + currentMonthYear;

    // Format filename with date: 2026-04-28-moving-guide.md
    const dateStr = new Date().toISOString().split('T')[0];
    const rawSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const filename = "blog/" + dateStr + "-" + rawSlug + ".md";

    // Upload directly to Vercel Blob
    const blob = await put(filename, markdownContent, {
      access: 'public',
      contentType: 'text/markdown',
      addRandomSuffix: false,
    });

    // Instantly burst the Next.js cache so the new post appears immediately
    revalidatePath('/blog');
    revalidatePath('/sitemap.xml');

    return NextResponse.json({
      success: true,
      message: "Weekly post generated and uploaded to Vercel Blob successfully",
      url: blob.url,
      title: title,
      neighborhood: randomNeighborhood,
      skippedRecent: usedSlugs,
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Failed to generate and upload post:", message);
    return NextResponse.json({ error: "Failed to generate post", details: message }, { status: 500 });
  }
}
