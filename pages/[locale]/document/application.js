import React from "react";
import styles from '../../../css/Document.module.css'
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from '../../../next-i18next.config';
import { DocumentImage, DocumentLabel, DocumentLayout, DocumentTextBox, DocumentBox, DocumentCustomStyle } from "../../../components/Document/DocumentComponets";

const getPathSlugs = () => {
  return i18nextConfig.i18n.locales.map(locale => ({
    params: {
      locale
    }
  }))
}

export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();
  return {
    paths: pathsWithLocale,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params
    }
  }
}

function application(props) {
  const { t, isKr } = useTranslation();

  return <DocumentLayout title="어플리케이션">

    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentImage>
        <img
          width="100%"
          src={isKr ? "/static/images/document_application_1.png" : "/static/images/document_application_1_eng.png"}
          alt="어플리케이션"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel num={1} title="테이블 필드명으로 검색기능을 제공합니다." />
        <DocumentLabel num={2} title="어플리케이션의 이름, 상태, 도메인, 리다이렉트 URI를 제공합니다." />
        <DocumentLabel num={3} title="어플리케이션 등록, 수정, 삭제가 가능합니다." />
      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="↓" title="체크 후 수정버튼 클릭 시" style={DocumentCustomStyle} />
      <DocumentImage>
        <img
          width="100%"
          src={isKr ? "/static/images/document_application_2.png" : "/static/images/document_application_2_eng.png"}
          alt="어플리케이션"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel num={1} title="어플리케이션의 이름 입력, 중복 체크를 합니다." />
        <DocumentLabel num={2} title="비밀 키는 어플리케이션을 등록시 자동으로 생성 됩니다." />
        <DocumentLabel num={3} title="새로운 비밀 키를 재발급 해줍니다." />

        <div
          className={styles["document-label-notice"]}
          style={{ marginTop: "0rem" }}
        >
          <DocumentLabel icon="-" title="비밀키를 재발급할 경우 기존에 사용하던 비밀키를 사용하실 수 없습니다." noClassName/>
          <DocumentLabel icon="-" title="서비스하고 있는 어플리케이션에서 기존 비밀키를 사용 중일 때 비밀키를 재발급 하면 기존 비밀키 사용이 불가하여 서비스 장애가 발생할 수 있으니 주의하시기 바랍니다." noClassName/>
        </div>

        <DocumentLabel num={4} title="사용하고자 하는 도메인 주소를 입력합니다." />
        <DocumentLabel num={5} title="OMPASS 인증 후 리다이렉트 될 URI를 입력합니다." />
        <DocumentLabel num={6} title="정책을 설정할 수 있습니다." />
        <DocumentLabel num={7} title="수정된 내용이 반영됩니다." />
      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="↓" title="등록 버튼 클릭 시" style={DocumentCustomStyle} />
      <DocumentImage>
        <img
          width="100%"
          src={isKr ? "/static/images/document_application_4.png" : "/static/images/document_application_4_eng.png"}
          alt="어플리케이션"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel num={1} title="등록 하고자 하는 어플리케이션 이름을 입력, 중복 체크를 합니다." />
        <DocumentLabel num={2} title="등록 할 도메인 주소를 입력합니다." />
        <DocumentLabel num={3} title="OMPASS 인증 후 리다이렉트 될 URI를 입력합니다." />
        <DocumentLabel num={4} title="등록 할 정책을 선택합니다." />

      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}

  </DocumentLayout>
}
export default application;
