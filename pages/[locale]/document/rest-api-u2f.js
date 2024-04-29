import React from "react";
import Start from "../../../components/Document/start";
import Ompassprocess from "../../../components/Document/ompass-process";
import Ompass from "../../../components/Document/ompass";
import Ompasspopup from "../../../components/Document/ompass-popup";
import AuthNtoken1 from "../../../components/Document/authN-token-1";
import AuthNtoken2 from "../../../components/Document/authN-token-2";
import Error from "../../../components/Document/error";
import U2f from "../../../components/Document/u2f";

import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from "../../../next-i18next.config";
import { DocumentLayout, DocumentPdfDownload, DocumentPopBox, DocumentPopBoxContainer } from "../../../components/Document/DocumentComponets";

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

function restapi() {
  const { isKr } = useTranslation();

  return <><DocumentLayout customTitle="U2F">
    <DocumentPdfDownload src={isKr
      ? "/static/pdf/REST API_U2F.pdf"
      : "/static/pdf/REST API_U2F_eng.pdf"} />

    <U2f />

    <Start />

    <Ompassprocess />

    <Ompass />

    <Ompasspopup />

    <AuthNtoken1 />

    <AuthNtoken2 />

    <Error />


  </DocumentLayout>
    <DocumentPopBoxContainer customTitle="U2F">
      <DocumentPopBox num={1} title="U2F 란?" />
      <DocumentPopBox num={2} title="준비 사항" />
      <DocumentPopBox num={3} title="OMPASS 적용 프로세스" />
      <DocumentPopBox num={4} customTitle="OMPASS-U2F" />
      <DocumentPopBox num={5} title="OMPASS 등록 및 U2F 인증" />
      <DocumentPopBox num={6} title="인증 토큰 받기" />
      <DocumentPopBox num={7} title="인증 토큰 검증" />
      <DocumentPopBox num={8} title="API 에러 메시지" />
    </DocumentPopBoxContainer>
  </>
}
export default restapi;
