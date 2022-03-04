import React from "react";
import "../../css/Cloud_Title.module.css";
import "../../css/Cloud_Contents.module.css";
import Contents from "./Main_Contents";
import LinkComponent from "../Link";
import useTranslation from "../../lib/useTranslation";

function Main(props) {
  const { t, isKr } = useTranslation();
  return (
    <header>
      <div className="cloudHeader">
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
              <h1>{t("원모어패스 - 클라우드형")}</h1>
              <h5>{t("차세대 통합 인증 솔루션(FIDO 인증)")}</h5>
              <p>
                {t("원모어패스는 FIDO를 기반으로 하는 인증 플랫폼 입니다.")}
              </p>
              <div className="button">
                <LinkComponent href="/login">
                  <span>{t("체험하기")}</span>
                </LinkComponent>
                <a
                  href={
                    isKr
                      ? "/static/pdf/원모어패스 클라우드형 브로셔.pdf"
                      : "/static/pdf/OMPASS_Cloud_Brochure.pdf"
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
export default Main;
