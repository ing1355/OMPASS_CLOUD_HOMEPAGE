import React from "react";
import useTranslation from "../lib/useTranslation";
import "../css/Footer.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import LinkComponent from "./Link";
import { useRouter } from "next/router";

function Foooter() {
  const { t, isKr } = useTranslation();
  const router = useRouter();
  return (
    <div className="footerBox">
      <div className="footerSubBox">
        <ul>
          <li>
            <div className="footerTextBox">
              <h2>
                <LinkComponent className="footer" href="/">
                  {t("원모어패스")}
                </LinkComponent>
              </h2>
            </div>
          </li>
          <li>
            <div className="footerTextBox footerTextBox-pc">
              <p>{t("상호명：(주)원모어시큐리티 | 대표자：김민식")}</p>
              <p>
                {t("사업자 번호：735-88-01175 | 통신판매신고번호：000000000")}
              </p>
              <p>
                {t("TEL：+82 70 4298 3070 | E-Mail：service@omsecurity.kr")}
              </p>

              <p>
                {t(
                  "세종특별자치시 한누리대로 2150, 605호 (보람동, 스마트허브 1동)"
                )}
              </p>
            </div>

            <div className="footerTextBox-mobile">
              <p>{t("상호명：(주)원모어시큐리티")}</p>
              <p>{t("대표자：김민식")}</p>
              <p>{t("사업자 번호：735-88-01175")}</p>
              <p>{t("통신판매신고번호：000000000")}</p>
              <p>TEL：+82 70 4298 3070</p>
              <p>E-Mail：service@omsecurity.kr</p>

              <p>
                {t(
                  "세종특별자치시 한누리대로 2150, 605호 (보람동, 스마트허브 1동)"
                )}
              </p>
            </div>
          </li>
          <li>
            <div className="footerTextBox2">
              <p className="agree">
                <LinkComponent className="footer" href="/terms-of-Service">
                  {t("이용약관")}
                </LinkComponent>
              </p>

              <p className="agree">
                <LinkComponent className="footer" href="/privacy-policy">
                  {t("개인정보 처리 방침")}
                </LinkComponent>
              </p>

              <p className="copyRight">
                © OneMoreSecurity Inc. All Rights Reserved.
              </p>
            </div>
          </li>
          <li className="on-Premise-div">
            {router.route.includes("/on-premise") ? (
              <LinkComponent href="/">
                <button className="green-color">
                  {t("클라우드형으로 가기")}
                  <ArrowRightOutlined />
                </button>
              </LinkComponent>
            ) : (
              <LinkComponent href="/on-premise">
                <button>
                  {t("구축형으로 가기")}
                  <ArrowRightOutlined />
                </button>
              </LinkComponent>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Foooter;
