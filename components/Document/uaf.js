import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import Git_Demo from "./Git_Demo";
import { DocumentLabel, DocumentTextBox } from "./DocumentComponets";

function uaf(props) {
  const { t } = useTranslation();

  return (
    <div className="1st">
      <div className={`${styles["guide"]} ${styles["restapi-div"]}`}>
        <h5 style={{ margin: "0" }}>{t("UAF 란?")}<Git_Demo /></h5>

        <p>
          {t(
            "UAF 인증은 패스워드 없이 OMPASS 인증만으로 로그인이 가능한 방법입니다."
          )}
        </p>
        <DocumentTextBox>
          <div className={styles["document-label-notice"]} style={{ marginTop: "0rem" }}>
            <DocumentLabel icon="*" title="적용 주의사항" />
            <DocumentLabel icon="-" title="UAF 인증 방식 단독으로 로그인 기능을 구현하실 수 없습니다." style={{ padding: "0rem 1rem" }} />
            <DocumentLabel icon="-" title="반드시 U2F 인증 방식을 구현 후 UAF 인증을 구현해야 합니다." style={{ padding: "0  1rem 0.5rem" }} />
          </div>
        </DocumentTextBox>
      </div>
    </div>
  );
}
export default uaf;
