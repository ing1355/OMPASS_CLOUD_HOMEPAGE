import React from "react";
import "../../css/Document.module.css";
import useTranslation from "../../lib/useTranslation";

function start(props) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="guide restapi-div 2st">
        <h5>{t("준비 사항")}</h5>
        <p>
          {t(
            "OMPASS 관리자 페이지에서 어플리케이션을 등록과 동시에 자동 할당된 Secret Key 정보를 확인하시기 바랍니다."
          )}
        </p>
        <div className="notic-2">
          <p>
            {t(
              "Secret Key가 외부에 노출될 경우 보안 문제가 발생하오니 절대 노출되지 않게 주의해야 합니다."
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
export default start;
