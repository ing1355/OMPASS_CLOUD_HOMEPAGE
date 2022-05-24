import React, { useState } from "react";
import "../../../css/Registration.module.css";

import "intl-tel-input/build/css/intlTelInput.css";
import "react-intl-tel-input/dist/main.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import axios from "axios";
import useTranslation from "../../../lib/useTranslation";
import { message } from "antd";
import "antd/dist/antd.css";
import i18nextConfig from "../../../next-i18next.config";
import LinkToLoginPage from "../../../components/LinkToLoginPage";
import { Redirect } from "../../../lib/redirect";

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
  const [inputEmail, setInputEmail] = useState(null);
  const [isExist, setIsExist] = useState(false);

  const [inputCountryCode, setInputCountryCode] = useState("kr");
  const [inputFormat, setInputFormat] = useState(null);
  const [inputDialCode, setInputDialCode] = useState(null);

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

  const isExistCheckTrigger = () => {
    if (!emailTest(inputEmail))
      return message.error(`${t("이메일 형식이 잘못되었습니다.")}`);
    axios
      .get(
        `${process.env.apiRoute}/v1/admins/existence/${inputEmail}`
      )
      .then(({ data }) => {
        const { duplicate } = data.data;
        if (duplicate) {
          // 중복 존재
          setIsExist(false);
          message.error(`${t("중복되는 이메일이 존재합니다.")}`);
        } else {
          // 중복 없음
          setIsExist(true);
          message.success(`${t("사용 가능한 이메일입니다.")}`);
        }
      });
  };

  return isChecked ? (
    <>
      <div className="LoginBox">
        <div className={"loginInputBox joinBox" + (joinEmail ? " hide" : "")}>
          <h1>{t("회원가입")}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const {
                company,
                email,
                firstName,
                lastName,
                password,
                passwordConfirm,
                mobile,
              } = e.target.elements;
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
              if (!isExist)
                return message.error(`${t("중복확인은 필수입니다.")}`);
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
              if (
                inputFormat &&
                mobile.value.length !== inputFormat.length &&
                mobile.value.length !== inputDialCode.length + 1
              ) {
                mobile.focus();
                return message.error(`${t("전화번호를 완성해주세요.")}`);
              }
              if (
                inputDialCode &&
                !mobile.value.startsWith("+" + inputDialCode)
              ) {
                if (mobile.value.length < inputDialCode.length + 1)
                  return message.error(`${t("국가 번호를 입력해주세요.")}`);
              }
              if (!company.value.length) {
                company.focus();
                return message.error(`${t("회사 이름을 입력해주세요.")}`);
              }
              if (!nameTest(company.value)) {
                company.focus();
                return message.error(
                  `${t(
                    "회사이름은 영문 대소문자 및 완성된 한글과 숫자만 사용 가능합니다."
                  )}`
                );
              }
              axios
                .post(`${process.env.apiRoute}/v1/admins`, {
                  company: company.value,
                  email: email.value,
                  firstName: firstName.value,
                  lastName: lastName.value,
                  password: password.value,
                  phone: mobile.value,
                  country: inputCountryCode.toUpperCase(),
                  companyCapacity: "1-10",
                })
                .then(() => {
                  message.success(`${t("이메일을 발송했습니다.")}`);
                  setJoinEmail(true);
                })
                .catch(() => {
                  message.error(`${t("회원가입에 실패하였습니다.")}`);
                });
            }}
          >
            <div className="joinName">
              <input
                type="text"
                minLength="1"
                name="firstName"
                maxLength="16"
                placeholder={t("성")}
              />
              <input name="lastName" maxLength="16" placeholder={t("이름")} />
            </div>
            <div className="joinEmail">
              <input
                name="email"
                maxLength="40"
                placeholder={t("이메일")}
                onChange={inputEmailChange}
              />
              <button
                type="button"
                className="doubleCheck"
                onClick={isExistCheckTrigger}
              >
                {t("중복확인")}
              </button>
            </div>
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
            <div className="joinPhone">
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
                  setInputCountryCode(countryInfo.countryCode);
                }}
              />
            </div>
            <input name="company" maxLength="20" placeholder={t("회사이름")} />

            <button type="submit">{t("인증메일 발송")}</button>
          </form>

          {!joinEmail && (
            <p className="login-page-go login-mobile">
              {t("혹시 계정이 있으신가요?")}
              <LinkToLoginPage />
            </p>
          )}
        </div>

        <div
          className={
            "loginInputBox joinBox emailBox" + (joinEmail ? "" : " hide")
          }
        >
          <img width="20%" src={"/static/images/joinemail.png"} />
          <br />
          <br />
          <h3>{t("인증 메일이 발송되었습니다.")}</h3>

          <p className="join-ko">
            <b>{inputEmail}</b> {t("으로 메일이 발송되었습니다.")}
          </p>
          <p className="join-en">
            {t("으로 메일이 발송되었습니다.")} <b>{inputEmail}</b>
          </p>

          <p className="last-p" style={{ marginBottom: "0" }}>
            {t(
              "메일함으로 가셔서 ˝인증하기˝ 버튼을 누르시면 최종 회원가입이 완료됩니다."
            )}
          </p>
          {joinEmail && (
            <p className="login-page-go login-mobile">
              {t("혹시 계정이 있으신가요?")}
              <LinkToLoginPage />
            </p>
          )}
        </div>

        <p className="login-page-go login-pc">
          {t("혹시 계정이 있으신가요?")}
          <LinkToLoginPage />
        </p>
      </div>
    </>
  ) : (
    <Redirect to="/registration" />
  );
}

export default admin;
