import React from "react";
import styles from "../css/Top.module.css";
import useTranslation from "../lib/useTranslation";

function Top() {
  const TopButton = () => {
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();
  return (
    <button className={styles["TopButton"]} onClick={TopButton}>
      {t("Top")}
    </button>
  );
}
export default Top;
