"use client";
import React, { useState, useRef } from "react";
import draftToHtml from "draftjs-to-html";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import styles from "./styles.module.scss";
import EditorComponent from "../Components/Editor/Editor";
import useSWR from "swr";
import Image from "next/image";
import {
  Container,
  Heading,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  StackDivider,
  Button,
} from "@chakra-ui/react";

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
        console.log(file);
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setData(e.target?.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removeImage = () => {
    setFile(null);
    setData(null);
  };

  return (
    <>
      <Container maxW="2xl" centerContent>
        <Heading as="h1">ADMIN PAGE</Heading>

        <VStack
          align="start"
          spacing={5}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <FormControl>
            <FormLabel>Título do artigo</FormLabel>
            <Input
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              placeholder="Insira aqui o título"
              size="md"
              name="article-title"
              id="article-title"
              type="text"
            />
            <FormHelperText>
              Esse é o título que vai aparecer na página principal e no topo da
              página do artigo
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Imagem de capa</FormLabel>

            <Input
              onChange={onImgInsertion}
              placeholder="Insira aqui o título"
              size="md"
              id="article-title"
              name="file"
              ref={inputFileRef}
              type="file"
            />

            <FormHelperText>
              O uso de imagem em paisagem -"deitada"- é recomendado.
            </FormHelperText>
          </FormControl>
        </VStack>

        {image && (
          <>
            <Image
              src={image}
              alt="Imagem que será usada de capa para o artigo do blog"
              width={400}
              height={250}
              style={{ objectFit: "fill", aspectRatio: "16/9" }}
            />
            <Button
              onClick={removeImage}
              colorScheme="red"
              size="sm"
              variant="ghost"
            >
              Remover imagem
            </Button>
          </>
        )}

        <EditorComponent
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbar={{ fontFamily: { inDropdown: false } }}
        />

        <Button onClick={saveArticle} colorScheme="blue">
          Salvar artigo
        </Button>
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
      </Container>
    </>
  );
}
