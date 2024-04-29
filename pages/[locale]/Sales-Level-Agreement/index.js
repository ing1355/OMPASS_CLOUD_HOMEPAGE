import React from "react";
import styles from "../../../css/agree.module.css";
import $ from "jquery";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from "../../../next-i18next.config";
import ContentsWithIcon, { SubUlText, WithTitle } from "../../../components/Agree/ContentsComponent";

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

const SubContent = ({ index, title }) => {
  const { t } = useTranslation();
  return <div>
    <label>{index}.</label>
    <p
      onClick={() => {
        var offset = $(`.${index}st`).offset();
        $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
      }}
    >
      {t(title)}
    </p>
  </div>
}

const subTitles = [
  "용어의 정의",
  "고객의 서비스 크레딧 요청",
  "최대 서비스 크레딧",
  "서비스 수준 협약 제외사항"
]

const Contents1 = [
  "“다운타임”은 고객의 모든 사용자에 대해 서비스 장애 발생율이 5%를 초과하는 경우를 의미합니다. 다운타임은 서버 측 장애 발생율을 기준으로 측정됩니다.",
  "“서비스”는 OMPASS FIDO 인증 서비스를 의미합니다.",
  "“월별 가동율”은 30일 계약의 총 시간(분)에서 30일 계약 기간 내에 발생한 다운타임(분)을 빼고, 30일 계약의 총 시간(분)으로 나눈 백분율을 의미합니다.",
  "“서비스 크레딧”은 다음과 같이 계산되며, 서비스 기간 종료 시점에 고객에게 무료로 추가되는 서비스 일수를 의미합니다."
]

function SalesLevelAgreement() {
  const { t } = useTranslation();

  return (
    <div className={styles["agree-text-box2"]}>
      <div className={styles["title-div"]}>
        <ul>{t("서비스 수준 협약")}</ul>
        <ul>
          <select className={styles["select"]}>
            <option value="">{t("시행일 | 2022／06／01")}</option>
          </select>
        </ul>
      </div>
      <h4>
        {t(
          "㈜원모어시큐리티(이하 “회사”)가 운영하는 원모어패스 서비스는 라이선스(이하 “계약”) 기간(30일) 동안 최소 99.9%를 고객이 사용할 수 있도록 보장합니다.(이하 “서비스 수준 협약”). 만약 원모어시큐리티가 서비스 수준 협약을 충족하지 않았다면, 고객은 다음과 같은 서비스 크레딧을 받을 수 있습니다. 원모어시큐리티가 본 서비스 수준 협약을 충족하지 못하는 경우에 대해 고객의 유일하고 배타적인 구제 수단을 명시합니다."
        )}
      </h4>
      <div className={styles["agree-title"]}>
        <h4>{t("본 서비스 수준 협약의 내용은 다음과 같습니다.")}</h4>
        <br />
        {
          subTitles.map((_, ind) => <SubContent index={ind + 1} key={ind} title={_} />)
        }
      </div>

      <WithTitle title="1. 용어의 정의" index={1}>
        {t("다음 용어의 정의는 서비스 수준 협약에 적용됩니다.")}
        {Contents1.map((_, ind) => <SubUlText title={_} key={ind} />)}
        <ul>
          <table className={styles["sales-level-agreement-table"]}>
            <thead>
              <tr>
                <th>{t("월별 가동율")}</th>
                <th>{t("서비스 크레딧")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>＜ 99.9% - ≤ 99.0%</td>
                <td>3</td>
              </tr>
              <tr>
                <td>＜ 99.0% - ≤ 95.0%</td>
                <td>7</td>
              </tr>
              <tr>
                <td>＜ 95.0%</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
        </ul>
      </WithTitle>

      <WithTitle title="2. 고객의 서비스 크레딧 요청" index={2}>
        <ContentsWithIcon noIcon content="위에 설명된 서비스 크레딧을 받으려면 고객이 서비스 크레딧을 받을 자격이 된 날로부터 30일 이내에 이메일(service@omsecurity.kr)로 회사에 알려야 합니다. 이 요구 사항을 준수하지 않으면 서비스 크레딧을 받을 수 있는 고객의 권리가 박탈됩니다." />
      </WithTitle>
      <WithTitle title="3. 최대 서비스 크래딧" index={3}>
        {t(
          "30일 계약 기간 내에 발생하는 모든 다운타임에 대해 회사가 고객에게 발행할 서비스 크레딧의 최대 수는 서비스 15일을 초과할 수 없습니다. 서비스 크레딧은 금전적 금액으로 교환되거나 전환될 수 없습니다."
        )}
      </WithTitle>
      <WithTitle title="4. 서비스 수준 협약 제외사항" index={4}>
        {t(
          "서비스 수준 협약 또는 성능 문제를 제외한 다음과 같은 경우에는 적용되지 않습니다."
        )}
        <br />
        <br />
        <ContentsWithIcon noIcon content="(i) 불가항력적인 사유가 있는 경우" />
        <ContentsWithIcon noIcon content="(ii) 원모어패스의 통제 범위에 속하지 않는 하나 이상의 고객 장비 또는 제3자 장비로 인해 발생하는 경우" />
        <ContentsWithIcon labelClassName={styles["in"]} icon="*" content={"회사는 여기에 조건을 업데이트하여 언제든지 이 서비스 수준 협약을 수정할 수 있는 권리를 보유합니다."} />
      </WithTitle>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default SalesLevelAgreement;
