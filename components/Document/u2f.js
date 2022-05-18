import React from "react";
import "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import Git_Demo from "./Git_Demo";

function u2f(props) {
  const { t } = useTranslation();

  return (
    <div className="1st">
      <div className="restapi-div">
        {/* =================================================================== */}
        <div className="document-text-box">
          <h5 style={{ margin: "0" }}>{t("U2F 란?")}<Git_Demo/></h5>

          <div className="documnet-box">
            <div className="document-label">
              <label className="number">-&nbsp;</label>
              <p>
                {t(
                  "U2F는 패스워드 인증이 완료된 후 OMPASS 2차 인증을 통해 최종 로그인이 가능한 인증 방식입니다."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default u2f;
