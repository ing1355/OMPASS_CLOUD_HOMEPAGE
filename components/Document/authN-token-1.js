import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import { DocumentImage } from "./DocumentComponets";

function authNtoken1(props) {
  const { t, isKr } = useTranslation();

  return (
    <div className="6st 7st">
      <div className={`${styles["guide"]} ${styles["restapi-div"]}`}>
        <h5 style={{ margin: "0" }}>{t("인증 토큰 받기")}</h5>
        <h6 className={styles["sub-title"]}>{t("client-side")}</h6>
        <p style={{ marginBottom: "0" }}>
          {t(
            "OMPASS 등록 또는 인증을 완료했을 때 OMPASS 페이지 팝업 창에서 해당 어플리케이션에 지정되어 있는 리다이렉트 URI 로 HTTP 리다이렉트되며, 인증 토큰이 담긴 쿼리 스트링 (Query String)을 포함합니다."
          )}
          <br />
          {t(
            "리다이렉트된 인증 토큰을 파싱(client-side)하여 server-side로 전달합니다."
          )}
        </p>

        <p style={{ fontWeight: "bold", marginBottom: "0" }}>■ {t("예시")}</p>
        <DocumentImage>
          <img
            width="70%"
            src={isKr ? "/static/images/rest_api_img_8.png" : "/static/images/rest_api_img_8_eng.png"}
            alt="access token"
          />
        </DocumentImage>
      </div>
    </div>
  );
}
export default authNtoken1;
