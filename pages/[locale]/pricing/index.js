import React from "react";
import "../../../css/Pricing.module.css";
import useTranslation from "../../../lib/useTranslation";
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

function pricing() {
  const { t } = useTranslation();
  return (
    <div className="pricingBox">
      <div className="pricingTtileBox">
        <h2>Pricing</h2>
      </div>
      <div className="pricingContentsBox1">
        <ul>
          <li className="country">
            <h4>{t("클라우드 형")}</h4>
            <p>{t("가격/사용자/월")}</p>
          </li>
          <li>
            <div>
              <p>
                {t("· 매월 유저당")}{" "}
                <b style={{ color: "red" }}>{t("2,200원")}</b>{" "}
                {t("(부가세 포함)")}
              </p>
              <p>
                {t("-m")}
                <b style={{ color: "red" }}> {t("· 매월 유저당-m")}</b>{" "}
                {t("2,200원-m")}
              </p>
              <p> · {t("사용자 10인 이하는 기간 제한 없이 무료")}</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="pricingContents3Box">
        <div>
          <h3>{t("무료")}</h3>
          <h6>{t("원모어패스를 사용해 보는 가장 빠르고 쉬운 방법")}</h6>
        </div>
        <div>
          <LinkComponent href="/registration">
            <button>{t("시작하기")}</button>
          </LinkComponent>
        </div>
      </div>
    </div>
  );
}
export default pricing;
