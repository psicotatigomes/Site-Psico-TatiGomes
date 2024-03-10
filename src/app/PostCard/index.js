"use client";
import Image from "next/image";
import ImageWithFallback from "../Components/ImageWithFallback";
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
      <div className={styles.article__header}>
        <p>{post.title}</p>
        {/* <small className="article__date">{post.updated_at}</small> */}
      </div>
      <div
        className={styles.article__body}
        dangerouslySetInnerHTML={parseStringToHtml(post.content_html)}
      />
      <div className={styles.article__footer}>
        <button>Leia Agora</button>
      </div>
    </article>
  );
}
