import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import { DocumentBox, DocumentCustomStyle, DocumentImage, DocumentLabel, DocumentTextBox } from "./DocumentComponets";

function uafpopup(props) {
  const { t, isKr } = useTranslation();

  return (
    <div className="6st">
      <div className={`${styles["guide"]} ${styles["restapi-div"]}`}>
        <h5 style={{ margin: "0" }}>{t("OMPASS UAF 인증")}</h5>
        <h6 className={styles["sub-title"]}>{t("client-side")}</h6>
        <p style={{ marginBottom: "0" }}>
          {t("응답받은 OMPASS URI를 브라우저(client-side)에서 호출합니다.")}
        </p>
        {/* =================================================================== */}
        <DocumentTextBox style={{ borderBottom: "0" }}>
          <DocumentLabel noIcon title="인증 인터페이스 호출 예시 (팝업 창)" style={DocumentCustomStyle} />
          <DocumentLabel icon="-" title="OMPASS 에 등록되어 있는 사용자인 경우 아래와 같은 인증 팝업 창이 표시됩니다." style={DocumentCustomStyle} />

          <DocumentImage>
            <img
              width="100%"
              src={isKr ? "/static/images/rest_api_img_6.png" : "/static/images/rest_api_img_6_eng.png"}
              alt="등록 인터페이스"
            />
          </DocumentImage>

          <DocumentBox>
            <DocumentLabel num={1} title="인증할 아이디를 입력해주세요." />
            <DocumentLabel num={2} title="“패스워드 없이 로그인” 버튼을 클릭해주세요." />
            <DocumentLabel num={3} title="모바일로 OMPASS 인증 알림이 옵니다." />
            <DocumentLabel num={4} title="기존에 선택했던 인증방식으로 인증을 완료해주세요." />
          </DocumentBox>
        </DocumentTextBox>
        {/* =================================================================== */}
      </div>
    </div>
  );
}
export default uafpopup;
