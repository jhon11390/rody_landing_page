import React, { Fragment } from "react";
import Header from "./Header";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { MY_SEO } from '../../../request/settings'

const Content = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 90px);
  overflow: hidden;
  @media (max-width: 576px) {
    height: calc(100vh - 60px);
  }
`;

const Main = styled.main`
  width: 100%;
  padding-bottom: 0;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--morado4);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: var(--morado4);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--morado2);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track:hover,
  ::-webkit-scrollbar-track:active {
    background: #d4d4d4;
  }
`;

const Layout = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --color1: #824c9a; /* morado */
            --morado2: #300047; /* morado oscuro*/
            --morado3: #6b326d; /* morado intermedio*/
            --morado4: #6c537e; /* morado claro*/
            --color2: #f04732; /* rojo */
            --color3: #4f8c68; /* verde */
            --color4: #d3d223; /* verde claro */
            --color5: #4cc1c5; /* agua marina */
            --color_font: #311d44;
            --white: #ffffff;
            --black: #303030;
            --gray: #24292e;
            --gray2: #e9eaed;
            --azul: #075ea4;
            --azul2: #1e90ff;
            --naranja: #bf5022;
            --vote1: rgb(65, 173, 179); /* azul */
            --vote2: rgb(106, 178, 53); /* verde */
            --vote3: rgb(140, 79, 151); /* morado */
            --vote4: rgb(206, 206, 36); /* amarillo */
            --vote5: rgb(255, 143, 0); /* naranja */
            --vote6: rgb(248, 65, 43); /* rojo */
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
            background-color: var(--white);
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
            color: var(----color_font);
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
            font-weight: 700;
          }
          h3 {
            font-family: "PT Sans", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
          }
          img {
            max-width: 100%;
          }
          span {
            font-size: 1.2rem;
          }
          .breadcrumb-item + .breadcrumb-item::before {
            color: white;
          }
        `}
      ></Global>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="content-language" content="es"></meta>
        <title key="title">{MY_SEO.title}</title>
        <meta
          key="description"
          name="description"
          content={MY_SEO.description}
        />
        <meta key="og:type" name="og:type" content={MY_SEO.openGraph.type} />
        <meta key="og:title" name="og:title" content={MY_SEO.openGraph.title} />
        <meta
          key="og:description"
          name="og:description"
          content={MY_SEO.openGraph.description}
        />
        <meta key="og:url" name="og:url" content={MY_SEO.openGraph.url} />
        <meta key="og:image" name="og:image" content={MY_SEO.openGraph.image} />
        <meta name="verify-admitad" content="ad11c4b00d" />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SMXHSXDYQ3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SMXHSXDYQ3');
            `,
          }}
        />
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-LP97QYK51Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-LP97QYK51Z');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-113828486-6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag(‘js’, new Date())
            gtag(‘config’, ‘UA-113828486-6’)
            `,
          }}
        /> */}

        <script
          src="https://cdn.by.wonderpush.com/sdk/1.1/wonderpush-loader.min.js"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.WonderPush = window.WonderPush || [];
              WonderPush.push([“init”, {
                  webKey: “a26bf01f53857d19b4e9d9bfcb4f804da0ba6ac5492070c078e9da319c4fa82c”,
              }]);
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#300047" />
      </Head>
      <Header />
      <Content>
        <Main>{props.children}</Main>
      </Content>
    </Fragment>
  );
};

export default Layout;