import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";


export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request) {
  noStore();
  try {
    const data = await sql`SELECT * FROM posts`;
    console.log(data);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts data.");
  }
}

export async function POST(request) {
  try {
    const { title, content_html, cover_image_url } = await request.json();
    const res =
      await sql`INSERT INTO posts (title, content_html, cover_image_url) VALUES (${title}, ${content_html}, ${cover_image_url})`;

    return Response.json(res);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to insert post data.");
  }
}

export async function PUT(request) {
  console.log("ROUTE:PUT");
}

export async function DELETE(request) {
  console.log("ROUTE:DELETE");
}