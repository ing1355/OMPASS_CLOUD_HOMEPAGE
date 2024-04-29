import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import Git_Demo from "./Git_Demo";
import { DocumentTextBox } from "./DocumentComponets";

function userrest(props) {
  const { t } = useTranslation();

  return (
    <div className="1st">
      <div className={`${styles['guide']} ${styles['restapi-div']}`}>
        <h5 style={{ margin: "0" }}>{t("OMPASS 등록 초기화란?")}<Git_Demo /></h5>

        <p>
          {t(
            "특정 사용자가 인증장치(스마트폰 및 기타 인증장치)를 분실하였을 경우 기존 OMPASS 등록을 초기화 해주고 새로운 인증장치로 OMPASS 등록이 가능하도록 해주는 기능입니다."
          )}
        </p>
        <DocumentTextBox>
          <div className={styles["document-label-notice"]} style={{ marginTop: "0rem" }}>
            <div>
              <label>&nbsp;</label>
              <p>
                {t(
                  "OMPASS 등록 초기화 API를 사용하여 특정 사용자의 OMPASS 등록 정보를 초기화할 수 있습니다."
                )}
              </p>
            </div>
          </div>
        </DocumentTextBox>
      </div>
    </div>
  );
}
export default userrest;
