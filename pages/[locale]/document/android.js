import React from "react";

import "../../../css/Document.module.css";
import Document from "../../../components/Document";
import useTranslation from "../../../lib/useTranslation";
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

function android(props) {
  const { t, isKr } = useTranslation();
  const document_android = true;

  return (
    <div className="document AndroidBox">
      <ul className="documentLeft">
        <Document document_android={document_android} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div class="main">
                <div className="code">
                  <h4>▶ {t("안드로이드")}</h4>

                  <div className="qrcode-mobile">
                    <br />
                    <img
                      className="qrcode-mobile"
                      width="15%"
                      src={"/static/images/QR_android.png"}
                      alt="QR코드"
                    />
                    <h6
                      style={{
                        borderBottom: "1px solid black",
                        marginTop: "1rem",
                        paddingBottom: "1rem",
                      }}
                    >
                      {t(
                        "안드로이드 전용 Play 스토어에서 원모어패스(OMPASS) v1.0을 다운로드하여 설치해야 합니다."
                      )}
                      <br />
                      {t("QR 스캔을 위한 단말의 해당 권한 요청 사항을 반드시")}
                      <b style={{ color: "red" }}> {t("허용")} </b>
                      {t("으로 합니다.")}
                    </h6>
                    <br />
                  </div>
                  <div className="app-url">
                    <h6
                      style={{
                        borderBottom: "1px solid black",
                        marginTop: "1rem",
                        paddingBottom: "1rem",
                      }}
                    >
                      {t(
                        "안드로이드 전용 Play 스토어에서 원모어패스(OMPASS) v1.0을 다운로드하여 설치해야 합니다."
                      )}
                      {t("으로 합니다.")}
                      {t("앱 다운을 받기를 원하시면")}{" "}
                      <a
                        href={
                          "https://play.google.com/store/apps/details?id=kr.omsecurity.ompass"
                        }
                        style={{ color: "red" }}
                      >
                        {t("여기")}
                      </a>
                      {t("를 눌러주세요.")}
                    </h6>
                  </div>
                  {/* =================================================================== */}
                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/app_1.png"
                            : "/static/images/app_1_eng.png"
                        }
                        alt="user 페이지"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>
                          최신 업데이트 알림이 팝업으로 나타납니다. (이미지,
                          문장 수정 예정)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================================== */}
                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/app_2.png"
                            : "/static/images/app_2_eng.png"
                        }
                        alt="user 페이지"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>{t("로그인 인증방식을 설정 합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">→&nbsp;</label>
                        <p>
                          {t(
                            "생체 인증(지문, 얼굴인식), PIN CODE, 패턴 중 2가지 이상 등록해야 합니다."
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
                        src={
                          isKr
                            ? "/static/images/mobileApp_1.png"
                            : "/static/images/mobileApp_1_eng.png"
                        }
                        alt="user 페이지"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number number-2">❸-⑴&nbsp;</label>
                        <p>
                          {t(
                            "OMPASS 인증을 적용하고 있는 웹페이지에서 ID/PW 입력 후 인터페이스 팝업 창이 뜨면 ‘2차인증 등록하기’ 버튼을 선택합니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number number-2">❸-⑵&nbsp;</label>
                        <p>{t("OMPASS 인증장치 등록 QR코드 창이 열립니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number number-2">❸-⑶&nbsp;</label>
                        <p>{t("OMPASS 앱에서 인증장치 등록을 선택합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number number-2">❸-⑷&nbsp;</label>
                        <p>{t("QR 코드를 스캔합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number number-2">❸-⑸&nbsp;</label>
                        <p>
                          {t(
                            "QR 코드를 인식한 결과 화면으로 ‘확인’ 버튼을 누른 후 사용자 인증 과정을 거쳐 등록을 완료하시면 됩니다."
                          )}
                        </p>
                      </div>

                      <div
                        className="document-label-notice"
                        style={{ marginTop: "0rem" }}
                      >
                        <div>
                          <label>-&nbsp;</label>
                          <p>
                            {t(
                              "스마트폰을 교체하거나 OMPASS 앱을 재설치 시, OMPASS 인증장치를 서버에 재등록 후 사용하시기 바랍니다."
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =================================================================== */}

                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/mobileApp_2.png"
                            : "/static/images/mobileApp_2_eng.png"
                        }
                        alt="user 페이지"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number number-2">❹-⑴&nbsp;</label>
                        <p>
                          {t(
                            "OMPASS 인증을 적용하고 있는 웹페이지에서 ID/PW 입력 후 인터페이스 팝업 창이 뜨면 “2차 인증하기” 버튼을 선택합니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number number-2">❹-⑵&nbsp;</label>
                        <p>{t("OMPASS QR코드 인증창이 열립니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number number-2">❹-⑶&nbsp;</label>
                        <p>
                          {t("스마트폰에서 OMPASS 인증 알림을 확인합니다.")}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number number-2">❹-⑷&nbsp;</label>
                        <p>
                          {t("설정한 인증방식으로 사용자 인증을 완료합니다.")}
                        </p>
                      </div>

                      <div className="document-label-notice">
                        <div>
                          <label>*&nbsp;</label>
                          <p>{t("OMPASS 인증 알림이 오지 않는 경우")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/mobileApp_3.png"
                            : "/static/images/mobileApp_3_eng.png"
                        }
                        alt="user 페이지"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>{t("OMPASS 앱에서 QR 코드 인증을 선택합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>{t("QR 코드를 스캔합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❸&nbsp;</label>
                        <p>
                          {t(
                            "QR 코드를 인식한 결과 화면으로 ‘확인’ 버튼을 누른 후 사용자 인증 과정을 거쳐 인증을 완료하시면 됩니다."
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
export default android;
