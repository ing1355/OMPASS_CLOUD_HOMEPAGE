import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";

function ompassprocess() {
  const { t, isKr } = useTranslation();

  return (
    <div className={`${styles["guide"]} ${styles["restapi-div"]} 3st`}>
      <h5 style={{ margin: "0" }}>{t("OMPASS 적용 프로세스")}</h5>
      <br />

      <img
        width="100%"
        src={isKr ? "/static/images/rest_api_img_4.png" : "/static/images/rest_api_img_4_eng.png"}
        alt="U2F 프로세스"
      />
    </div>
  );
}
export default ompassprocess;
