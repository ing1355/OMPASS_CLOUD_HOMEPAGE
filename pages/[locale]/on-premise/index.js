import React from "react";
import "../../../css/Build_Title.module.css";
import "../../../css/Main.module.css";
import Contents from "../../../components/on-premise/Contents";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from "../../../next-i18next.config";
import { DownloadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

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

function onpremise() {
  const { t, isKr } = useTranslation();
  return (
    <header>
      <div className="buildHeader">
        <div className="MainBgBox"></div>
        <div className="MainTitle">
          <ul>
            <li>
              <h1>
                {t("원모어패스 - 구축형")}
                <br />
                {t("차세대 통합 인증 솔루션(FIDO 인증)")}
              </h1>

              <p className="title-p">
                {t("원모어패스는 FIDO를 기반으로 하는 인증 플랫폼 입니다.")}
              </p>
            </li>
            <li className="Certification-img-li">
              <div>
                {isKr ? (
                  <img src={"/static/images/Certification.png"} />
                ) : (
                  <img src={"/static/images/Certification_eng.png"} />
                )}
              </div>
            </li>

            <li className="Certification-img-li-mobile">
              <div>
                {isKr ? (
                  <img src={"/static/images/Certification_mobile.png"} />
                ) : (
                  <img src={"/static/images/Certification_eng_mobile.png"} />
                )}
              </div>
            </li>
            <li className="button-li">
              <a
                href={
                  isKr
                    ? "/static/pdf/원모어패스 구축형 브로셔.pdf"
                    : "/static/pdf/OMPASS_OnPremise_Brochure.pdf"
                }
                download
              >
                <DownloadOutlined /> &nbsp;&nbsp; <p>{t("브로셔 다운")}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Contents />
    </header>
  );
}
export default onpremise;
