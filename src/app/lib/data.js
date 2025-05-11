import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchPosts() {
  noStore();
  try {
    const data = await sql`SELECT * FROM posts`;
    console.log("DATA", data.rows);
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts data.");
  }
}
