import { sql } from "@vercel/postgres";
import Image from "next/image";
import { parse } from "node-html-parser";
import styles from "./styles.module.scss";

export default async function Post({ params }) {
  const postId = decodeURIComponent(params.slug).split("&id=")[1];
  const res = await sql`SELECT * FROM posts WHERE id=${postId}`;
  const post = res.rows.at(0);

  const parseStringToHtml = (htmlString) => {
    const doc = parse(htmlString);
    return { __html: doc.innerHTML };
  };

  return (
    <>
      <div className={styles.imgWrapper} />
      <main className={styles.section}>
        <section
          dangerouslySetInnerHTML={parseStringToHtml(post.content_html)}
        />
      </main>
    </>
  );
}
