import { SITE } from "@/lib/config";
import { guides } from "@/lib/data/guides";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const items = guides
    .map(
      (guide) => `
    <item>
      <title><![CDATA[${guide.title}]]></title>
      <link>${SITE.url}/guides/${guide.slug}</link>
      <guid isPermaLink="true">${SITE.url}/guides/${guide.slug}</guid>
      <description><![CDATA[${guide.description}]]></description>
      <pubDate>${new Date(guide.publishedAt).toUTCString()}</pubDate>
      <category>${guide.category}</category>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name} — Moving Guides</title>
    <link>${SITE.url}</link>
    <description>Free moving guides and removal advice for Greater Manchester from ${SITE.name}.</description>
    <language>en-gb</language>
    <managingEditor>${SITE.email}</managingEditor>
    <webMaster>${SITE.email}</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE.url}/logo.png</url>
      <title>${SITE.name}</title>
      <link>${SITE.url}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
