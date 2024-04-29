import React from "react";
import Start from "../../../components/Document/start";
import AuthNtoken1 from "../../../components/Document/authN-token-1";
import AuthNtoken2 from "../../../components/Document/authN-token-2";
import Error from "../../../components/Document/error";
import Uaf from "../../../components/Document/uaf";
import Uafprocess from "../../../components/Document/uaf-process";
import Uafompass from "../../../components/Document/uaf-ompass";
import Uafpopup from "../../../components/Document/uaf-popup";
import Uafloginbutton from "../../../components/Document/uaf-loginbutton";
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

function restapiuaf(props) {
  const { isKr } = useTranslation();

  return <>
    <DocumentLayout customTitle="UAF">
      <DocumentPdfDownload src={isKr ? "/static/pdf/REST API_UAF.pdf" : "/static/pdf/REST API_UAF_eng.pdf"} />

      <Uaf />

      <Start />

      <Uafprocess />

      <Uafloginbutton />

      <Uafompass />

      <Uafpopup />

      <AuthNtoken1 />

      <AuthNtoken2 />

      <Error />

    </DocumentLayout>
    <DocumentPopBoxContainer customTitle="UAF">
      <DocumentPopBox num={1} title="UAF 란?" />
      <DocumentPopBox num={2} title="준비 사항" />
      <DocumentPopBox num={3} title="OMPASS 적용 프로세스" />
      <DocumentPopBox num={4} title="UAF 로그인 버튼 추가하기" />
      <DocumentPopBox num={5} customTitle="OMPASS-UAF" />
      <DocumentPopBox num={6} title="OMPASS UAF 인증" />
      <DocumentPopBox num={7} title="인증 토큰 받기" />
      <DocumentPopBox num={8} title="인증 토큰 검증" />
      <DocumentPopBox num={9} title="API 에러 메시지" />
    </DocumentPopBoxContainer>
  </>
}
export default restapiuaf;
