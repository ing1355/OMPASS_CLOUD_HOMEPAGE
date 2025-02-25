import React from "react";

import styles from "../../../css/Document.module.css";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from "../../../next-i18next.config";
import { DocumentBox, DocumentImage, DocumentLabel, DocumentLabelNotice, DocumentLayout, DocumentTextBox } from "../../../components/Document/DocumentComponets";

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

function ios(props) {
  const { t, isKr } = useTranslation();
  const document_IOS = true;

  return <DocumentLayout customTitle="iOS">

    <div className={styles["qrcode-mobile"]}>
      <br />
      <img
        width="15%"
        src={"/static/images/QR_ios.png"}
        alt="QR코드"
      />
      <h6
        style={{
          borderBottom: "1px solid black",
          marginTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {t(
          "iOS 전용 앱 스토어에서 원모어패스(OMPASS)를 다운로드하여 설치해야 합니다."
        )}
        <br />
        {t("QR 스캔을 위한 단말의 해당 권한 요청 사항을 반드시")}
        <b style={{ color: "red" }}> {t("허용")} </b>
        {t("으로 합니다.")}
      </h6>
      <br />
    </div>
    <div className={styles["app-url"]}>
      <h6
        style={{
          borderBottom: "1px solid black",
          marginTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {t(
          "iOS 전용 앱 스토어에서 원모어패스(OMPASS)를 다운로드하여 설치해야 합니다."
        )}
        {t("으로 합니다.")}
        {t("앱 다운을 받기를 원하시면")}{" "}
        <a
          href={
            "https://apps.apple.com/kr/app/%EC%9B%90%EB%AA%A8%EC%96%B4%ED%8C%A8%EC%8A%A4-ompass/id1547587526"
          }
          style={{ color: "red" }}
        >
          {t("여기")}
        </a>
        {t("를 눌러주세요.")}
      </h6>
    </div>
    {/* =================================================================== */}
    <DocumentTextBox>
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/app_1_ios.png"
              : "/static/images/app_1_eng_ios.png"
          }
          alt="ios 이미지"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={1} title="해당 앱이 최신이 아닐 경우 업데이트 팝업창이 표시됩니다." />
        <DocumentLabel icon="→" title="최신 업데이트를 진행하고 앱을 실행해주세요." />

      </DocumentBox>
    </DocumentTextBox>

    {/* =================================================================== */}
    <DocumentTextBox>
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/app_2_ios.png"
              : "/static/images/app_2_ios_eng.png"
          }
          alt="ios 이미지"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={2} title="로그인 인증방식을 설정 합니다." />
        <DocumentLabel icon="→" title="얼굴인식, PIN CODE, 패턴 3가지 인증방식 중 2가지 이상 등록해야 합니다." />

      </DocumentBox>
    </DocumentTextBox>

    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/mobileApp_1.png"
              : "/static/images/mobileApp_1_eng.png"
          }
          alt="ios 이미지"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel icon="❸-⑴" labelClassName={`${styles['number']} ${styles['number-2']}`} title="OMPASS 인증을 적용하고 있는 웹페이지에서 ID/PW 입력 후 인터페이스 팝업 창이 뜨면 “OMPASS 앱” 버튼을 선택합니다." />
        <DocumentLabel icon="❸-⑵" labelClassName={`${styles['number']} ${styles['number-2']}`} title="OMPASS 인증장치 등록 QR코드 창이 열립니다." />
        <DocumentLabel icon="❸-⑶" labelClassName={`${styles['number']} ${styles['number-2']}`} title="OMPASS 앱에서 버튼을 누릅니다." />
        <DocumentLabel icon="❸-⑷" labelClassName={`${styles['number']} ${styles['number-2']}`} title="QR 코드를 스캔합니다." />

        <DocumentLabelNotice
          style={{ marginTop: "0rem" }}
        >
          <DocumentLabel icon="-" customTitle={<div className={styles["divP"]}>
            {t(
              "스마트폰을 교체하거나 OMPASS 앱을 재설치 시, OMPASS 인증장치를 서버에 재등록 후 사용하시기 바랍니다."
            )}
            <br />
            {t(
              "(사용자 관리 → 사용자 정보 삭제 시 OMPASS 인증 장치 재 등록이 가능 합니다.)"
            )}
          </div>} />
        </DocumentLabelNotice>
      </DocumentBox>
    </DocumentTextBox>

    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/mobileApp_2.png"
              : "/static/images/mobileApp_2_eng.png"
          }
          alt="ios 이미지"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel icon="❹-⑴" labelClassName={`${styles['number']} ${styles['number-2']}`} title="OMPASS 인증을 적용하고 있는 웹페이지에서 ID/PW 입력 하면 자동으로 알림 전송이 됩니다." />
        <DocumentLabel icon="❹-⑵" labelClassName={`${styles['number']} ${styles['number-2']}`} title="스마트폰에서 OMPASS 인증 알림을 확인합니다." />
        <DocumentLabel icon="❹-⑶" labelClassName={`${styles['number']} ${styles['number-2']}`} title="설정한 인증방식으로 사용자 인증을 완료합니다." />

        <DocumentLabelNotice>
          <DocumentLabel icon="*" title="OMPASS 인증 알림이 오지 않는 경우" />
        </DocumentLabelNotice>
      </DocumentBox>
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/mobileApp_3.png"
              : "/static/images/mobileApp_3_eng.png"
          }
          alt="ios 이미지"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={1} title="“QR코드로 로그인 하기” 버튼을 클릭합니다." />
        <DocumentLabel num={2} title="QR 코드를 생성합니다." />
        <DocumentLabel num={3} title="OMPASS 앱에서 버튼을 누릅니다." />
        <DocumentLabel num={4} title="QR 코드를 스캔합니다." />
      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}
  </DocumentLayout>
}
export default ios;
