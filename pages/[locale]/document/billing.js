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

function billing(props) {
  const { t, isKr } = useTranslation();
  const document_billing = true;
  return (
    <div className="document BillingBox">
      <ul className="documentLeft">
        <Document document_billing={document_billing} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div class="main">
                <div className="code">
                  <h4>▶ {t("요금")}</h4>
                  {/* =================================================================== */}

                  <div className="document-text-box">
                    <div
                      className="document-label"
                      style={{
                        color: "rgb(11, 158, 85)",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        marginBottom: "2rem",
                      }}
                    >
                      <label>*&nbsp;</label>
                      <p>
                        {t("Sub Admin 계정에서는 요금 메뉴가 보이지 않습니다.")}
                      </p>
                    </div>
                    <div
                      className="document-label"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <label>■&nbsp;</label>
                      <p>{t("무료 플랜 상태")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/billing_1.png"
                            : "/static/images/billing_1_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">*&nbsp;</label>
                        <p>
                          {t(
                            "무료 플랜은 10인 이하 기업의 경우 무료 무제한 사용이 가능합니다."
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
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <label>■&nbsp;</label>
                      <p>{t("OMPASS 서비스 결제 상태")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/billing_2.png"
                            : "/static/images/billing_2_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">*&nbsp;</label>
                        <p>
                          {t(
                            "OMPASS 결제를 진행하시면 현재 현황과 사용기간 확인이 가능합니다."
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
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <label>■&nbsp;</label>
                      <p>{t("OMPASS 서비스 제공 정보")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/billing_3.png"
                            : "/static/images/billing_3_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">*&nbsp;</label>
                        <p>
                          {t(
                            "무료 플랜 , OMPASS 결제 시 사용 하실 수 있는 정보입니다."
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
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <label>■&nbsp;</label>
                      <p>{t("OMPASS 결제")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="75%"
                        src={
                          isKr
                            ? "/static/images/billing_4.png"
                            : "/static/images/billing_4_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>
                          {t(
                            "OMPASS 서비스를 이용할 최대 사용자 수를 선택합니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>
                          {t(
                            "최대 사용자 수에 맞게 월 단위 금액이 산정됩니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❸&nbsp;</label>
                        <p>
                          {t(
                            "결제대행서비스 이용약관, 구매조건 및 환불 규정을 확인 후 이용 동의에 체크해 주세요."
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="document-img">
                      <img
                        width="75%"
                        src={
                          isKr
                            ? "/static/images/billing_5.png"
                            : "/static/images/billing_5_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❹&nbsp;</label>
                        <p>
                          {t(
                            "최대 사용자 수, 가격 정보를 확인 하신 후 결제를 진행하시면 됩니다."
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/billing_6.png"
                            : "/static/images/billing_6_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❺&nbsp;</label>
                        <p>{t("결제완료 후 결제 내역 확인이 가능합니다.")}</p>
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
                      <p>{t("OMPASS 결제 인원 변경")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="75%"
                        src={
                          isKr
                            ? "/static/images/billing_10.png"
                            : "/static/images/billing_10_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>

                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>{t("변경 할 사용자 수를 선택합니다.")}</p>
                      </div>
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>{t("선택한 사용자 수에 맞게 금액이 산정됩니다.")}</p>
                      </div>
                    </div>

                    <div className="document-img">
                      <img
                        width="75%"
                        src={
                          isKr
                            ? "/static/images/billing_11.png"
                            : "/static/images/billing_11_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❸&nbsp;</label>
                        <p>
                          {t(
                            "변경 된 정보를 확인 후 OK 버튼을 선택합니다. (다음 결제일에 변경 된 내용으로 결제가 진행됩니다."
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/billing_13.png"
                            : "/static/images/billing_13_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number number-2">❹-⑴&nbsp;</label>
                        <p>{t("사용 가능한 인원이 변경 됩니다.")}</p>
                      </div>
                    </div>

                    <div className="document-img">
                      <img
                        width="75%"
                        src={
                          isKr
                            ? "/static/images/billing_12.png"
                            : "/static/images/billing_12_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number number-2">❹-⑵&nbsp;</label>
                        <p>
                          {t("다음 결제일에 결제 할 예정 금액이 표시됩니다.")}
                        </p>
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
                      <p>{t("구독 취소")}</p>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/billing_7.png"
                            : "/static/images/billing_7_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❶&nbsp;</label>
                        <p>
                          {t("페이지의 상단의 “구독 취소” 버튼을 선택합니다.")}
                        </p>
                      </div>
                    </div>

                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/billing_8.png"
                            : "/static/images/billing_8_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">❷&nbsp;</label>
                        <p>
                          {t(
                            "만료일을 확인 하신 후 OK 버튼을 누르시면 구독 취소가 완료 됩니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">❸&nbsp;</label>
                        <p>{t("구독 취소 완료 후 화면 변경 상태입니다.")}</p>
                      </div>
                    </div>
                    <div className="document-img">
                      <img
                        width="100%"
                        src={
                          isKr
                            ? "/static/images/billing_9.png"
                            : "/static/images/billing_9_eng.png"
                        }
                        alt="대시보드 사용자 정보"
                      />
                    </div>
                    <div className="documnet-box">
                      <div className="document-label">
                        <label className="number">*&nbsp;</label>
                        <p>
                          {t(
                            "구독 취소 완료시 관리자 이메일로 구독 취소 이메일이 발송됩니다."
                          )}
                        </p>
                      </div>
                      <div className="document-label">
                        <label className="number">*&nbsp;</label>
                        <p>
                          {t(
                            "구독 취소 후 사용 만료일까지 OMPASS 서비스 사용이 가능하며 재결제 시 구독이 다시 활성화 됩니다."
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
export default billing;
