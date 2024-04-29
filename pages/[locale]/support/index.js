import React from "react";
import styles from "../../../css/Support.module.css";
import useTranslation from "../../../lib/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LinkComponent from "../../../components/Link";
import i18nextConfig from "../../../next-i18next.config";
import ServiceText from "../../../components/ServiceText";

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

const QRImg = ({qrSrc, appSrc, qrAlt, href, title}) => {
  return <div>
    <img
      className={styles["qrimg"]}
      src={qrSrc}
      alt={qrAlt}
    />
    <a
      href={href}
      target="_blank"
      className={styles["app-down-link-button"]}
    >
      <img
        className={styles["app-img"]}
        src={appSrc}
      />
      &nbsp; {title}
    </a>
  </div>
}

function support() {
  const { t, isKr } = useTranslation();
  return (
    <div className={styles["supportBox"]}>
      <div className={styles["supportTtileBox"]}>
        <h2>Support</h2>
      </div>
      <div className={styles["supportContents1"]}>
        <ul className={styles["support-admin"]}>
          <h1>{t("관리자 매뉴얼")}</h1>
          <p>{t("원모어패스를 사용하는 관리자 매뉴얼입니다.")}</p>
          <br />
          <br /> <br />
          <LinkComponent href="/document/u2f-uaf" style={{ color: "#fff" }}>
            {t("관리자 매뉴얼 이동")}
          </LinkComponent>
        </ul>
      </div>

      <div className={styles["supportContents2"]}>
        <div className={styles["supportContents2Box"]}>
          <ul>
            <h1>{t("모바일 앱")}</h1>
            <p>{t("원모어패스는 FIDO를 기반으로 하는 인증 플랫폼 입니다.")}</p>
            <p>{t("1. PKI 기반의 높은 보안성")}</p>
            <p className={styles["support-en"]}>{t("1. PKI 기반의 높은 보안성-eng")}</p>
            <p>{t("2. 패스워드가 없는 사용자 편의성을 추구")}</p>
            <p>{t("3. 사용자 선택형 인증 방식을 제공")}</p>

            <div className={styles["support-qr"]}>
              <QRImg qrSrc="/static/images/QR_android.png" qrAlt="안드로이드 앱 QR코드" href="https://play.google.com/store/apps/details?id=kr.omsecurity.ompass" appSrc="/static/images/googleplay.png" title="Google Play"/>
              <QRImg qrSrc="/static/images/QR_ios.png" qrAlt="iOS 앱 QR코드" href="https://apps.apple.com/kr/app/%EC%9B%90%EB%AA%A8%EC%96%B4%ED%8C%A8%EC%8A%A4-ompass/id1547587526" appSrc="/static/images/appstore.png" title="App Store"/>
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
      <ServiceText/>
    </div>
  );
}
export default support;
