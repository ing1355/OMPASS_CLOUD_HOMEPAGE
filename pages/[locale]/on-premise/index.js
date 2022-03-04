import React from "react";
import "../../../css/Build_Title.module.css";
import "../../../css/Main.module.css";
import Contents from "../../../components/on-premise/Contents";
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

function onpremise() {
  const { t, isKr } = useTranslation();
  return (
    <header>
      <div className="buildHeader">
        <div className="MainBgBox"></div>
        <div className="MainTitle">
          <ul>
            <li>
              <img
                className="OmpassSolutionBox title-img-pc"
                src={
                  isKr
                    ? "/static/images/TitleImg_Kor.png"
                    : "/static/images/TitleImg_Eng.png"
                }
                alt="원모어패스 타이틀 이미지 - PC"
              />
              <img
                className="OmpassSolutionBox title-img-mobile"
                src={
                  isKr
                    ? "/static/images/mobile_TitleImg.png"
                    : "/static/images/mobile_TitleImg_Eng.png"
                }
                alt="원모어패스 타이틀 이미지 - 모바일"
              />
            </li>
          </ul>
          <ul>
            <li>
              <h1>{t("원모어패스 - 구축형")}</h1>
              <h5>{t("차세대 통합 인증 솔루션(FIDO 인증)")}</h5>
              <p>
                {t("원모어패스는 FIDO를 기반으로 하는 인증 플랫폼 입니다.")}
              </p>
              <div className="button">
                <a
                  href={
                    isKr
                      ? "/static/pdf/원모어패스 구축형 브로셔.pdf"
                      : "/static/pdf/OMPASS_OnPremise_Brochure.pdf"
                  }
                  download
                >
                  <span>{t("브로셔 다운")}</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Contents />
    </header>
  );
}
export default onpremise;
