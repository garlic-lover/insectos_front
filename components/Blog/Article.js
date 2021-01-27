import EditorJS from "@editorjs/editorjs";

import { useState, useEffect } from "react";

import styled from "styled-components";

export default function Editor({ data }) {
  const [theEditor, theEditorChange] = useState(null);

  useEffect(() => {
    if (!theEditor) {
      const editor = new EditorJS({
        holder: "editorjs",
        data,
        readOnly: true,
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

const EditorWrapper = styled.div`
  max-width: 640px;
  margin: auto;
  padding: 20px 40px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 24px;
`;
