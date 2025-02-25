import React, { Fragment } from "react";
import styles from "../../../css/agree.module.css";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from "../../../next-i18next.config";
import ContentsWithIcon, { MainUlText, SubContent, SubUlText, WithTitle } from "../../../components/Agree/ContentsComponent";

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

const subTitles = [
  "개인정보의 수집 · 이용 목적",
  "수집하는 개인정보의 항목",
  "개인정보의 수집방법",
  "개인정보를 제3자에게 제공하는 경우",
  "개인정보의 보유 및 이용 기간",
  "개인정보의 파기절차 및 파기방법",
  "이용자 및 법정대리인의 권리와 그 행사방법",
  "개인정보의 안정성 확보조치에 관한 사항",
  "인터넷 접속정보파일 등 개인정보를 자동으로 수집하는 장치의 설치 · 운영 및 그 거부에 관한 사항",
  "개인정보보호 책임자 및 고충처리 부서"
]

const Contents2 = [
  ["사이트 이용 과정에서 동의 하에 수집되는 관리자 정보", "성, 이름, 이메일, 국가코드, 전화번호, 회사/조직명"],
  ["사이트 이용 과정에서 관리자에 의해 수집되는 서브 관리자 정보", "성, 이름, 이메일, 국가번호, 전화번호"],
  ["서비스 및 사이트 이용 처리 과정에서 자동생성되어 수집되는 관리자 및 서브 관리자 정보", "OMPASS 로그, 정책 로그, 쿠키, 접속 IP정보, 방문 시간"],
  ["서비스 이용 처리 과정에서 자동생성되어 수집되는 사용자 정보", "사용자 아이디, 어플리케이션명, 인증 유형, 쿠키, 접속 IP정보, 로그인 시간"],
  ["신원확인과정에서 수집되는 사용자 정보", "서비스 처음 사용 시 이메일 본인 인증을 진행"]
]
const Contents8 = [
  "관리적 대책：내부관리계획 수립 및 시행, 임직원에 대한 개인정보보호 정기 교육 등",
  "기술적 대책：개인정보처리시스템에 대한 접근권한 관리, 암호화 및 보안프로그램 설치 등",
  "물리적 대책：서버실, 자료보관실 등의 개인정보 보관장소에 대한 접근통제"
]
const Contents10 = [
  "- 경찰청사이버수사국 https：//cyberbureau.police.go.kr/ / 국번없이 182",
  "- 대검찰청사이버수사과 https：//www.spo.go.kr/ / 국번없이 1301",
  "- 개인정보침해신고센터 (한국인터넷진흥원 운영) https：//privacy.kisa.or.kr/ / 국번없이 118",
  "- 개인정보분쟁조정위원회 (한국인터넷진흥원 운영) https：//www.kopico.go.kr/ / 1833-6972"
]

