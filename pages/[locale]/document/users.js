import React from "react";

import styles from "../../../css/Document.module.css";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from "../../../next-i18next.config";
import { DocumentBox, DocumentCustomStyle, DocumentImage, DocumentLabel, DocumentLayout, DocumentTextBox } from "../../../components/Document/DocumentComponets";

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

function users() {
  const { t, isKr } = useTranslation();

  return <DocumentLayout title="사용자 관리">

    {/* =================================================================== */}
    <DocumentTextBox>
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/document_users_1.png"
              : "/static/images/document_users_1_eng.png"
          }
          alt="user 페이지"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={1} title="전체 사용자 수, 등록된 사용자 수, 등록되지 않은 사용자 수, OMPASS 인증 바이패스 사용자 수가 제공합니다." />
        <DocumentLabel num={2} title="테이블 필드명으로 검색기능을 제공합니다." />
        <DocumentLabel num={3} title="사용자 상세 내용을 제공합니다." />
        <DocumentLabel num={4} title={<>
          {t("OMPASS 인증 바이패스를 On/Off할 수 있습니다.")}
          <br />
          {t(
            "(On 일때：어플리케이션에 설정된 정책을 무시하고, 등록 된 이메일로 인증하여 로그인)"
          )}
        </>} />
        <DocumentLabel num={5} title="현재 사용자 목록을 .CSV 파일로 다운로드 할 수 있습니다." />
        <DocumentLabel num={6} title="현재 사용자 목록을 .CSV 파일로 업로드 할 수 있습니다." />

      </DocumentBox>
    </DocumentTextBox>

    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="↓" title="사용자 목록 다운로드 클릭 시" style={DocumentCustomStyle}/>
      <DocumentImage style={{ marginTop: "1rem" }}>
        <img
          width="50%"
          style={{ margin: isKr ? "" : "1rem 0" }}
          src={
            isKr
              ? "/static/images/document_users_1_3.png"
              : "/static/images/document_users_1_3_eng.png"
          }
          alt="user 페이지"
        />
      </DocumentImage>
      <DocumentLabel icon="❺-⑴" labelClassName={`${styles["number"]} ${styles["number-2"]}`} title="다운로드할 어플리케이션을 선택합니다." />
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/document_users_1_2.png"
              : "/static/images/document_users_1_2_eng.png"
          }
          alt="user 페이지"
        />
      </DocumentImage>
      <DocumentLabel icon="❺-⑵" labelClassName={`${styles["number"]} ${styles["number-2"]}`} title="사용자 목록이 있는 .CSV 파일을 다운로드 할 수 있습니다." />

    </DocumentTextBox>
    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="↓" title="사용자 목록 업로드 클릭 시" style={DocumentCustomStyle} />

      <DocumentImage style={{ marginTop: "1rem" }}>
        <img
          width="50%"
          src={
            isKr
              ? "/static/images/document_users_1_1.png"
              : "/static/images/document_users_1_1_eng.png"
          }
          alt="user 페이지"
        />
      </DocumentImage>
      <DocumentLabel icon="❺-⑴" labelClassName={`${styles["number"]} ${styles["number-2"]}`} title={<>
        {t("사용자 목록을 .CSV 파일로 업로드 하여")}
        {t("사용자 등록을 할 수 있습니다.")}
        <br />
        {t(
          "( 업로드를 위해 ID 입력은 필수이며 나머지는 선택사항입니다.)"
        )}
      </>} />

    </DocumentTextBox>

    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="↓" title="사용자 목록 클릭 시" style={DocumentCustomStyle} />
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/document_users_2.png"
              : "/static/images/document_users_2_eng.png"
          }
          alt="user 페이지"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={1} title="사용자 디바이스 정보를 제공합니다." />
        <DocumentLabel num={2} title={<>
          {t(
            "OMPASS 인증 바이패스의 활성화를 위해서는 이메일 입력이 필수입니다."
          )}
          <br />(
          {t(
            "OMPASS 인증 바이패스는 기본으로 비활성화가 적용됩니다."
          )}
          )
        </>} />
        <DocumentLabel num={3} title={<>
          {t(
            "삭제 버튼을 누르면 해당 사용자의 정보 (OMPASS 등록 정보 및 사용자의 모든 정보)가 삭제됩니다."
          )}
          <br />
          {t(
            "(사용자가 스마트폰을 교체하거나 OMPASS 앱을 재 설치 시 사용자 정보를 삭제 해 줍니다.)"
          )}
        </>} />


      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}
  </DocumentLayout>
}
export default users;
