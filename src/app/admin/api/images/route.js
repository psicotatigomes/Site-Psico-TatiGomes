import { put } from "@vercel/blob";

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