const privacypolicy = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["agree-text-box2"]}>
      <div className={styles["title-div"]}>
        <ul>{t("개인정보처리방침")}</ul>
        <ul>
          <select className={styles["select"]}>
            <option value="">{t("시행일 | 2022／03／01")}</option>
          </select>
        </ul>
      </div>
      <h4>
        {t(
          "'원모어패스'(이하 “OMPASS”) 서비스를 제공하는 ‘원모어시큐리티’(이하 “회사”)는 이용자의 개인정보를 보호하기 위하여 노력하며, ‘정보통신망 이용촉진 및 정보보호’에 관한 법률 및 ‘개인정보보호법’ 등 관련 법률을 준수하고 있습니다. 회사는 회사가 이용자의 개인정보를 어떻게 처리하는지 쉽게 확인할 수 있도록 관련법에 따라 본 개인정보 처리방침을 공개합니다."
        )}
      </h4>
      <div className={styles["agree-title"]}>
        <h4>{t("이 개인정보취급방침의 내용은 다음과 같습니다.")}</h4>
        <br />
        {
          subTitles.map((_, ind) => <SubContent key={ind} index={ind + 1} title={_} />)
        }
      </div>
      <WithTitle title="1. 개인정보의 수집 · 이용 목적" index={1}>
        {t(
          "OMPASS 관리자 사이트 및 앱 서비스 공급, 회원제 서비스 제공에 따른 본인 식별•인증, 서비스 부정이용 방지, 만14세 미만 여부 확인, 고객지원을 위한 연락처 확보, 불만처리 등 민원처리, 회원의 서비스이용에 대한 통계, 광고성 정보 제공, 통계적 특성에 따른 맞춤 서비스 제공"
        )}
      </WithTitle>

      <WithTitle title="2. 수집하는 개인정보의 항목" index={2}>
        {
          Contents2.map((_, ind) => <Fragment key={ind}>
            <MainUlText title1={_[0]} index={ind + 1} />
            <SubUlText ulClassName={`${styles["agree-text-ko"]} ${styles["in"]}`} title={_[1]} />
          </Fragment>)
        }
      </WithTitle>


      <WithTitle title="3. 개인정보의 수집방법" index={3}>
        {t(
          "회원제 서비스 가입, 서비스이용, 전화상담, 이메일상담, 서비스문의, 견적문의"
        )}
      </WithTitle>

      <WithTitle title="4. 개인정보를 제3자에게 제공하는 경우" index={4}>
        {t("없음")}
      </WithTitle>

      <WithTitle title="5. 개인정보의 보유 및 이용 기간" index={5}>
        <MainUlText title1="회사 정책 따른 정보 보유" index={1}/>
        <SubUlText ulClassName={styles["in"]} title="회원제 서비스 이용하는 이용자가 제공한 정보는 회원 가입 시점부터 탈회 시까지 보관됩니다." />
        <SubUlText ulClassName={styles["in"]} title="회원제 서비스 이외의 서비스의 경우, 개인정보 이용 목적이 달성되면 즉시 삭제되며 서비스 별 안내된 보관기간에 따라 보유할 수도 있습니다." />

        <MainUlText title1="관련 법령에 따른 정보 보유 상법 등 관련 법령의 규정에 의하여 보존할 필요성이 있는 경우에는 법령이 정하는 바에 따라 보존합니다." index={2}/>

        <SubUlText ulClassName={styles["in"]} title="계약 또는 청약철회 등에 관한 기록：5년" />
        <SubUlText ulClassName={styles["in"]} title="대금결제 및 재화 등의 공급에 관한 기록：5년" />
        <SubUlText ulClassName={styles["in"]} title="소비자의 불만 또는 분쟁처리에 관한 기록：3년" />
      </WithTitle>

      <WithTitle title="6. 개인정보의 파기절차 및 파기방법" index={6}>
        <li className={styles["enter"]}>
          {t(
            "개인정보 수집 및 이용목적을 달성하거나 그 보유기간이 경과된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다."
          )}
        </li>

        <MainUlText title1="〈개인정보 파기 절차〉" title2="수집된 개인정보는 수집목적 달성 또는 보유기간 종료 후 즉시 파기되며 관련법령에 의해 일정기간 보관하는 경우 별도의 DB로 옮겨 저장하고 보관기간 종료 시 파기됩니다." index={1}/>
        <MainUlText title1="〈개인정보 파기 방법〉" title2="수집된 개인정보는 수집목적 달성 또는 보유기간 종료 후 즉시 파기되며 관련법령에 의해 일정기간 보관하는 경우 별도의 DB로 옮겨 저장하고 보관기간 종료 시 파기됩니다." index={2}/>

        <SubUlText ulClassName={styles["in"]} title="종이에 출력된 개인정보는 분쇄기로 분쇄하여 파기합니다." />
        <SubUlText ulClassName={styles["in"]} title="전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다." />
      </WithTitle>

      <WithTitle title="7. 이용자 및 법정대리인의 권리와 그 행사방법" index={7}>
        {t(
          "이용자는 서비스 해지신청을 통해 제공한 개인정보이용에 관한 동의를 철회할 수 있습니다. ‘회사’는 동의철회, 열람, 수정 요청이 있는 경우 즉시 필요한 조치를 취하고, 특히 정보수정 요청에 대해서는 해당 정보가 정정될 때까지 동 정보를 이용하지 않습니다. OMPASS 서비스를 이용하며 발생하는 모든 개인정보보호 관련 민원은 본 개인정보처리방침에 안내된 연락처를 통해 요청하실 수 있습니다. 만14세 미만 아동의 법정대리인의 법령 상의 권리(아동의 개인정보에 대한 열람, 정정∙삭제, 개인정보처리정지요구권)를 보장하고 있으며 이때 법정대리인의 최소한의 개인정보는 해당 아동으로부터 수집할 수 있습니다."
        )}
      </WithTitle>

      <WithTitle title="8. 개인정보의 안전성 확보조치에 관한 사항" index={8}>
        {t(
          "회사는 개인정보를 처리함에 있어 다음과 같이 안전성 확보에 필요한 관리적, 기술적, 물리적 조치를 취하고 있습니다."
        )}
        <li className={styles["enter"]}>
        </li>
        {Contents8.map((_, ind) => <SubUlText key={ind} title={_} />)}

      </WithTitle>

      <WithTitle title="9. 인터넷 접속정보파일 등 개인정보를 자동으로 수집하는 장치의 설치 · 운영 및 그 거부에 관한 사항" index={9}>
        {t(
          "‘회사’는 이용자에게 개인화된 서비스를 제공하기 위하여 '쿠키(cookie)'를 사용합니다. '쿠키(cookie)'는 HTTP 서버에서 이용자의 브라우저에게 보내는 데이터파일로써 이용자의 기기에 저장됩니다. 쿠키(cookie)에는 사용한 웹사이트의 정보 및 이용자의 개인정보가 담길 수 있습니다. 이용자는 웹브라우저의 옵션을 조정하여 모든 쿠키를 다 받아들이거나, 쿠키가 설치될 때 통지를 보내도록 하거나, 아니면 모든 쿠키를 거부할 수 있습니다."
        )}
      </WithTitle>

      <WithTitle title="10. 개인정보보호 책임자" index={10} className={styles['bottom']}>
        {t("개인정보보호책임자：강누리 과장")}
        <br />
        {t("개인정보보호 관련 문의처：070-4298-3070, partner@omsecurity.kr")}
        <br />
        {t(
          "개인정보에 관하여 궁금한 사항이 있을 경우, 언제든지 위 연락처를 통해 문의하실 수 있습니다."
        )}
        <br />
        {t(
          "기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다."
        )}
        <br />
        {
          Contents10.map((_, ind) => <ContentsWithIcon icon={'-'} content={_} key={ind} />)
        }
      </WithTitle>

    </div>
  );
}
export default privacypolicy;
