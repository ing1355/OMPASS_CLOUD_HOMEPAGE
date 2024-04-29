import React from "react";

import styles from "../../../css/Document.module.css";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from '../../../next-i18next.config';
import { DocumentBox, DocumentCustomStyle, DocumentImage, DocumentLabel, DocumentLayout, DocumentTextBox } from "../../../components/Document/DocumentComponets";

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

function log() {
  const { t, isKr } = useTranslation();

  return <DocumentLayout title="정책 로그">

    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentImage>
        <img
          width="100%"
          src={isKr ? "/static/images/document_policy_log_1.png" : "/static/images/document_policy_log_1_eng.png"}
          alt="logs 페이지"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel num={1} title="테이블 필드명으로 검색기능을 제공합니다." />
        <DocumentLabel num={2} title="정책 로그가 표시됩니다." />
        <DocumentLabel num={3} title="변경된 정책 로그를 자세하게 볼 수있습니다." />
      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}
    <DocumentTextBox>
      <DocumentLabel icon="↓" title="상세보기 클릭 시" style={DocumentCustomStyle} />
      <DocumentImage>
        <img
          width="70%"
          src={isKr ? "/static/images/pocliy_log_2.png" : "/static/images/pocliy_log_2_eng.png"}
          alt="logs 페이지"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel icon="*" labelClassName={styles["number"]} title="변경 전/변경 후 정책 로그가 반영됩니다." />

      </DocumentBox>
    </DocumentTextBox>
  </DocumentLayout >
}
export default log;
