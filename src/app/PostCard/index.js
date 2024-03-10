"use client";
import Image from "next/image";

export default function PostCard({ post }) {
  const parser = new DOMParser();
  console.log(post.content_html);
  console.log(parser.parseFromString(post.content_html, "text/html"));
  return (
    <article key={post.id}>
      <div className="post__cover">
        <Image
          src={post.cover_image_url}
          alt="Post's cover"
          width={290}
          height={320}
        />
      </div>
      <div className="post__title">
        <p>{post.title}</p>
        {/* <small className="post__date">{post.updated_at}</small> */}
      </div>
      <div className="post_body">
        {parser.parseFromString(post.content_html, "text/html").embeds}
      </div>
      <div className="post__footer">
        <button>Leia Agora</button>
      </div>
    </article>
  );
}
