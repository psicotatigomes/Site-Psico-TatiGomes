"use client";
import React, { useState, useRef } from "react";
import draftToHtml from "draftjs-to-html";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import styles from "./styles.module.scss";
import EditorComponent from "../Components/Editor/Editor";
import useSWR from "swr";
import Image from "next/image";

import htmlToDraft from "html-to-draftjs";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Admin() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [articleTitle, setArticleTitle] = useState("");
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setData] = useState(null);

  const { data, error, isLoading } = useSWR("/admin/api", fetcher);

  if (isLoading) return;

  const saveArticle = async () => {
    const hashtagConfig = {
      trigger: "#",
      separator: " ",
    };
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState, hashtagConfig);

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const blob = await fetch(`/admin/api/images/?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    const blobRes = await blob.json();

    await fetch("/admin/api", {
      method: "POST",
      body: JSON.stringify({
        title: articleTitle,
        content_html: markup,
        cover_image_url: blobRes.url,
      }),
    });

    setBlob(blobRes);
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
    setArticleTitle(post.title);
  };

  const onImgInsertion = (event) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    if (file) {
      if (file.size / 1024 / 1024 > 50) {
        console.error("File size too big (max 50MB)");
      } else {
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setData(e.target?.result);
        };
        reader.readAsDataURL(file);
      }
    }
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

        <input
          name="file"
          ref={inputFileRef}
          onChange={onImgInsertion}
          type="file"
          required
        />
        <p>preview</p>
        {image && <Image img src={image} alt="" width={400} height={250} />}

        <EditorComponent
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbar={{ fontFamily: { inDropdown: false } }}
        />

        <button onClick={saveArticle}>Salvar artigo</button>
      </section>
      <section className={styles.container}>
        <h2>List de posts</h2>
        <ul>
          {data.rows.map((post) => {
            return (
              <li key={post.id}>
                {post.title}
                <button onClick={() => editPost(post.id)}>editar</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
