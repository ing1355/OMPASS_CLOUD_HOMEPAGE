import React from "react";
import styles from "../../css/Cloud_Title.module.css";
import Contents from "./Main_Contents";
import LinkComponent from "../Link";
import useTranslation from "../../lib/useTranslation";
import { DownloadOutlined, SelectOutlined } from "@ant-design/icons";

function Main() {
  const { t, isKr } = useTranslation();
  return (
    <header>
      <div className={styles["cloudHeader"]}>
        <div className={styles["MainBgBox"]}></div>
        <div className={styles["MainTitle"]}>
          <ul>
            <li>
              <h1>
                {t("원모어패스 (클라우드)")}
                <br />
                {t("차세대 통합 인증 솔루션(FIDO 인증)")}
              </h1>

              <p className={styles["title-p"]}>
                {t("원모어패스는 FIDO를 기반으로 하는 인증 플랫폼 입니다.")}
              </p>
            </li>
            <li className={styles["Certification-img-li"]}>
              <div>
                {isKr ? (
                  <img src={"/static/images/Certification.png"} />
                ) : (
                  <img src={"/static/images/Certification_eng.png"} />
                )}
              </div>
            </li>

            <li className={styles["Certification-img-li-mobile"]}>
              <div>
                {isKr ? (
                  <img src={"/static/images/Certification_mobile.png"} />
                ) : (
                  <img src={"/static/images/Certification_eng_mobile.png"} />
                )}
              </div>
            </li>

            <li className={styles["button-li"]}>
              <LinkComponent href="/registration">
                <SelectOutlined />
                &nbsp;&nbsp; <p>{t("체험하기")}</p>
              </LinkComponent>

              <a
                href={
                  isKr
                    ? "/static/pdf/원모어패스 클라우드형 브로셔.pdf"
                    : "/static/pdf/OMPASS_Cloud_Brochure.pdf"
                }
                download
              >
                <DownloadOutlined /> &nbsp;&nbsp; <p>{t("브로셔 다운")}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Contents />
    </header>
  );
}
export default Main;
