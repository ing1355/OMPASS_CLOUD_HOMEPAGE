import React from "react";

import Userrest from "../../../components/Document/user-rest";
import Userresetompass from "../../../components/Document/user-reset-ompass";

import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from '../../../next-i18next.config';
import { DocumentLayout, DocumentPdfDownload, DocumentPopBox, DocumentPopBoxContainer } from "../../../components/Document/DocumentComponets";

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

function restapiuserreset(props) {
  const { isKr } = useTranslation();

  return <>
    <DocumentLayout title="OMPASS 등록 초기화">
      <DocumentPdfDownload src={isKr ? "/static/pdf/REST_API_OMPASS 등록 초기화.pdf" : "/static/pdf/REST_API_Initializing OMPASS registration.pdf"} />
      <Userrest />

      <Userresetompass />


    </DocumentLayout>
    <DocumentPopBoxContainer title="OMPASS 등록 초기화">
      <DocumentPopBox num={1} title="OMPASS 등록 초기화란?" />
      <DocumentPopBox num={2} title="OMPASS 등록 초기화 API" />
    </DocumentPopBoxContainer>
  </>
}
export default restapiuserreset;
