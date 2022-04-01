import React from "react";
import "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import { dracula, CopyBlock, CodeBlock } from "react-code-blocks";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function uafompass(props) {
  const { t, isKr } = useTranslation();
  const language = "jsx";

  return (
    <div className="5st">
      <div className="guide restapi-div">
        <h5 style={{ margin: "0" }}> OMPASS-UAF</h5>
        <h6 className="sub-title">{t("server-side")}</h6>
        <p style={{ marginBottom: "0" }}>
          {t(
            "server-side에서 사용자의 패스워드 인증이 완료된 후 HTTP HEADER에는 Secret Key를 포함하고 Request Body에는 사용자의 아이디를 포함하여 OMPASS API를 호출합니다."
          )}
        </p>
        <div className="copyblock">
          <h6 className="codeH6">■ {t("OMPASS UAF 인증 API")}</h6>
          <h6
            className="copyblock-message"
            style={{
              color: "rgb(114, 114, 114)",
              fontSize: "0.8rem",
              fontWeight: "bold",
              textAlign: "right",
            }}
          ></h6>
        </div>
        <CodeBlock
          className="first codeBox"
          style={{ background: "#002c50" }}
          text={`
            POST 
            URL /v1/ompass/uaf
            URL EXAMPLE – https://interface-api.ompasscloud.com/v1/ompass/uaf
          `}
          language={language}
          theme={dracula}
        />
        <br />
        <h6 className="codeH6">■ Header </h6>
        <div className="error-table">
          <Table striped bordered hover size="sm" className="codeTable">
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
        <div className="copyblock">
          <h6 className="codeH6">■ Example of Request Body </h6>
          <h6
            className="copyblock-message"
            style={{
              color: "rgb(114, 114, 114)",
              fontSize: "0.8rem",
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            <img
              width="11%"
              src={"/static/images/CopyButton.png"}
              alt="copy버튼"
            />
            {t("(버튼 클릭 시 Copy 가능) ↓")}　
          </h6>
        </div>
        <Table striped bordered hover size="sm" className="codeTable">
          <thead>
            <tr>
              <th>Key</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>lang_init</td>
              <td>String</td>
              <td>
                {t("응답받을 OMPASS URI의 초기 언어 설정 값 (KR 또는 EN)")}
              </td>
            </tr>
          </tbody>
        </Table>

        {isKr ? (
          <div>
            <CopyBlock
              className="first codeBox"
              style={{ background: "#002c50" }}
              text={`
              {
               "user_id" : "omsecurity",
               "lang_init" : "KR"
              }
            `}
              language={language}
              theme={dracula}
            />
          </div>
        ) : (
          <div>
            <CopyBlock
              className="first codeBox"
              style={{ background: "#002c50" }}
              text={`
            {
             "user_id" : "omsecurity",
             "lang_init" : "EN"
            }
          `}
              language={language}
              theme={dracula}
            />
          </div>
        )}

        <br />
        <h6 className="codeH6">■ Response (JSON)</h6>
        <p style={{ color: "#3c9edb", fontWeight: "bold" }}>
          · {t("인증 성공 시")}
        </p>
        <Table striped bordered hover size="sm" className="codeTable">
          <thead>
            <tr>
              <th>Key</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ompass_uri</td>
              <td>String</td>
              <td>
                {t(
                  "해당 사용자가 OMPASS 에 등록되어 있으면 인증 페이지 URI 반환"
                )}
              </td>
            </tr>
          </tbody>
        </Table>
        <h6
          className="copyblock-message2"
          style={{
            color: "rgb(114, 114, 114)",
            fontSize: "0.8rem",
            fontWeight: "bold",
            textAlign: "right",
          }}
        >
          <img
            width="3.5%"
            src={"/static/images/CopyButton.png"}
            alt="copy버튼"
          />
          {t("(버튼 클릭 시 Copy 가능) ↓")}　
        </h6>
        <CopyBlock
          className="first codeBox"
          style={{ background: "#002c50" }}
          text={`
            {
              "code":200,
              "message" : "ok",
              "data" : {            
                "ompass_uri" : "https://interface-api.ompasscloud.com/register/did/14?do..."
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
export default uafompass;
