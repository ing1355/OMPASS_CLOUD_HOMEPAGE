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

function policy() {
  const { t, isKr } = useTranslation();
  const document_policy = true;

  return (
    <div className="document PolicyBox">
      <ul className="documentLeft">
        <Document document_policy={document_policy} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div class="main">
                <div className="code">
                  <h4>▶ {t("기본 정책")}</h4>
                  {/* =================================================================== */}
                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_defalutpolicy_1.png" : "/static/images/document_defalutpolicy_1_eng.png"}
                        alt="user 페이지"
                      />
                    </div>
                    <>
                      <div className="document-label">
                        <label>*&nbsp;</label>
                        <p>
                          {t(
                            "어플리케이션에 적용되는 OMPASS 디폴트 정책 내용입니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label>*&nbsp;</label>
                        <p>
                          {t(
                            "OMPASS 인증 제어, 사용자 위치 제한, 브라우저 접근 허용 상태를 확인할 수 있습니다."
                          )}
                        </p>
                      </div>
                    </>
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
                      <p>{t("기본 정책 수정 버튼 클릭 시")}</p>
                    </div>
                    <div
                      className="document-label"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <label>■&nbsp;</label>
                      <p>{t("“OMPASS 인증 패스” 또는 “모두 거부” 선택")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="75%"
                        src={isKr ? "/static/images/document_defalutpolicy_2.png" : "/static/images/document_defalutpolicy_2_eng.png"}
                        alt="정책 페이지"
                      />
                    </div>

                    <div className="document-label-notice">
                      <div>
                        <p>
                          {t(
                            "(“OMPASS 인증 패스” 또는 “모두 거부” 선택 시 하단의 정책은 설정할 수 없습니다.)"
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label>* &nbsp;</label>
                        <p>
                          {t(
                            "OMPASS 인증 패스：어플리케이션 로그인 시 OMPASS 등록 및 인증을 패스할 수 있습니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label>* &nbsp;</label>
                        <p>
                          {t(
                            "모두 거부：어플리케이션 로그인 시 모든 사용자의 OMPASS 인증을 거부합니다."
                          )}
                          <br />
                          {t(
                            "(단, OMPASS 인증 바이패스가 ON으로 설정된 사용자는 이메일로 인증이 가능합니다.)"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================================== */}
                <div className="document-text-box">
                  <div
                    className="document-label"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    <label>■&nbsp;</label>
                    <p>{t("OMPASS “인증 필수” 선택")}</p>
                  </div>
                  <div className="document-img">
                    <img
                      width="75%"
                      src={isKr ? "/static/images/document_defalutpolicy_3.png" : "/static/images/document_defalutpolicy_3_eng.png"}
                      alt="정책 페이지"
                    />
                  </div>

                  <div className="documnet-box">
                    <div className="document-label">
                      <label className="number">❶&nbsp;</label>
                      <p>
                        {t(
                          "OMPASS 인증 필수：어플리케이션 로그인 시 OMPASS 등록 및 인증을 적용합니다."
                        )}
                      </p>
                    </div>
                    <div className="document-label">
                      <label className="number">❷&nbsp;</label>
                      <p>
                        {t(
                          "사용자 위치 제한：어플리케이션 로그인 시 사용자의 현재 국가 접속을 “허용/거부” 할 수 있습니다."
                        )}
                        <br />
                        {t(
                          "(OFF 설정：모든 국가에서의 접속을 허용함을 의미합니다.)"
                        )}
                      </p>
                    </div>
                    <div className="document-label">
                      <label className="number">❸&nbsp;</label>
                      <p>
                        {t(
                          "브라우저 접근 허용：어플리케이션 로그인 시 사용하는 브라우저의 접근을 관리할 수 있습니다."
                        )}
                        <br />
                        {t(
                          "(허용하고자 하는 브라우저 항목을 체크해 주시면 됩니다.)"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                {/* =================================================================== */}

                <div className="document-text-box">
                  <div className="document-img">
                    <img
                      width="75%"
                      src={isKr ? "/static/images/document_defalutpolicy_4.png" : "/static/images/document_defalutpolicy_4_eng.png"}
                      alt="정책 페이지"
                    />
                  </div>

                  <div className="documnet-box">
                    <div className="document-label">
                      <label>* &nbsp;</label>
                      <p>
                        {t(
                          "“기본값으로 변경” 버튼 클릭 시 처음의 기본 정책 상태인 “OMPASS 인증 패스” 설정이 선택된 상태로 변경됩니다."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                {/* =================================================================== */}
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}
export default policy;
