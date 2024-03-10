"use client";
import React, { useState } from "react";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { EditorState } from "draft-js";
import styles from "./styles.module.scss";
import EditorComponent from "../Editor/Editor";

export default function Admin() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const rawContentState = convertToRaw(editorState.getCurrentContent());

  const hashtagConfig = {
    trigger: "#",
    separator: " ",
  };

  const directional = true;

  const markup = draftToHtml(rawContentState, hashtagConfig, directional);

  const saveArticle = () => {
    fetch("/admin/api", {
      method: "POST",
      body: JSON.stringify({
        title: "Título",
        content_html: markup,
        cover_image_url: "/url/from/s3",
      }),
    });
  };

  return (
    <section className={styles.container}>
      <h1>ADMIN PAGE</h1>

      <label htmlFor="article-title">
        Título
        <input
          name="article-title"
          id="article-title"
          type="text"
          value={"articleTitle"}
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
      />

      <button onClick={saveArticle}>Salvar</button>
    </section>
  );
}
