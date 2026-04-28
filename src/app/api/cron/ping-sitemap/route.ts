import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Ensure the request is authorized by Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  const sitemapUrl = "https://jaxmoving.com/sitemap.xml";

  try {
    const [googleRes, bingRes] = await Promise.all([
      fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`),
      fetch(`https://www.bing.com/ping?sitemap=${sitemapUrl}`),
    ]);

    return NextResponse.json({
      success: true,
      message: "Successfully pinged search engines",
      googleStatus: googleRes.status,
      bingStatus: bingRes.status,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Failed to ping search engines:", error);
    return NextResponse.json({ error: "Failed to ping search engines" }, { status: 500 });
  }
}
