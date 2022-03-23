import React from "react";

import "../../../css/Document.module.css";
import Document from "../../../components/Document";
import Start from "../../../components/Document/start";
import Ompassprocess from "../../../components/Document/ompass-process";
import Ompass from "../../../components/Document/ompass";
import Ompasspopup from "../../../components/Document/ompass-popup";
import AuthNtoken1 from "../../../components/Document/authN-token-1";
import AuthNtoken2 from "../../../components/Document/authN-token-2";
import Error from "../../../components/Document/error";
import U2f from "../../../components/Document/u2f";
import $ from "jquery";

import { DownloadOutlined } from "@ant-design/icons";

import "bootstrap/dist/css/bootstrap.min.css";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from "../../../next-i18next.config";

const getPathSlugs = () => {
  return i18nextConfig.i18n.locales.map((locale) => ({
    params: {
      locale,
    },
  }));
};

export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();
  return {
    paths: pathsWithLocale,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}

function restapi(props) {
  const { t, isKr } = useTranslation();

  const start = true;

  return (
    <div className="document RestAPIbox">
      <ul className="documentLeft">
        <Document start={start} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div className="main rest-api">
                <div className="code">
                  <h4>▶ U2F</h4>
                  <div className="pdf-download">
                    <a
                      href={
                        isKr
                          ? "/static/pdf/REST API_U2F.pdf"
                          : "/static/pdf/REST API_U2F_eng.pdf"
                      }
                      download
                    >
                      <DownloadOutlined /> &nbsp; {t("PDF 다운받기")}
                    </a>
                  </div>

                  <U2f />

                  <Start />

                  <Ompassprocess />

                  <Ompass />

                  <Ompasspopup />

                  <AuthNtoken1 />

                  <AuthNtoken2 />

                  <Error />
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="popbox">
          <h3
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            U2F
          </h3>
          <p
            onClick={() => {
              var offset = $(".1st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            {t("U2F 란?")}
          </p>
          <p
            onClick={() => {
              var offset = $(".2st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            {t("준비 사항")}
          </p>
          <p
            onClick={() => {
              var offset = $(".3st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            {t("OMPASS 적용 프로세스")}
          </p>
          <p
            onClick={() => {
              var offset = $(".4st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            OMPASS-U2F
          </p>
          <p
            onClick={() => {
              var offset = $(".5st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            {t("OMPASS 등록 및 U2F 인증")}
          </p>

          <p
            onClick={() => {
              var offset = $(".6st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            {t("인증 토큰 받기")}
          </p>
          <p
            onClick={() => {
              var offset = $(".77st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            {t("인증 토큰 검증")}
          </p>
          <p
            onClick={() => {
              var offset = $(".9st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            {t("API 에러 메시지")}
          </p>
        </div>
      </ul>
    </div>
  );
}
export default restapi;
