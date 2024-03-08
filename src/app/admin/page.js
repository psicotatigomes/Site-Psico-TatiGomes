"use client";
import React, { useState } from "react";
import { fetchPosts } from "@/app/lib/data";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const EditorComponent = (props) => {
  return <Editor {...props} />;
};

export default function Admin() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const rawContentState = convertToRaw(editorState.getCurrentContent());

  const hashtagConfig = {
    trigger: "#",
    separator: " ",
  };

  const directional = true;

  const markup = draftToHtml(rawContentState, hashtagConfig, directional);

  console.log(markup);

  const saveArticle = () => {
    fetch("/admin/api");
    console.log("saveArticle");
  };

  return (
    <section>
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
