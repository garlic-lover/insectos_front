import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

import styled from "styled-components";

import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import BLOG_ARTICLE_ADD from "@GraphQl/Mutations/BLOG_ARTICLE_ADD";

export default function Editor() {
  const [title, titleChange] = useState("");
  const [shortDescription, shortDescriptionChange] = useState("");
  const [theEditor, theEditorChange] = useState(null);

  const [blogArticleAdd] = useMutation(BLOG_ARTICLE_ADD, {
    onCompleted: ({ blogArticleAdd }) => {
      if (blogArticleAdd) {
        alert("Success");
        titleChange("");
        shortDescriptionChange("");
        theEditor.clear();
      } else {
        alert("Fail");
      }
    },
  });

  useEffect(() => {
    if (!theEditor) {
      const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "Let`s write an awesome article!",
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
        },
      });
      theEditorChange(editor);
    }
  }, [theEditor]);

  return (
    <Wrapper>
      <TitleWrapper>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(ev) => {
            titleChange(ev.target.value);
          }}
        />
        <textarea
          placeholder="Descripcion"
          value={shortDescription}
          onChange={(ev) => {
            shortDescriptionChange(ev.target.value);
          }}
        />
      </TitleWrapper>
      <EditorWrapper id="editorjs" />
      <button
        onClick={() => {
          theEditor
            .save()
            .then((outputData) => {
              blogArticleAdd({
                variables: {
                  blogArticle: { title, shortDescription, data: outputData },
                },
              });
            })
            .catch((error) => {
              alert(
                "Problem with the operation : try to refresh the page. If it still doesn't work, contact the developper."
              );
              console.log("Saving failed: ", error);
            });
        }}
      >
        Validate
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 640px;
  margin: auto;
  margin-bottom: 24px;
  max-height: 400px;
  & h2 {
    font-size: 28px;
  }
  & h2 {
    font-size: 20px;
  }
  & button {
    position: relative;
    left: 100%;
    transform: translateX(-100%);
    margin-bottom: 24px;
  }
`;

const TitleWrapper = styled.div`
  & input,
  & textarea {
    display: block;
    margin-bottom: 16px;
    width: calc(100% - 24px);
  }
`;

const EditorWrapper = styled.div`
  max-width: 640px;
  margin: auto;
  padding: 20px 40px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 24px;
`;
