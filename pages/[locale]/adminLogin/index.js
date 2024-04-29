import i18nextConfig from "../../../next-i18next.config";
import styles from '../../../css/adminLogin.module.css'
import LinkComponent from "../../../components/Link";
import { useEffect, useRef, useState } from "react";
import { isExistDomainApi } from "../../../lib/ApiFunctions";
import useTranslation from "../../../lib/useTranslation";
import { useRouter } from "next/router";

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

const adminLogin = () => {
  const [domain, setDomain] = useState('')
  const [checked, setChecked] = useState(false)
  const [noticeError, setNoticeError] = useState(false)
  const timerId = useRef(0)
  const router = useRouter()
  const { t } = useTranslation();

  const checkDomainFunc = async () => {
    const { data } = await isExistDomainApi(domain)
    const { isExist } = data
    setChecked(isExist)

    if (!isExist) {
      setNoticeError(!isExist)
    } else {
      setNoticeError(!isExist)
    }
  }

  useEffect(() => {
    if (domain) {
      if (timerId.current) clearTimeout(timerId.current)
      timerId.current = setTimeout(() => {
        checkDomainFunc()
      }, 150);
    } else {
      setChecked(false)
    }
  }, [domain])

  return <div className={styles["container"]}>
    <div className={styles["logo-container"]}>
      <img src={"/static/images/ompass_icon.png"} />
      <div className={styles["logo-text"]}>
        OMPASS
      </div>
    </div>
    <div className={styles["contents-container"]}>
      <div className={styles["contents-help-text"]}>
        {t('조직 도메인을 입력해주세요.')}
      </div>
      <form onSubmit={e => {
        e.preventDefault()
        router.push(`https://${domain}.ompasscloud.com`)
        // window.location.href = `https://${domain}.ompasscloud.com`
      }}>
        <div className={styles["login-input-container"]}>
          <input maxLength={28} value={domain} onChange={e => {
            setDomain(e.target.value)
            if (checked) {
              setChecked(false)
            }
          }} />
          <div className={styles["default-input-text"]}>
            ompasscloud.com
          </div>
        </div>
        <div className={styles["error-text-container"]}>
          {noticeError ? t('일치하는 도메인이 존재하지 않습니다.') : ''}
        </div>
        <button disabled={!checked}>
          {t('다음')}
        </button>
        <br />
      </form>
      <div className={styles["registration-container"]}>
        <LinkComponent href="/registration">
          {t('회원가입')}
        </LinkComponent>
      </div>
    </div>
  </div>
}

export default adminLogin