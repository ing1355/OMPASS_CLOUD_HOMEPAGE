import React from "react";
import $ from "jquery";

import "../../../css/Document.module.css";
import Document from "../../../components/Document";
import Start from "../../../components/Document/start";
import AuthNtoken1 from "../../../components/Document/authN-token-1";
import AuthNtoken2 from "../../../components/Document/authN-token-2";
import Error from "../../../components/Document/error";
import Uaf from "../../../components/Document/uaf";
import Uafprocess from "../../../components/Document/uaf-process";
import Uafompass from "../../../components/Document/uaf-ompass";
import Uafpopup from "../../../components/Document/uaf-popup";
import Uafloginbutton from "../../../components/Document/uaf-loginbutton";

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

function restapiuaf(props) {
  const { t, isKr } = useTranslation();

  const start2 = true;

  return (
    <div className="document RestAPIbox">
      <ul className="documentLeft">
        <Document start2={start2} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div className="main rest-api">
                <div className="code">
                  <h4>▶ UAF</h4>
                  <div className="pdf-download">
                    <a href={isKr ? "/static/pdf/REST API_UAF.pdf" : "/static/pdf/REST API_UAF_eng.pdf"} download>
                      <DownloadOutlined /> &nbsp; {t("PDF 다운받기")}
                    </a>
                  </div>
                  <Uaf />

                  <Start />

                  <Uafprocess />

                  <Uafloginbutton />

                  <Uafompass />

                  <Uafpopup />

                  <AuthNtoken1 />

                  <AuthNtoken2 />

                  <Error />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </ul>

      <div className="popbox">
        <h3
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          UAF
        </h3>
        <p
          onClick={() => {
            var offset = $(".1st").offset();
            $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
          }}
        >
          {t("UAF 란?")}
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
          {t("UAF 로그인 버튼 추가하기")}
        </p>
        <p
          onClick={() => {
            var offset = $(".5st").offset();
            $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
          }}
        >
          OMPASS-UAF
        </p>
        <p
          onClick={() => {
            var offset = $(".6st").offset();
            $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
          }}
        >
          {t("OMPASS UAF 인증")}
        </p>

        <p
          onClick={() => {
            var offset = $(".7st").offset();
            $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
          }}
        >
          {t("인증 토큰 받기")}
        </p>
        <p
          onClick={() => {
            var offset = $(".8st").offset();
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
    </div>
  );
}
export default restapiuaf;
