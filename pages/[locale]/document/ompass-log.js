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


function ompsslog(props) {
  const { t, isKr } = useTranslation();
  const document_OmpassLog = true;

  return (
    <div className="document OmpassLogBox">
      <ul className="documentLeft">
        <Document document_OmpassLog={document_OmpassLog} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div className="main">
                <div className="code">
                  <h4>▶ {t("OMPASS 로그")}</h4>
                  {/* =================================================================== */}

                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_OMPASSlog_1.png" : "/static/images/document_OMPASSlog_1_eng.png"}
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

                        <p>{t("OMPASS 로그가 표시됩니다.")}</p>
                      </div>
                    </div>
                  </div>
                  {/* =================================================================== */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}
export default ompsslog;
