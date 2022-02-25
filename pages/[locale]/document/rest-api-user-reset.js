import React from "react";

import "../../../css/Document.module.css";
import Document from "../../../components/Document";
import $ from "jquery";

import Userrest from "../../../components/Document/user-rest";
import Userresetompass from "../../../components/Document/user-reset-ompass";

import { DownloadOutlined } from "@ant-design/icons";

import "bootstrap/dist/css/bootstrap.min.css";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from '../../../next-i18next.config';

const getPathSlugs = () => {
  return i18nextConfig.i18n.locales.map(locale => ({
    params: {
      locale
    }
  }))
}

export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();
  return {
    paths: pathsWithLocale,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  return {
    props: {
      ...params
    }
  }
}

function restapiuserreset(props) {
  const { t, isKr } = useTranslation();

  return (
    <div className="document RestAPIbox">
      <ul className="documentLeft">
        <Document reset={true} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div className="main rest-api">
                <div className="code">
                  <h4>▶ {t("OMPASS 등록 초기화")}</h4>
                  <div className="pdf-download">
                    <a
                      href={isKr ? "/static/pdf/REST_API_OMPASS 등록 초기화.pdf" : "/static/pdf/REST_API_Initializing OMPASS registration.pdf"}
                      download
                    >
                      <DownloadOutlined /> &nbsp; {t("PDF 다운받기")}
                    </a>
                  </div>
                  <Userrest />

                  <Userresetompass />
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
            {t("OMPASS 등록 초기화")}
          </h3>
          <p
            onClick={() => {
              var offset = $(".1st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            {t("OMPASS 등록 초기화란?")}
          </p>
          <p
            onClick={() => {
              var offset = $(".2st").offset();
              $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
            }}
          >
            {t("OMPASS 등록 초기화 API")}
          </p>
        </div>
      </ul>
    </div>
  );
}
export default restapiuserreset;
