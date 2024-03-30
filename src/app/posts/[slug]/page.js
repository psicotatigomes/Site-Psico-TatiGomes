import { sql } from "@vercel/postgres";
import { parse } from "node-html-parser";
import styles from "./styles.module.scss";
import Contact from "@/app/components/ContactSection/Contact";

export default async function Post({ params }) {
  const postId = decodeURIComponent(params.slug);
  const res = await sql`SELECT * FROM posts WHERE id=${postId}`;
  const post = res.rows.at(0);

  const parseStringToHtml = (htmlString) => {
    console.log("POST", post);
    const doc = parse(htmlString);
    return { __html: doc.innerHTML };
  };

  return (
    <>
      <div className={styles.imgWrapper} />
      <main>
        <div className={styles.container}>
          <section
            className={styles.section}
            dangerouslySetInnerHTML={parseStringToHtml(post?.content_html)}
          />
        </div>
        <Contact />
      </main>
    </>
  );
}
