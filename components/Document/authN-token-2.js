import React from "react";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import { dracula, CopyBlock, CodeBlock } from "react-code-blocks";
import { Table } from "react-bootstrap";
import { CopyMessage } from "./DocumentComponets";

function authNtoken2(props) {
  const { t } = useTranslation();

  const language = "jsx";

  return (
    <div className="7st 8st 77st">
      <div className={`${styles["guide"]} ${styles["restapi-div"]}`}>
        <h5 style={{ margin: "0" }}>{t("인증 토큰 검증")}</h5>
        <h6 className={styles["sub-title"]}>{t("server-side")}</h6>
        <p style={{ marginBottom: "0" }}>
          {t(
            "client-side 에서 전달받은 인증 토큰을 포함하여 OMPASS 인증 토큰 검증 API를 호출하여 토큰의 유효성을 검증 받습니다."
          )}
          <br />
          {t(
            "API 요청의 응답 HTTP STATUS CODE 가 200 이면 해당 아이디를 확인 후 로그인 처리합니다."
          )}
        </p>
        <div className={styles["copyblock"]}>
          <h6 className={styles["codeH6"]}>■ {t("OMPASS 성공 토큰 검증 API")}</h6>
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
            POST 
            URL /v1/ompass/token-verification
            URL EXAMPLE – https://interface-api.ompasscloud.com/v1/ompass/token-verification
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
            <tbody className={styles["adff"]}>
              <tr>
                <td className={styles["adf"]} rowSpan="3">
                  Authorization
                </td>
                <td className={styles["adf"]} rowSpan="3">
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
        <h6 className={styles["codeH6"]}>■ Request Body (JSON) </h6>
        <Table striped bordered hover size="sm" className={styles["codeTable"]}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>user_id</td>
              <td>String</td>
              <td>{t("사용자 아이디")}</td>
            </tr>
            <tr>
              <td>access_token</td>
              <td>String</td>
              <td>{t("리다이렉트 URI 로 전달 받은 access_token")}</td>
            </tr>
          </tbody>
        </Table>

        <br />
        <div className={styles["copyblock"]}>
          <h6 className={styles["codeH6"]}>■ Example of Request Body </h6>
          <CopyMessage theme={1} width={"11%"}/>
        </div>
        <CopyBlock
          className={`${styles["first"]} ${styles["codeBox"]}`}
          style={{ background: "#002c50" }}
          text={`
            {
             "user_id" : "omsecurity",
             "access_token" : "dfj2ld92lldj29cldl29llduuufnbsd229312000dfl2ldio2o019029dj10wj"
            }
          `}
          language={language}
          theme={dracula}
        />

        <br />
        <h6 className={styles["codeH6"]}>■ Response (JSON)</h6>
        <p style={{ color: "#3c9edb", fontWeight: "bold" }}>
          · {t("인증 성공 시")}
        </p>
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
              <td>user_id</td>
              <td>String</td>
              <td>{t("사용자 아이디")}</td>
            </tr>
          </tbody>
        </Table>
        <CopyMessage theme={2} width={"2.7%"}/>
        <CopyBlock
          className={`${styles["first"]} ${styles["codeBox"]}`}
          style={{ background: "#002c50" }}
          text={`
            {
              "code" : 200,
              "message" : "ok",
              "data" : {
                "user_id" : "omsecurity"
              }
            }
          `}
          language={language}
          theme={dracula}
        />
      </div>
    </div>
  );
}
export default authNtoken2;
