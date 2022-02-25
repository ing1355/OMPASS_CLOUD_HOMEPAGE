import React from "react";
import "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";

function uafpopup(props) {
  const { t, isKr } = useTranslation();

  return (
    <div className="6st">
      <div className="guide restapi-div">
        <h5 style={{ margin: "0" }}>{t("OMPASS UAF 인증")}</h5>
        <h6 className="sub-title">{t("client-side")}</h6>
        <p style={{ marginBottom: "0" }}>
          {t("응답받은 OMPASS URI를 브라우저(client-side)에서 호출합니다.")}
        </p>
        {/* =================================================================== */}
        <div className="document-text-box" style={{ borderBottom: "0" }}>
          <div
            className="document-label"
            style={{
              color: "#3c9edb",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            <p> {t("인증 인터페이스 호출 예시 (팝업 창)")}</p>
          </div>
          <div
            className="document-label"
            style={{
              color: "#3c9edb",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            <label>-&nbsp;</label>
            <p>
              {t(
                "OMPASS 에 등록되어 있는 사용자인 경우 아래와 같은 인증 팝업 창이 표시됩니다."
              )}
            </p>
          </div>
          <div className="document-img">
            <img
              width="100%"
              src={isKr ? "/static/images/rest_api_img_6.png" : "/static/images/rest_api_img_6_eng.png"}
              alt="등록 인터페이스"
            />
          </div>

          <div className="documnet-box">
            <div className="document-label">
              <label className="number">❶&nbsp;</label>
              <p>{t("인증할 아이디를 입력해주세요.")}</p>
            </div>
            <div className="document-label">
              <label className="number">❷&nbsp;</label>
              <p> {t("“2차 인증하기” 버튼을 클릭해주세요.")}</p>
            </div>
            <div className="document-label">
              <label className="number">❸&nbsp;</label>
              <p>{t("모바일로 OMPASS 인증 알림이 옵니다.")}</p>
            </div>
            <div className="document-label">
              <label className="number">❹&nbsp;</label>
              <p>{t("기존에 선택했던 인증방식으로 인증을 완료해주세요.")}</p>
            </div>
          </div>
        </div>
        {/* =================================================================== */}
      </div>
    </div>
  );
}
export default uafpopup;
