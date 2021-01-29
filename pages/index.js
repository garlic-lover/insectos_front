import Head from "next/head";
import useTranslate from "../hooks/useTranslate";

import Container from "../components/Landing/Container";

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
        <title>{t("homeTitle")}</title>
      </Head>
      <Container t={t} />
    </>
  );
}
