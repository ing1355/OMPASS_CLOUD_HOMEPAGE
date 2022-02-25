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

function login(props) {
  const { t, isKr } = useTranslation();
  const document_AdminLogin = true;
  return (
    <div className="document AdminLoginBox">
      <ul className="documentLeft">
        <Document document_AdminLogin={document_AdminLogin} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div class="main">
                <div className="code">
                  <h4>▶ {t("로그인")}</h4>

                  {/* =================================================================== */}

                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_login_img.png" : "/static/images/document_login_img_eng.png"}
                        alt="로그인 창"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>{t("이메일 형식의 사용자 ID를 입력합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>
                          {t(
                            "비밀번호는 문자, 숫자, 특수문자를 활용하여 최대 16자리 까지 8자 이상 3가지 조합 또는 10자 이상 2가지 조합으로 입력해야 합니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❸&nbsp;</label>
                        <p>
                          {t("로그인 버튼을 누르면 대시보드로 이동합니다.")}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❹&nbsp;</label>
                        <p>
                          {t(
                            "비밀번호를 잊어버렸을 시 사용가능 한 기능입니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❺&nbsp;</label>
                        <p>
                          {t(
                            "아이디가 없는 사용자는 회원가입페이지로 이동합니다."
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
                      <p>{t("비밀번호 찾기 버튼 클릭 시")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_login_password.png" : "/static/images/document_login_password_eng.png"}
                        alt="비밀번호 초기화"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>{t("비밀번호를 초기화 할 이메일을 입력합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>
                          {t(
                            "❝이메일 인증❞ 버튼 클릭 시 비밀번호 초기화를 위한 인증 메일을 전송합니다."
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
                      <p>{t("비밀번호 초기화 인증 메일")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_password_Email.png" : "/static/images/document_password_Email_eng.png"}
                        alt="비밀번호 초기화 인증 메일"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❸&nbsp;</label>
                        <p>
                          <p>{t("비밀번호 초기화 버튼을 클릭합니다.")}</p>
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❹&nbsp;</label>
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
export default login;
