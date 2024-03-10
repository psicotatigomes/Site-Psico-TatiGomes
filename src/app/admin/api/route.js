export const dynamic = "force-dynamic"; // defaults to auto
import { sql } from "@vercel/postgres";

export async function GET(request) {
  console.log("ROUTE:GET");
  return new Response("GET");
}

export async function POST(request) {
  const { title, content_html, cover_image_url } = await request.json();
  const res =
    await sql`INSERT INTO posts (title, content_html, cover_image_url) VALUES (${title}, ${content_html}, ${cover_image_url})`;

  console.log(res);
  return new Response(res);
}

export async function PUT(request) {
  console.log("ROUTE:PUT");
}

export async function DELETE(request) {
  console.log("ROUTE:DELETE");
}
