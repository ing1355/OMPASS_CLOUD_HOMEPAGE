import React from "react";

import "../../../css/Document.module.css";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from '../../../next-i18next.config';
import { DocumentImage, DocumentLabel, DocumentLayout, DocumentTextBox } from "../../../components/Document/DocumentComponets";

const getPathSlugs = () => {
  console.log(i18nextConfig.i18n.locales)
  return i18nextConfig.i18n.locales.map(locale => ({
    params: {
      locale
    }
  }))
}

export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();
  console.log(pathsWithLocale)
  return {
    paths: pathsWithLocale,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log('params : ', params)
  return {
    props: {
      ...params
    }
  }
}

function u2fuaf() {
  const { t, isKr } = useTranslation();

  return <>
    <DocumentLayout title="U2F/UAF">

      {/* =================================================================== */}
      <DocumentTextBox>
        <DocumentLabel icon="*" title="원모어패스는 사용자 선택형 인증장치(인증방식: 지문인식, 얼굴인식, 핀코드, 패턴, Windows Hello 로그인 등)를 활용하여 2차 인증 방식인 U2F와 패스워드 없이 로그인이 가능한 UAF 방식을 모두 제공합니다." />

        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/OmpassAppImg_2_Kor.png" : "/static/images/OmpassAppImg_2_Eng.png"}
            alt="원모어패스 앱_한글"
          />
        </DocumentImage>
      </DocumentTextBox>
      {/* =================================================================== */}
      <DocumentTextBox>
        <DocumentLabel noIcon title="U2F(Universal 2nd Factor) 2차 인증"/>
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_login_2.png" : "/static/images/document_login_2_eng.png"}
            alt="U2F방식"
          />
        </DocumentImage>
      </DocumentTextBox>
      {/* =================================================================== */}
      <DocumentTextBox>
      <DocumentLabel noIcon title="UAF(Universal Authentication Framework) 패스워드 없이 로그인"/>
        <DocumentLabel icon="*" title="패스워드 방식의 불편함과 불안함을 해소하고 사용자의 편의성과 보안성을 동시에 보장합니다." style={{
          color: "#3c9edb",
          fontSize: "1rem",
          fontWeight: "bold",
        }} />
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_login_3.png" : "/static/images/document_login_3_eng.png"}
            alt="UAF방식"
          />
        </DocumentImage>
      </DocumentTextBox>
      {/* =================================================================== */}
    </DocumentLayout>
  </>
}
export default u2fuaf;
