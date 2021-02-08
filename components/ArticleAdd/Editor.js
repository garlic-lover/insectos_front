import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";

import styled from "styled-components";

import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import BLOG_ARTICLE_ADD from "@GraphQl/Mutations/BLOG_ARTICLE_ADD";

import useAppContext from "@hooks/useAppContext";

export default function Editor() {
  const [title, titleChange] = useState("");
  const [shortDescription, shortDescriptionChange] = useState("");
  const [authorName, authorNameChange] = useState("");
  const [lang, langChange] = useState("es");
  const [theEditor, theEditorChange] = useState(null);

  const [blogArticleAdd] = useMutation(BLOG_ARTICLE_ADD, {
    onCompleted: ({ blogArticleAdd }) => {
      if (blogArticleAdd) {
        alert("Success");
        titleChange("");
        shortDescriptionChange("");
        authorNameChange("");
        theEditor.clear();
      } else {
        alert("Fail");
      }
    },
  });

  const {
    state: { theScroll },
  } = useAppContext();

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
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: `/api/imageUpload`,
              },
            },
          },
        },
        onReady: () => {
          theScroll.update();
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
          placeholder="Descripción"
          value={shortDescription}
          onChange={(ev) => {
            shortDescriptionChange(ev.target.value);
          }}
        />
        <input
          placeholder="Autor"
          value={authorName}
          onChange={(ev) => {
            authorNameChange(ev.target.value);
          }}
        />
        <h3>Idioma</h3>
        <select
          value={lang}
          onChange={(ev) => {
            langChange(ev.target.value);
          }}
        >
          <option>es</option>
          <option>fr</option>
          <option>en</option>
        </select>
      </TitleWrapper>
      <EditorWrapper id="editorjs" />
      <button
        onClick={() => {
          theEditor
            .save()
            .then((outputData) => {
              blogArticleAdd({
                variables: {
                  blogArticle: {
                    title,
                    shortDescription,
                    authorName,
                    lang,
                    data: outputData,
                  },
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
  & button {
    position: relative;
    left: 100%;
    transform: translateX(-100%);
    margin-bottom: 24px;
  }
  & select {
    margin-top: 12px;
    margin-bottom: 12px;
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
  & h2 {
    font-size: 28px;
  }
  & h3 {
    font-size: 20px;
  }
`;
