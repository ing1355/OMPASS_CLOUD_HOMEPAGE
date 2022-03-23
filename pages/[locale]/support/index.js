import React from "react";
import "../../../css/Support.module.css";
import useTranslation from "../../../lib/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LinkComponent from "../../../components/Link";
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

function support() {
  const { t, isKr } = useTranslation();
  return (
    <div className="supportBox">
      <div className="supportTtileBox">
        <h2>Support</h2>
      </div>
      <div className="supportContents1">
        <ul className="support-admin">
          <h1>{t("관리자 매뉴얼")}</h1>
          <p>{t("원모어패스를 사용하는 관리자 매뉴얼입니다.")}</p>
          <br />
          <br /> <br />
          <LinkComponent href="/document/u2f-uaf" style={{ color: "#fff" }}>
            {t("관리자 매뉴얼 이동")}
          </LinkComponent>
        </ul>
      </div>

      <div className="supportContents2">
        <div className="supportContents2Box">
          <ul>
            <h1>{t("모바일 앱")}</h1>
            <p>{t("원모어패스는 FIDO를 기반으로 하는 인증 플랫폼 입니다.")}</p>
            <p>{t("1. PKI 기반의 높은 보안성")}</p>
            <p className="support-en">{t("1. PKI 기반의 높은 보안성-eng")}</p>
            <p>{t("2. 패스워드가 없는 사용자 편의성을 추구")}</p>
            <p>{t("3. 사용자 선택형 인증 방식을 제공")}</p>

            <div className="support-qr">
              <div>
                <img
                  className="qrimg"
                  src={"/static/images/QR_android.png"}
                  alt="안드로이드 앱 QR코드"
                />
                <a
                  href="https://play.google.com/store/apps/details?id=kr.omsecurity.ompass"
                  target="_blank"
                  className="app-down-link-button"
                >
                  <img
                    className="app-img"
                    src={"/static/images/googleplay.png"}
                  />
                  &nbsp; Google Play
                </a>
              </div>

              <div>
                <img
                  className="qrimg"
                  src={"/static/images/QR_ios.png"}
                  alt="iOS 앱 QR코드"
                />
                <a
                  href="https://apps.apple.com/kr/app/%EC%9B%90%EB%AA%A8%EC%96%B4%ED%8C%A8%EC%8A%A4-ompass/id1547587526"
                  target="_blank"
                  className="app-down-link-button"
                >
                  <img
                    className="app-img"
                    src={"/static/images/appstore.png"}
                  />
                  &nbsp; App Store
                </a>
              </div>
            </div>
          </ul>
          <ul>
            <div>
              <img
                src={
                  isKr
                    ? "/static/images/OmpassAppImg_Kor.png"
                    : "/static/images/OmpassAppImg_Eng.png"
                }
                alt={isKr ? "원모어패스 앱_한글" : "원모어패스 앱_영어"}
              />
            </div>
          </ul>
        </div>
      </div>
      <div className="supportContents3">
        <ul>
          <h1>{t("기술지원")}</h1>
          <p>{t("고객 중심의 신속 대응 서비스를 제공해드립니다.")}</p>
          <div>
            {!isKr && <p className="kor">{t("로 문의해주세요.")}</p>}
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              href="mailto:service@omsecurity.kr"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="supportfontawsome"
              />{" "}
              {t("service@omsecurity.kr")}
            </a>
            {isKr && <p className="kor">{t("로 문의해주세요.")}</p>}
          </div>
        </ul>
      </div>
    </div>
  );
}
export default support;
