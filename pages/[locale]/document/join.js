import React from "react";

import "../../../css/Document.module.css";
import useTranslation from "../../../lib/useTranslation";
import Document from "../../../components/Document";
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

function join(props) {
  const { t, isKr } = useTranslation();
  const document_join = true;

  return (
    <div className="document JoinPageBox">
      <ul className="documentLeft">
        <Document document_join={document_join} />
      </ul>

      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div class="main">
                <div className="code">
                  <h4>▶ {t("회원가입")}</h4>
                  {/* =================================================================== */}

                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_join_1_img.png" : "/static/images/document_join_1_img_eng.png"}
                        alt="회원가입 창"
                      />
                    </div>
                  </div>
                  {/* =================================================================== */}
                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_join_agree_img.png" : "/static/images/document_join_agree_img_eng.png"}
                        alt="회원가입 창"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">*&nbsp;</label>
                        <p>
                          {t(
                            "회원가입을 위해서는 이용약관, 개인정보 수집 및 이용에 모두 동의해야 합니다."
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
                        src={isKr ? "/static/images/document_join_img.png" : "/static/images/document_join_img_eng.png"}
                        alt="회원가입 창"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>{t("성 / 이름을 구분하여 입력합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>
                          {t(
                            "사용자 아이디는 이메일로 구분되며 중복 확인을 합니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❸&nbsp;</label>
                        <p>
                          {t(
                            "비밀번호는 문자, 숫자, 특수문자를 활용하여 최대 16자리 까지 8자 이상 3가지 조합 또는 10자 이상 2가지 조합으로 입력해야 합니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❹&nbsp;</label>
                        <p>{t("국가번호를 선택하고 전화번호를 입력합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❺&nbsp;</label>
                        <p>{t("소속된 회사 명을 입력합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❻&nbsp;</label>
                        <p>
                          {t(
                            "회원정보 입력 완료 시 ❝인증메일 발송❞ 버튼을 클릭합니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❼&nbsp;</label>
                        <p>
                          {t(
                            "계정이 있으면 ❝로그인 페이지 이동하기❞ 버튼을 클릭합니다."
                          )}
                        </p>
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
                      <p>{t("❝인증메일 발송❞ 클릭 시")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_join_2.png" : "/static/images/document_join_2_eng.png"}
                        alt="회원가입 창"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❽&nbsp;</label>
                        <p>
                          {t(
                            "메일함에서 ❝인증하기❞ 버튼을 눌러야 최종 회원가입이 완료됩니다."
                          )}
                        </p>
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
                      <p>{t("회원가입 인증 메일")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_join_Email.png" : "/static/images/document_join_Email_eng.png"}
                        alt="회원가입 이메일 창"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❾&nbsp;</label>
                        <p>
                          {t(
                            "❝인증하기❞ 버튼을 클릭하면 최종 회원가입이 완료됩니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❿&nbsp;</label>
                        <p>
                          {t(
                            "본 이메일의 URL은 5분 후에 만료되므로 이메일 수신 후 바로 인증하시길 바랍니다."
                          )}
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
export default join;
