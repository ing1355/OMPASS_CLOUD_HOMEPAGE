import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from 'next/script'
import Footer from "../components/Footer";
import NavbarTop from "../components/NavbarTop";
import useTranslation from "../lib/useTranslation";
import languageDetector from "../lib/languageDetector";
import "prismjs/themes/prism-tomorrow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../css/Global.css'
import { usePathname } from "next/navigation";

function App(props) {
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);
  const { Component, pageProps, router } = props;
  const { query } = router;
  const pathname = usePathname()
  const isAdminLogin = pathname.split('/').filter(_ => _).slice(-1,)[0] === 'adminLogin'
  
  useEffect(() => {
    document.documentElement.setAttribute(
      "lang",
      query.locale || languageDetector.detect()
    );
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/static/images/favicon.ico" />
        <meta charSet="utf-8" />
        <title>{t("원모어패스 클라우드")}</title>
        <meta name="description" content="원모어패스 클라우드 서비스입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="원모어패스 클라우드" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/images/background.jpg" />
        <meta
          property="og:description"
          content="FIDO를 기반으로 하는 원모어패스 클라우드 서비스입니다."
        ></meta>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C9RFV6ZHHH"
        ></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          // eslint-disable-next-line
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-C9RFV6ZHHH", {
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_title: window.document.title,
          });`}
        </Script>
      </Head>

      {
        isAdminLogin ? <Component {...pageProps} /> : <Layout>
          <NavbarTop />
          <Component {...pageProps} isChecked={isChecked} setIsChecked={setIsChecked} />
          <Footer />
        </Layout>
      }
    </>
  );
}

export default App;
