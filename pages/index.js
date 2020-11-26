import Head from "next/head";
import useTranslate from "../hooks/useTranslate";

import styled from "styled-components";

export default function Home() {
  const { t } = useTranslate();

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()`,
          }}
        />
      </Head>
      <Container>
        <p>{t("test")}</p>
        <p>{t("wantToJoin")}</p>
        <a
          href="https://form.typeform.com/to/olQfPm98"
          data-mode="drawer_right"
          target="_blank"
        >
          Contact us
        </a>
      </Container>
    </>
  );
}

const Container = styled.div`
  & p {
    line-height: 2rem;
  }
  & a {
    text-decoration: inherit;
    color: inherit;
    background-color: lightGrey;
    padding: 6px 12px;
    border-radius: 50px;
    font-size: 12px;
  }
`;
