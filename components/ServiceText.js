import styles from "../css/ServiceText.module.css";
import useTranslation from "../lib/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
  } from "@fortawesome/free-solid-svg-icons";

const ServiceText = () => {
    const { t, isKr } = useTranslation();
    return <div className={`${styles["contentsBox6"]} ${styles["contentsBox7"]}`}>
        <div className={styles["supportContents3"]}>
            <ul>
                <h1>{t("기술지원")}</h1>
                <p>{t("고객 중심의 신속 대응 서비스를 제공해드립니다.")}</p>

                <div>
                    {!isKr && <p>{t("로 문의해주세요.")}</p>}
                    <a
                        style={{
                            textDecoration: "none",
                            color: "#fff",
                        }}
                        href="mailto:service@omsecurity.kr"
                    >
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className={styles["supportfontawsome"]}
                        />{" "}
                        {t("service@omsecurity.kr")}
                    </a>
                    {isKr && <p>{t("로 문의해주세요.")}</p>}
                </div>
            </ul>
        </div>
    </div>
}

export default ServiceText