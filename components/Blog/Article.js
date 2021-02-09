import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";

import { useState, useEffect } from "react";

import styled from "styled-components";

import useAppContext from "@hooks/useAppContext";

export default function Editor({ data }) {
  const [theEditor, theEditorChange] = useState(null);

  const {
    state: { theScroll },
  } = useAppContext();

  useEffect(() => {
    if (!theEditor) {
      const editor = new EditorJS({
        holder: "editorjs",
        data,
        readOnly: true,
        minHeight: 0,
        tools: {
          header: {
            class: Header,
          },
          list: {
            class: List,
          },
          image: { class: ImageTool },
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
      <EditorWrapper id="editorjs" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 640px;
  margin: auto;
  margin-bottom: 24px;
`;

const EditorWrapper = styled.div`
  max-width: 640px;
  margin: auto;
  padding: 20px 40px;
  border-radius: 7px;
  margin-bottom: 24px;
  & h2 {
    font-size: 28px;
  }
  & h3 {
    font-size: 20px;
  }
  & div {
    line-height: 32px;
  }
`;
