import React from "react";
import "../../css/git_demo.module.css";
import useTranslation from "../../lib/useTranslation";

function Git_Demo(props) {
    const { t } = useTranslation();

    return <a className="git-demo-container" href="https://github.com/OMSecurity/OMPASS_DEMO" target="_blank" name={"┗ " + t("OMPASS API를 적용한 DEMO의 소스코드를 제공하고 있습니다.")}>
        {t('데모 보기')}
    </a>
}
export default Git_Demo;