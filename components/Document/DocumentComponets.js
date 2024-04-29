import Document from ".";
import styles from "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";
import CircleNumText from "../CircleNumText";
import { DownloadOutlined } from "@ant-design/icons";
import $ from "jquery";

export const DocumentTextBox = ({ children, style }) => {
    return <div className={styles["document-text-box"]} style={style}>
        {children}
    </div>
}

export const DocumentBox = ({ children }) => {
    return <div className={styles["document-box"]}>
        {children}
    </div>
}

export const DocumentImage = ({ children, style }) => {
    return <div className={styles["document-img"]} style={style}>
        {children}
    </div>
}

export const DocumentLabelNotice = ({ children, style }) => {
    return <div className={styles["document-label-notice"]} style={style}>
        {children}
    </div>
}

export const DocumentLabel = ({ num, title, icon, style, noIcon, noClassName, addedClassName, labelClassName, customTitle }) => {
    const { t } = useTranslation();
    const _classNames = noClassName ? '' : (addedClassName ? `${styles["document-label"]} ${styles[addedClassName]}` : `${styles["document-label"]}`)
    return <div className={_classNames} style={style}>
        {!noIcon && <label className={labelClassName ? labelClassName : (icon ? '' : styles["number"])}>{icon ? icon : <CircleNumText index={num} />}&nbsp;</label>}
        {customTitle ? customTitle : <p>{typeof title === 'string' ? t(title) : title}</p>}
    </div>
}

export const DocumentLayout = ({ title, children, customTitle }) => {
    const { t } = useTranslation();
    return <div className={`${styles["document"]}`}>
        <ul>
            <Document />
        </ul>
        <ul className={styles["documentRight"]}>
            <div className={styles["rightContentsBox"]}>
                <ul>
                    <li>
                        <div className={styles["main"]}>
                            <div className={styles["code"]}>
                                <h4>▶ {customTitle || t(title)}</h4>
                                {children}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </ul>
    </div>
}

export const DocumentCustomStyle = {
    color: "#3c9edb",
    fontSize: "1rem",
    fontWeight: "bold",
}

export const DocumentPopBox = ({ title, num, customTitle }) => {
    const { t } = useTranslation();
    return <p
        onClick={() => {
            var offset = $(`.${num}st`).offset();
            $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
        }}
    >
        {customTitle || t(title)}
    </p>
}

export const DocumentPopBoxContainer = ({ title, customTitle, children }) => {
    const { t } = useTranslation();
    return <div className={styles["popbox"]}>
        <h3
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        >
            {customTitle || t(title)}
        </h3>
        {children}
    </div>
}

export const DocumentPdfDownload = ({ src }) => {
    const { t } = useTranslation();
    return <div className={styles["pdf-download"]}>
        <a href={src} download>
            <DownloadOutlined /> &nbsp; {t("PDF 다운받기")}
        </a>
    </div>
}

export const CopyMessage = ({ theme, width }) => {
    const { t } = useTranslation();
    const className = theme === 1 ? "copyblock-message" : "copyblock-message2"
    return <h6
        className={styles[className]}
        style={{
            color: "rgb(114, 114, 114)",
            fontSize: "0.8rem",
            fontWeight: "bold",
            textAlign: "right",
        }}
    >
        <img
            width={width}
            src={"/static/images/CopyButton.png"}
            alt="copy버튼"
        />
        {t("(버튼 클릭 시 Copy 가능) ↓")}&nbsp;&nbsp;&nbsp;&nbsp;
    </h6>
}