import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import Git_Demo from "./Git_Demo";
import { DocumentBox, DocumentLabel, DocumentTextBox } from "./DocumentComponets";

function u2f(props) {
  const { t } = useTranslation();

  return (
    <div className="1st">
      <div className={styles["restapi-div"]}>
        {/* =================================================================== */}
        <DocumentTextBox>
          <h5 style={{ margin: "0", display: "flex", alignItems: "center" }}>{t("U2F 란?")}<Git_Demo /></h5>

          <DocumentBox>
            <DocumentLabel icon="-" labelClassName={styles["number"]} title="U2F는 패스워드 인증이 완료된 후 OMPASS 2차 인증을 통해 최종 로그인이 가능한 인증 방식입니다." />
          </DocumentBox>
        </DocumentTextBox>
      </div>
    </div>
  );
}
export default u2f;
