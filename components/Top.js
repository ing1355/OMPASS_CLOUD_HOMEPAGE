import React from "react";
import "../css/Top.module.css";
import useTranslation from "../lib/useTranslation";

function Top() {
  const TopButton = () => {
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();
  return (
    <button id="TopButton" onClick={TopButton}>
      {t("Top")}
    </button>
  );
}
export default Top;
