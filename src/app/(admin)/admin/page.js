"use client";
import React, { useState, useRef } from "react";
import draftToHtml from "draftjs-to-html";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import styles from "./styles.module.scss";
import EditorComponent from "../../components/Editor/Editor";
import useSWR from "swr";
import Image from "next/image";
import {
  Container,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  VStack,
  StackDivider,
  Button,
  Box,
  HStack,
  Flex,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import htmlToDraft from "html-to-draftjs";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Admin() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [articleTitle, setArticleTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setData] = useState(null);
  const [currPost, setCurrPost] = useState(null);

  const { data, error, isLoading } = useSWR("/admin/api", fetcher);

  if (isLoading) return;

  const saveArticle = async () => {
    setLoading(true);
    const hashtagConfig = {
      trigger: "#",
      separator: " ",
    };
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState, hashtagConfig);

    if (isEditing) {
      await fetch("/admin/api", {
        method: "PUT",
        body: JSON.stringify({
          postId: currPost.id,
          title: articleTitle,
          content_html: markup,
          cover_image_url: image,
        }),
      });
    } else {
      if (!inputFileRef.current?.files) {
        // throw new Error("No file selected");
        await fetch("/admin/api", {
          method: "POST",
          body: JSON.stringify({
            title: articleTitle,
            content_html: markup,
            cover_image_url:
              "https://3bvumfbbwowg9jwd.public.blob.vercel-storage.com/fallback-post-CBtP39JmNeQaWL0qAaLEN52xrmgv2w.png",
          }),
        });
      }

      const file = inputFileRef.current.files[0];

      const blob = await fetch(`/admin/api/images/?filename=${file?.name}`, {
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
    }

    setEditorState(EditorState.createEmpty());
    setArticleTitle("");
    setData(null);
    setFile(null);
    inputFileRef.current.value = "";
    setLoading(false);
  };

  const editPost = async (postId) => {
    setIsEditing(true);
    var post = data.rows.find((post) => post.id == postId);
    setCurrPost(post);
    setData(null);
    setEditLoading(true);

    const blocksFromHtml = htmlToDraft(post.content_html);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap,
    );
    const editorState = EditorState.createWithContent(contentState);

    setEditorState(editorState);
    setArticleTitle(post.title);

    const response = await fetch(
      `/admin/api/images/?imageURL=${post.cover_image_url}`,
    );

    const postImage = await response.json();
    setEditLoading(false);
    setData(postImage.url);
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

  const removeImage = () => {
    setFile(null);
    setData(null);
    inputFileRef.current.value = "";
  };

  const deletePost = async (postId) => {
    var post = data.rows.find((post) => post.id == postId);

    await fetch("/admin/api", {
      method: "DELETE",
      body: JSON.stringify({ postId: post.id }),
    });
  };

  return (
    <>
      <Flex justifyContent="space-evenly">
        <Box maxWidth="1900">
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
                Esse é o título que vai aparecer na página principal e no topo
                da página do artigo
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

          {editLoading && (
            <CircularProgress isIndeterminate color="green.300" />
          )}
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

          <Button isLoading={loading} onClick={saveArticle} colorScheme="blue">
            Salvar artigo
          </Button>
        </Box>
        <Box>
          <Heading as="h2">LISTA DE POSTS</Heading>

          <VStack
            divider={<StackDivider borderColor="gray.200" alignItems="start" />}
          >
            {data.rows.map((post) => {
              return (
                <HStack
                  key={post.id}
                  width="100%"
                  justifyContent="space-between"
                >
                  <Text>{post.title}</Text>
                  <Box flexDirection="column" justifyContent="end">
                    <Button
                      size="sm"
                      colorScheme="blue"
                      onClick={() => editPost(post.id)}
                    >
                      Editar
                    </Button>

                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={() => deletePost(post.id)}
                    >
                      Deletar
                    </Button>
                  </Box>
                </HStack>
              );
            })}
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
