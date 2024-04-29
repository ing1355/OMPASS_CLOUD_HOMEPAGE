import React from "react";

import "../../../css/Document.module.css";
import Document from "../../../components/Document";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from '../../../next-i18next.config';
import { DocumentBox, DocumentImage, DocumentLabel, DocumentLayout, DocumentTextBox } from "../../../components/Document/DocumentComponets";

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


function ompsslog(props) {
  const { t, isKr } = useTranslation();

  return <DocumentLayout title="OMPASS 로그">

    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentImage>
        <img
          width="100%"
          src={isKr ? "/static/images/document_OMPASSlog_1.png" : "/static/images/document_OMPASSlog_1_eng.png"}
          alt="logs 페이지"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel num={1} title="테이블 필드명으로 검색기능을 제공합니다." />
        <DocumentLabel num={2} title="OMPASS 로그가 표시됩니다." />

      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}

  </DocumentLayout >
}
export default ompsslog;
