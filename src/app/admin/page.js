import { fetchPosts } from "@/app/lib/data";

export default async function Admin() {
  const posts = await fetchPosts();

  return (
    <section>
      <h1>ADMIN PAGE</h1>
    </section>
  );
}
