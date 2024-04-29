import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import LinkComponent from "../Link";
import { DocumentBox, DocumentCustomStyle, DocumentImage, DocumentLabel, DocumentTextBox } from "./DocumentComponets";

function ompasspopup() {
  const { t, isKr } = useTranslation();

  return (
    <div className={styles["5st"]}>
      <div className={`${styles["guide"]} ${styles["restapi-div"]}`}>
        <h5 style={{ margin: "0" }}>{t("OMPASS 등록 및 U2F 인증")}</h5>
        <h6 className={styles["sub-title"]}>{t("client-side")}</h6>
        <p style={{ marginBottom: "0" }}>
          {t("응답받은 OMPASS URI를 브라우저(client-side)에서 호출합니다.")}
        </p>
        {/* =================================================================== */}

        <DocumentTextBox>
          <DocumentLabel noIcon title="등록 인터페이스 호출 예시 (팝업 창)" style={DocumentCustomStyle} />
          <DocumentLabel icon="-" title="OMPASS 에 등록되어 있지 않은 사용자인 경우 아래와 같은 등록 팝업 창이 표시됩니다." style={DocumentCustomStyle} />

          <DocumentImage>
            <img
              width="100%"
              src={
                isKr
                  ? "/static/images/rest_api_img_1.png"
                  : "/static/images/rest_api_img_1_eng.png"
              }
              alt="등록 인터페이스"
            />
          </DocumentImage>

          <DocumentBox>
            <DocumentLabel num={1} title="“OMPASS 앱” 버튼을 클릭해주세요." />
            <DocumentLabel num={2} title="QR코드를 OMPASS 앱으로 스캔해주세요." />

          </DocumentBox>
        </DocumentTextBox>
        {/* =================================================================== */}
        <DocumentTextBox>
          <DocumentImage>
            <img
              width="100%"
              src={
                isKr
                  ? "/static/images/rest_api_img_2.png"
                  : "/static/images/rest_api_img_2_eng.png"
              }
              alt="등록 인터페이스"
            />
          </DocumentImage>

          <DocumentBox>
            <DocumentLabel num={3} customTitle={<div className={styles['divP']}>
              {t(
                "인증방식 등록 완료 후 선택한 인증방식으로 등록을 완료해주세요."
              )}
              <br />
              {t("인증방식 등록 방법을 보려면")}&nbsp;
              <LinkComponent target="_blank" href="/document/android">
                {t("여기")}
              </LinkComponent>
              {t("를 클릭해주세요.")}
            </div>} />
          </DocumentBox>
        </DocumentTextBox>
        {/* =================================================================== */}
        <DocumentTextBox style={{ borderBottom: "0" }}>
          <DocumentLabel noIcon title="인증 인터페이스 호출 예시 (팝업 창)" style={DocumentCustomStyle} />
          <DocumentLabel icon="-" title="OMPASS 에 등록되어 있는 사용자인 경우 아래와 같은 인증 팝업 창이 표시됩니다." style={DocumentCustomStyle} />
          <DocumentImage>
            <img
              width="100%"
              src={
                isKr
                  ? "/static/images/rest_api_img_3.png"
                  : "/static/images/rest_api_img_3_eng.png"
              }
              alt="등록 인터페이스"
            />
          </DocumentImage>

          <DocumentBox>
            <DocumentLabel num={1} title="로그인 시 바로 알림이 전송됩니다." />
            <DocumentLabel num={2} title="모바일로 OMPASS 인증 알림이 옵니다." />
            <DocumentLabel num={3} title="기존에 선택했던 인증방식으로 인증을 완료해주세요." />

          </DocumentBox>
        </DocumentTextBox>
        {/* =================================================================== */}
      </div>
    </div>
  );
}
export default ompasspopup;
