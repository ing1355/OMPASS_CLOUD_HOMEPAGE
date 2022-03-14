import Link from "next/link";
import { useRouter } from "next/router";
import languageDetector from "../lib/languageDetector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const LanguageSwitchLink = ({ children, locale, className, ...rest }) => {
  const router = useRouter();
  let href = rest.href || router.asPath;
  let pName = router.pathname;

  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }
  const changeLanguage = () => {
    languageDetector.cache(locale);
    document.documentElement.setAttribute("lang", locale);
  };

  return (
    <Link href={href} passHref>
      <a className={className} onClick={changeLanguage}>
        {/* <FontAwesomeIcon className="globalIcon" icon={faGlobe} /> */}
        &nbsp;
        {children ? children : <li>{locale === "ko" ? "KO" : "EN"}</li>}
      </a>
    </Link>
  );
};

export default LanguageSwitchLink;
