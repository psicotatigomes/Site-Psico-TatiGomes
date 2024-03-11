"use client";
import React, { useState } from "react";
import draftToHtml from "draftjs-to-html";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import styles from "./styles.module.scss";
import EditorComponent from "../Components/Editor/Editor";
import useSWR from "swr";
import htmlToDraft from "html-to-draftjs";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Admin() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [articleTitle, setArticleTitle] = useState("");

  const { data, error, isLoading } = useSWR("/admin/api", fetcher);

  if (isLoading) return;
  console.log("DATA", data.rows);

  const hashtagConfig = {
    trigger: "#",
    separator: " ",
  };

  const saveArticle = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const directional = true;
    const markup = draftToHtml(rawContentState, hashtagConfig, directional);

    fetch("/admin/api", {
      method: "POST",
      body: JSON.stringify({
        title: "Título",
        content_html: markup,
        cover_image_url: undefined,
      }),
    });
  };

  const editPost = (postId) => {
    var post = data.rows.find((post) => post.id == postId);

    const blocksFromHtml = htmlToDraft(post.content_html);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap,
    );
    const editorState = EditorState.createWithContent(contentState);
    setEditorState(editorState);
  };

  return (
    <>
      <section className={styles.container}>
        <h1>ADMIN PAGE</h1>

        <label htmlFor="article-title">
          Título
          <input
            name="article-title"
            id="article-title"
            type="text"
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
            placeholder="Título do artigo"
          />
        </label>

        <label htmlFor="cover-image">
          Imagem de capa
          <input
            type="file"
            name="article-cover"
            id="article-cover"
            placeholder="Escolher imagem"
          />
        </label>

        <EditorComponent
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbar={{ fontFamily: { inDropdown: false } }}
        />

        <button onClick={saveArticle}>Salvar</button>
      </section>
      <section className={styles.container}>
        <h2>List de posts</h2>
        <ul>
          {data.rows.map((post) => {
            return (
              <li key={post.id}>
                {post.title}{" "}
                <button onClick={() => editPost(post.id)}>editar</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
