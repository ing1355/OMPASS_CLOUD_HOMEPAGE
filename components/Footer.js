import React from "react";
import useTranslation from "../lib/useTranslation";
import styles from "../css/Footer.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import LinkComponent from "./Link";
import { useRouter } from "next/router";

const LinkText = ({ title, to }) => {
  const { t } = useTranslation();
  return <p className={styles["agree"]}>
    <LinkComponent className={styles["footer"]} href={to}>
      {t(title)}
    </LinkComponent>
  </p>
}

function Foooter() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className={styles["footerBox"]}>
      <div className={styles["footerSubBox"]}>
        <ul>
          <li>
            <div className={styles["footerTextBox"]}>
              <h2>
                <LinkComponent className={styles["footer"]} href="/">
                  {t("원모어패스")}
                </LinkComponent>
              </h2>
            </div>
          </li>
          <li>
            <div className={`${styles["footerTextBox"]} ${styles["footerTextBox-pc"]}`}>
              <p>{t("상호명：(주)원모어시큐리티 | 대표자：김민식")}</p>
              <p>
                {t(
                  "사업자 번호：735-88-01175 | 통신판매신고번호：제 2022-세종-0150"
                )}
              </p>
              <p>
                {t("TEL：+82 70 4298 3070 | E-Mail：service@omsecurity.kr")}
              </p>

              <p>
                {t(
                  "세종특별자치시 한누리대로 2150, 601호 (보람동, 스마트허브 1동)"
                )}
              </p>
            </div>

            <div className={styles["footerTextBox-mobile"]}>
              <p>{t("상호명：(주)원모어시큐리티")}</p>
              <p>{t("대표자：김민식")}</p>
              <p>{t("사업자 번호：735-88-01175")}</p>
              <p>{t("통신판매신고번호：제 2022-세종-0150")}</p>
              <p>TEL：+82 70 4298 3070</p>
              <p>E-Mail：service@omsecurity.kr</p>

              <p>
                {t(
                  "세종특별자치시 한누리대로 2150, 601호 (보람동, 스마트허브 1동)"
                )}
              </p>
            </div>
          </li>
          <li>
            <div className={styles["footerTextBox2"]}>
              <LinkText title="이용약관" to="/terms-of-Service" />
              <LinkText title="개인정보처리방침" to="/privacy-policy" />
              <LinkText title="서비스 수준 협약" to="/Sales-Level-Agreement" />
              <p className={styles["copyRight"]}>
                © OneMoreSecurity Inc. All Rights Reserved.
              </p>
            </div>
          </li>
          <li className={styles["on-Premise-div"]}>
            {router.route.includes("/on-premise") ? (
              <LinkComponent href="/">
                <button className={styles["green-color"]}>
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
