import React from "react";

import "../../../css/Document.module.css";
import Document from "../../../components/Document";
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

function log(props) {
  const { t, isKr } = useTranslation();
  const document_log = true;

  return (
    <div className="document LogBox">
      <ul className="documentLeft">
        <Document document_log={document_log} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div class="main">
                <div className="code">
                  <h4>▶ {t("정책 로그")}</h4>
                  {/* =================================================================== */}

                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_policy_log_1.png" : "/static/images/document_policy_log_1_eng.png"}
                        alt="logs 페이지"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>{t("테이블 필드명으로 검색기능을 제공합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>{t("정책 로그가 표시됩니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❸&nbsp;</label>
                        <p>{t("변경된 정책 로그를 자세하게 볼 수있습니다.")}</p>
                      </div>
                    </div>
                  </div>
                  {/* =================================================================== */}
                  <div className="document-text-box">
                    <div
                      className="document-label"
                      style={{
                        color: "#3c9edb",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <label>↓&nbsp;</label>
                      <p>{t("상세보기 클릭 시")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="70%"
                        src={isKr ? "/static/images/pocliy_log_2.png" : "/static/images/pocliy_log_2_eng.png"}
                        alt="logs 페이지"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">*&nbsp;</label>
                        <p>{t("변경 전/변경 후 정책 로그가 반영됩니다.")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}
export default log;
