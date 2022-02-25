import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import "prismjs/themes/prism-tomorrow.css";
import Footer from "../components/Footer";
import NavbarTop from "../components/NavbarTop";
import useTranslation from "../lib/useTranslation";
import languageDetector from "../lib/languageDetector";

function App(props) {
  const { t } = useTranslation();
  const { Component, pageProps } = props;

  useEffect(() => {
    document.documentElement.setAttribute('lang', languageDetector.detect())
  },[])

  return (
    <>
      <Head>
        <link rel="icon" href="/static/images/logo.png" />
        <meta charSet="utf-8" />
        <title>{t("원모어패스 클라우드")}</title>
        <meta name="description" content="원모어패스 클라우드 서비스입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Pretendard-Regular";
          }
          @font-face {
            font-family: "Pretendard-Regular";
            src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
              format("woff");
            font-weight: 400;
            font-style: normal;
          }
          body {
            margin: 0 auto !important;
            background-color: #dae1e6 !important;
            width: 100% !important;
            overflow: auto !important;
          }
          ul,
          li {
            margin-bottom: 0;
            padding-left: 0;
            list-style: none;
          }
        `}
      </style>

        <Layout>
          <NavbarTop />
          <Component {...pageProps} />
          <Footer />
        </Layout>
    </>
  );
}

export default App;
