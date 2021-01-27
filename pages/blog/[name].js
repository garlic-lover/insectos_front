import styled from `styled-components`;

import dynamic from "next/dynamic";

const Article = dynamic(() => import("../components/Blog/Article"), {
  ssr: false,
});

export default function ({article}){
return <Wrapper><Article data={article}/></Wrapper>
};

const Wrapper = styled.div``;

export async function getStaticPaths() {
    return {
      paths: [{ params: { name: "first-article" } }],
      fallback: true,
    };
  }
  
  export async function getStaticProps(params) {
    // Use the url in the name to get the JSON from AWS
    let name = params.params.name;
 
    return {
      props: { article: "" },
    };
  }
  