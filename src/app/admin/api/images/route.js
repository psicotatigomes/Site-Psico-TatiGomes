import { put } from "@vercel/blob";
import { list } from "@vercel/blob";

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename");
    const blob = await put(filename, request.body, {
      access: "public",
    });
    return Response.json(blob);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to insert post data.");
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const imageURL = searchParams.get("imageURL");
    const { blobs } = await list();
    const image = blobs.find((img) => img.url === imageURL);
    return Response.json(image);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to list post image data.");
  }
}
