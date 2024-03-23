"use client";
import Link from "next/link";
import ImageWithFallback from "../ImageWithFallback";
import styles from "./styles.module.scss";

export default function PostCard({ post }) {
  const parser = new DOMParser();

  const parseStringToHtml = (htmlString) => {
    const doc = parser.parseFromString(htmlString, "text/html");
    return { __html: doc.body.innerHTML };
  };
  return (
    <article key={post.id} className={styles.article}>
      <div className={styles.article__cover}>
        <ImageWithFallback
          src={post.cover_image_url}
          alt="Post's cover"
          width={330}
          height={312}
          fallback="/fallback-post.png"
        />
      </div>
      <div className={styles.article__header}>{/* <p>{post.title}</p> */}</div>
      <div
        className={styles.article__body}
        dangerouslySetInnerHTML={parseStringToHtml(post.content_html)}
      />
      <div className={styles.article__footer}>
        <Link className={styles.button} href={`/posts/${post.id}`}>
          Leia Agora
        </Link>
      </div>
    </article>
  );
}
