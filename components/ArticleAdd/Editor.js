import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

import { useState, useEffect } from "react";

import styled from "styled-components";

export default function Editor() {
  const [theEditor, theEditorChange] = useState(null);

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
      <EditorWrapper id="editorjs" />
      <button
        onClick={() => {
          theEditor
            .save()
            .then((outputData) => {
              console.log("Article data: ", outputData);
            })
            .catch((error) => {
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
