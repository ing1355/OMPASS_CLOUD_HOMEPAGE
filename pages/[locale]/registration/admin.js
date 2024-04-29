import React, { useEffect, useRef, useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "../../../css/Registration.module.css";

import axios from "axios";
import useTranslation from "../../../lib/useTranslation";
import { message } from "antd";
import i18nextConfig from "../../../next-i18next.config";
import LinkToLoginPage from "../../../components/LinkToLoginPage";
import { Redirect } from "../../../lib/redirect";
import { isExistDomainApi } from "../../../lib/ApiFunctions";
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

function admin({ isChecked }) {








































































































































































































































































































































































































  
  const { t } = useTranslation();
  const [joinEmail, setJoinEmail] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputDomain, setInputDomain] = useState('');
  const [sended, setSended] = useState(false)
  const [inputCode, setInputCode] = useState('')
  const [codeVerificated, setCodeVerificated] = useState(false)
  const [domainError, setDomainError] = useState(false)
  const [domainLengthError, setDomainLengthError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const timerId = useRef(0)

  // const [inputCountryCode, setInputCountryCode] = useState("kr");
  const [inputFormat, setInputFormat] = useState(null);
  const [inputDialCode, setInputDialCode] = useState(null);

  const codeTest = (value) => {
    const _ = /[0-9]{6,6}/;
    return _.test(value);
  }

  const nameTest = (value) => {
    const _ = /^[^ㄱ-ㅎㅏ-ㅣ]*$|^\s[^ㄱ-ㅎㅏ-ㅣ]*$|^[^ㄱ-ㅎㅏ-ㅣ]*$/;
    const __ = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9 ]{1,16}$/;
    return _.test(value) && __.test(value);
  };

  const passwordTest = (value) => {
    const _ =
      /(?=.*[a-zA-Z])(?=.*[\d])(?=.*[\W]).{8,16}|(?=.*[a-zA-Z])(?=.*[\d]).{10,16}|(?=.*[a-zA-Z])(?=.*[\W]).{10,16}|(?=.*[\d])(?=.*[\W]).{10,16}/;

    return _.test(value);
  };

  const emailTest = (value) => {
    const _ =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return _.test(value);
  };

  const inputEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const inputCodeChange = (e) => {
    setInputCode(e.target.value);
  };

  const inputDomainChange = (e) => {
    setInputDomain(e.target.value);
  };

  const verificationCodeCheck = () => {
    if (!codeTest(inputCode))
      return message.error(`${t("올바르지 않은 인증번호 입니다.")}`);
    axios
      .post(
        `/v2/users/verification-code/verify`,
        {
          email: inputEmail,
          code: inputCode
        }
      )
      .then(({ data }) => {
        const { isValidateCode } = data
        setCodeVerificated(isValidateCode)
        if (!isValidateCode) {
          return message.error(t("ERR_012"))
        }
      }).catch(err => {
        const { code } = err.response.data
        message.error(t(code))
      });
  };

  const sendEmailVerificationCode = () => {
    if (!emailTest(inputEmail)) return message.error(`${t("이메일 형식이 잘못되었습니다.")}`);
    axios
      .post(
        `/v2/users/verification-code`, {
        email: inputEmail
      }
      )
      .then(({ data }) => {
        setSended(true)
        message.success(t("이메일로 인증 코드가 발송되었습니다."))
      });
  }

  const checkDomainFunc = async () => {
    const { data } = await isExistDomainApi(inputDomain)
    const { isExist } = data
    if (isExist) setDomainError(true)
    else setDomainError(false)
  }

  useEffect(() => {
    if (inputDomain) {
      if (timerId.current) clearTimeout(timerId.current)
      setDomainError(false)
      if (inputDomain.length < 3) {
        setDomainLengthError(true)
      } else {
        setDomainLengthError(false)
        timerId.current = setTimeout(() => {
          checkDomainFunc()
        }, 150);
      }
    }
  }, [inputDomain])

  return isChecked ? (
    <>
      <div className={styles["LoginBox"]}>
        <div className={`${styles["loginInputBox"]} ${styles["joinBox"]}${joinEmail ? (" " + styles['hide']) : ""}`}>
          <h1>{t("회원가입")}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const {
                // company,
                domain,
                username,
                email,
                firstName,
                lastName,
                password,
                passwordConfirm,
                mobile,
              } = e.target.elements;
              if (!inputDomain.length) {
                return message.error(t('도메인은 3~30자로 입력해주세요.'))
              }
              if (!firstName.value.length || !lastName.value.length) {
                if (!firstName.value.length) firstName.focus();
                else lastName.focus();
                return message.error(`${t("이름을 입력해주세요.")}`);
              }
              if (!nameTest(firstName.value)) {
                firstName.focus();
                return message.error(
                  `${t(
                    "이름은 영문 대소문자 및 완성된 한글과 숫자만 사용 가능합니다."
                  )}`
                );
              }
              if (!nameTest(lastName.value)) {
                lastName.focus();
                return message.error(
                  `${t(
                    "이름은 영문 대소문자 및 완성된 한글과 숫자만 사용 가능합니다."
                  )}`
                );
              }
              if (!emailTest(email.value)) {
                email.focus();
                return message.error(`${t("이메일 형식이 잘못되었습니다.")}`);
              }
              if (!passwordTest(password.value)) {
                password.focus();
                return message.error(
                  `${t(
                    "비밀번호는 8자 이상 3가지 조합 혹은 10자 이상 2가지 조합이어야 합니다."
                  )}`
                );
              }
              if (password.value !== passwordConfirm.value) {
                passwordConfirm.focus();
                return message.error(`${t("비밀번호가 일치하지 않습니다.")}`);
              }
              // if (
              //   inputFormat &&
              //   mobile.value.length !== inputFormat.length &&
              //   mobile.value.length !== inputDialCode.length + 1
              // ) {
              //   mobile.focus();
              //   return message.error(`${t("전화번호를 완성해주세요.")}`);
              // }
              if (
                inputDialCode &&
                !mobile.value.startsWith("+" + inputDialCode)
              ) {
                if (mobile.value.length < inputDialCode.length + 1)
                  return message.error(`${t("국가 번호를 입력해주세요.")}`);
              }
              // if (!company.value.length) {
              //   company.focus();
              //   return message.error(`${t("회사 이름을 입력해주세요.")}`);
              // }
              // if (!nameTest(company.value)) {
              //   company.focus();
              //   return message.error(
              //     `${t(
              //       "회사이름은 영문 대소문자 및 완성된 한글과 숫자만 사용 가능합니다."
              //     )}`
              //   );
              // }
              setLoading(true)
              axios
                .post(`/v2/users/root/signup`,
                  {
                    username: username.value,
                    password: password.value,
                    lastName: lastName.value,
                    firstName: firstName.value,
                    email: email.value,
                    phone: mobile.value,
                    subDomain: inputDomain,
                    timeZone: "America/Antigua"
                  }
                  // {
                  //   company: company.value,
                  //   email: email.value,
                  //   firstName: firstName.value,
                  //   lastName: lastName.value,
                  //   password: password.value,
                  //   phone: mobile.value,
                  //   country: inputCountryCode.toUpperCase(),
                  //   companyCapacity: "1-10",
                  // }
                )
                .then((data) => {
                  console.log(data)
                  setJoinEmail(true);
                })
                .catch(() => {
                  message.error(`${t("회원가입에 실패하였습니다.")}`);
                });
            }}
          >
            <div className={`${styles['joinName']} ${styles['domain']}`}>
              <div>
                <input
                  name="domain"
                  maxLength="24"
                  placeholder={t("domain")}
                  onChange={inputDomainChange}
                />
                <div className={styles["join-domain-default"]}>
                  .ompasscloud.com
                </div>
              </div>
              <div className={styles["domain-error-text"]}>
                {domainError ? t('해당 도메인은 이미 존재합니다.') : ''}
                {domainLengthError ? t('도메인은 3~30자로 입력해주세요.') : ''}
              </div>
            </div>
            <div className={styles["joinEmail"]}>
              <input
                name="email"
                maxLength="40"
                placeholder={t("인증 메일")}
                disabled={sended}
                onChange={inputEmailChange}
              />
              <button
                type="button"
                className={styles["doubleCheck"]}
                disabled={sended}
                onClick={sendEmailVerificationCode}
              >
                {t("emailCodeRequest")}
              </button>
            </div>
            <div className={styles["joinEmail"]}>
              <input
                name="code"
                maxLength="6"
                placeholder={t("emailCode")}
                disabled={!sended || codeVerificated}
                onChange={inputCodeChange}
              />
              <button
                type="button"
                className={styles["doubleCheck"]}
                disabled={!sended || codeVerificated}
                onClick={verificationCodeCheck}
              >
                {t("확인")}
              </button>
            </div>
            <div className={styles["joinName"]}>
              <input
                type="text"
                minLength="1"
                name="firstName"
                maxLength="16"
                placeholder={t("성")}
              />
              <input name="lastName" maxLength="16" placeholder={t("이름")} />
            </div>
            <input
              name="username"
              maxLength="16"
              placeholder={t("사용자 아이디")}
            />
            <input
              name="password"
              type="password"
              maxLength="16"
              placeholder={t("비밀번호")}
            />
            <input
              maxLength="16"
              name="passwordConfirm"
              type="password"
              placeholder={t("비밀번호 확인")}
            />
            <div className={styles["joinPhone"]}>
              <PhoneInput
                country={"kr"}
                jumpCursorToEnd
                preferredCountries={["us", "kr"]}
                inputProps={{
                  name: "mobile",
                }}
                onChange={(value, countryInfo) => {
                  const { format, dialCode } = countryInfo;
                  if (inputFormat !== format) setInputFormat(format);
                  if (inputDialCode !== dialCode) setInputDialCode(dialCode);
                  // setInputCountryCode(countryInfo.countryCode);
                }}
              />
            </div>
            {/* <input name="company" maxLength="20" placeholder={t("회사이름")} /> */}

            <button type="submit">
              {loading && <div className={styles["loading-container"]}>
                <div className={styles["loading-spinner"]} />
              </div>}
              {t("가입요청")}
            </button>
          </form>

          <p className={`${styles["login-page-go"]} ${styles["login-mobile"]}`}>
            {t("혹시 계정이 있으신가요?")}
            <LinkToLoginPage />
          </p>

        </div>

        <div className={`${styles["loginInputBox"]} ${styles["joinBox"]} ${styles["emailBox"]}` + (joinEmail ? + "" : (" " + styles['hide']))}>
          <img width="20%" src={"/static/images/joinemail.png"} />
          <br />
          <br />

          <h3>{inputDomain} {t("가입이 완료되었습니다.")}</h3>
          {/* <h3>{t("인증 메일이 발송되었습니다.")}</h3> */}

          <p className={styles["join-ko"]}>
            {t("이제부터 생성된 도메인으로 로그인이 가능합니다.")}
          </p>
          {/* <p className={styles["join-ko"]}>
            <b>{inputDomain}</b> {t("으로 메일이 발송되었습니다.")}
          </p>
          
          <p className={styles["join-en"]}>
            {t("으로 메일이 발송되었습니다.")} <b>{inputEmail}</b>
          </p> */}

          {/* <p className={styles["last-p"]} style={{ marginBottom: "0" }}>
            {t(
              "메일함으로 가셔서 ˝인증하기˝ 버튼을 누르시면 최종 회원가입이 완료됩니다."
            )}
          </p> */}
          <button onClick={() => {
            router.push(`https://${inputDomain}.ompasscloud.com`)
          }}>
            {t('로그인 페이지 이동하기')}
          </button>
        </div>
      </div>
    </>
  ) : (
    <Redirect to="/registration" />
  );
}

export default admin;
