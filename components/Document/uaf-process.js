import React from "react";
import "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";

function uafprocess() {
  const { t, isKr } = useTranslation();

  return (
    <div className="guide restapi-div 3st">
      <h5 style={{ margin: "0" }}> {t("OMPASS 적용 프로세스")}</h5>
      <br />

      <img
        width="100%"
        src={isKr ? "/static/images/rest_api_img_5.png" : "/static/images/rest_api_img_5_eng.png"}
        alt="UAF 프로세스"
      />
    </div>
  );
}
export default uafprocess;
