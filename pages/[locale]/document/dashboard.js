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

function dashboard(props) {
  const { t, isKr } = useTranslation();

  return (
    <div className="document DashboardBox">
      <ul className="documentLeft">
        <Document document_Dashboard={true} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div className="main">
                <div className="code">
                  <h4>▶ {t("대시보드")}</h4>
                  {/* =================================================================== */}

                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_dashboard_1.png" : "/static/images/document_dashboard_1_eng.png"}
                        alt="대시보드 사용자 정보"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>
                          {t(
                            "현재 사용하고 있는 서비스 유효기간 정보를 제공합니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>
                          <p>
                            {t("다음 결제 시 까지 남은 일 수가 표기됩니다.")}
                          </p>
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❸&nbsp;</label>
                        <p>
                          {t(
                            "OMPASS 서비스를 이용 중인 사용자 수, 관리자 수, 바이패스 수, 비활성화 수 관련 정보를 제공합니다."
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* =================================================================== */}

                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_dashboard_2.png" : "/static/images/document_dashboard_2_eng.png"}
                        alt="대스보드 인증 횟수 차트"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❹&nbsp;</label>
                        <p>
                          {t(
                            "어플리케이션 단위로 사용자 인증 횟수를 보여주는 차트입니다."
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* =================================================================== */}

                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_dashboard_3.png" : "/static/images/document_dashboard_3_eng.png"}
                        alt="대시보드 최근 인증 로그"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❺&nbsp;</label>
                        <p>
                          {t("최근 ompass 인증을 이용한 사용자 로그입니다.")}
                        </p>
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
export default dashboard;
