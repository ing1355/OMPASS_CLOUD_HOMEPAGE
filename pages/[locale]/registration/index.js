import React from "react";
import $ from "jquery";
import styles from "../../../css/Registration.module.css";

import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from "../../../next-i18next.config";
import LinkToLoginPage from "../../../components/LinkToLoginPage";
import LinkComponent from "../../../components/Link";
import Agree1 from "../../../components/Agree/Agree1";
import Agree2 from "../../../components/Agree/Agree2";

const getPathSlugs = () => {
  return i18nextConfig.i18n.locales.map((locale) => ({
    params: {
      locale,
    },
  }));
};

export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();
  return {
    paths: pathsWithLocale,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
function Registration({setIsChecked}) {
  const { t } = useTranslation();
  
  function allCheck(e) {
    if (e.target.checked) {
      document.querySelectorAll(".check_all_list").forEach(function (v, i) {
        v.checked = true;
      });
    } else {
      document.querySelectorAll(".check_all_list").forEach(function (v, i) {
        v.checked = false;
      });
    }
  }
  function checkAllList(e) {
    let checkCount = 0;
    document.querySelectorAll(".check_all_list").forEach(function (v, i) {
      if (v.checked === false) {
        checkCount++;
      }
    });

    if (checkCount > 0) {
      document.getElementById("allCheck").checked = false;
    } else if (checkCount === 0) {
      document.getElementById("allCheck").checked = true;
    }
  }

  const agreeCheck = (e) => {
    if (!$("input:checkbox[name=pointCheck1]").is(":checked")) {
      e.preventDefault()
      alert(t("이용약관과 개인정보 수집 및 이용에 대한 안내 모두 동의해주세요."));
    } else {
      setIsChecked(true);
    }
  };

  return <div className={styles['LoginBox']}>
      <div className={styles['agree-box']}>
        <h3>OMPASS</h3>
        
        <ul className={styles["agree-column-all"]}>
          <li className={styles["column-box"]}>
            <div>
              <input
                type="checkbox"
                name="pointCheck1"
                id="allCheck"
                onClick={() => {
                  allCheck(event);
                }}
              />
            </div>
            <div>
              <label>
                {t(
                  "원모어패스의 이용약관, 개인정보 수집 및 이용(선택)에 모두 동의합니다."
                )}
              </label>
            </div>
          </li>
        </ul>

        <ul className={styles["agree-column"]}>
          <li className={styles["column-box"]}>
            <div>
              <input
                className={"check_all_list"}
                type="checkbox"
                name="pointCheck2"
                id="agree1"
                onClick={checkAllList}
              />
            </div>
            <div>
              <label htmlFor="agree1">
                {t("이용약관 동의")} <b>{t("(필수)")}</b>
              </label>
            </div>
          </li>
          <li className={styles["agree-text"]}>
            <Agree1 />
          </li>
        </ul>

        <ul className={styles["agree-column"]}>
          <li className={styles["column-box"]}>
            <div>
              <input
                className={"check_all_list"}
                type="checkbox"
                name="pointCheck3"
                id="agree2"
                onClick={checkAllList}
              />
            </div>
            <div>
              <label htmlFor="agree2">
                {t("개인정보 수집 및 이용 동의")} <b>{t("(필수)")}</b>
              </label>
            </div>
          </li>
          <li className={styles["agree-text"]}>
            <Agree2 />
          </li>
        </ul>

        <LinkComponent href='/registration/admin'>
          <button onClick={agreeCheck}>{t("확인")}</button>
        </LinkComponent>

        <p className={`${styles["login-page-go"]} ${styles["login-mobile"]}`}>
          {t("혹시 계정이 있으신가요?")}
          <LinkToLoginPage />
        </p>
      </div>

      <p className={`${styles["login-page-go"]} ${styles["login-pc"]}`}>
        {t("혹시 계정이 있으신가요?")}
        <LinkToLoginPage />
      </p>
    </div>;
}
export default Registration;
