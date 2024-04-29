import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";

function uafloginbutton() {
  const { t, isKr } = useTranslation();

  return (
    <div className={`${styles["guide"]} ${styles["restapi-div"]} 4st`}>
      <h5 style={{ margin: "0" }}> {t("UAF 로그인 버튼 추가하기")}</h5>
      <h6 className={styles["sub-title"]}>{t("client-side")}</h6>
      <p style={{ marginBottom: "0" }}>
        {t(
          "기존의 로그인 버튼 외에 UAF 방식으로 로그인 할 수 있는 버튼을 로그인 페이지에 구현합니다."
        )}
        <br />
        {t("버튼 클릭 시 Sever-side 로 로그인 요청을 보냅니다.")}
      </p>

      <p style={{ fontWeight: "bold", marginBottom: "0" }}>■ {t("예시")}</p>
      <img
        width="50%"
        src={isKr ? "/static/images/rest_api_img_7.png" : "/static/images/rest_api_img_7_eng.png"}
        alt="uaf"
      />
    </div>
  );
}
export default uafloginbutton;
