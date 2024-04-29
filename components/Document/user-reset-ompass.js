import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import { dracula, CodeBlock } from "react-code-blocks";
import { Table } from "react-bootstrap";

function userresetompass(props) {
  const { t } = useTranslation();
  const language = "jsx";

  return (
    <div>
      <div className={`${styles["guide"]} ${styles["restapi-div"]} 2st`}>
        <h5 style={{ margin: "0" }}> {t("OMPASS 등록 초기화 API")}</h5>
        <h6 className={styles["sub-title"]}>{t("server-side")}</h6>
        <p style={{ marginBottom: "0" }}>
          {t(
            "server-side에서 HTTP HEADER에는 Secret Key를 포함하고 Path Variable에는 사용자의 아이디를 포함하여 OMPASS API를 호출합니다."
          )}
        </p>
        <div className={styles["copyblock"]}>
          <h6 className={styles["codeH6"]}>■ {t("OMPASS 등록 초기화 API")}</h6>
          <h6
            className={styles["copyblock-message"]}
            style={{
              color: "rgb(114, 114, 114)",
              fontSize: "0.8rem",
              fontWeight: "bold",
              textAlign: "right",
            }}
          ></h6>
        </div>
        <CodeBlock
          className={`${styles["first"]} ${styles["codeBox"]}`}
          style={{ background: "#002c50" }}
          text={`
            DELETE 
            URL /v1/ompass/users/{userId}
            URL EXAMPLE – https://interface-api.ompasscloud.com/v1/ompass/users/{userId}
          `}
          language={language}
          theme={dracula}
        />
        <br />
        <h6 className={styles["codeH6"]}>■ Header </h6>
        <div className={styles["error-table"]}>
          <Table striped bordered hover size="sm" className={styles["codeTable"]}>
            <thead>
              <tr>
                <th>Key</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingTop: "2rem" }} rowSpan="3">
                  Authorization
                </td>
                <td style={{ paddingTop: "2rem" }} rowSpan="3">
                  Bearer
                </td>
                <td>{t("어플리케이션에 할당된 Secret Key")}</td>
              </tr>
              <tr>
                <td>
                  {t(
                    "Authorization 타입으로 'Bearer' 를 반드시 명시하고 'Bearer' 와 'Secret Key' 사이에 공백 필수"
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  Example : Bearer djfk39dkfdl39dldjmgjd4idls83jflghidhs83jfk
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <br />
        <h6 className={styles["codeH6"]}>■ Response (JSON)</h6>
        <p
          style={{
            color: "#3c9edb",
            fontWeight: "bold",
            marginBottom: "-1rem"
          }}
        >
          · {t("OMPASS 등록 초기화 성공 시")}
        </p>
          <p>
            {t("HTTP STATUS CODE 204 반환")}
          </p>
      </div>
    </div>
  );
}
export default userresetompass;
