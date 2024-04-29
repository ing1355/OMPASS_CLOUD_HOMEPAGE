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

const customStyle = {
  color: "#3c9edb",
  fontSize: "1rem",
  fontWeight: "bold",
}

function login(props) {
  const { t, isKr } = useTranslation();

  return (
    <DocumentLayout title="로그인">

      <DocumentTextBox>
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_login_img.png" : "/static/images/document_login_img_eng.png"}
            alt="로그인 창"
          />
        </DocumentImage>


        <DocumentBox>
          <DocumentLabel num={1} title="이메일 형식의 사용자 ID를 입력합니다." />
          <DocumentLabel num={2} title="비밀번호는 문자, 숫자, 특수문자를 활용하여 최대 16자리 까지 8자 이상 3가지 조합 또는 10자 이상 2가지 조합으로 입력해야 합니다." />
          <DocumentLabel num={3} title="로그인 버튼을 누르면 대시보드로 이동합니다." />
          <DocumentLabel num={4} title="비밀번호를 잊어버렸을 시 사용가능 한 기능입니다." />
          <DocumentLabel num={5} title="아이디가 없는 사용자는 회원가입페이지로 이동합니다." />
        </DocumentBox>
      </DocumentTextBox>
      {/* =================================================================== */}

      <DocumentTextBox>
        <DocumentLabel icon="↓" title="비밀번호 찾기 버튼 클릭 시" style={customStyle}/>
        
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_login_password.png" : "/static/images/document_login_password_eng.png"}
            alt="비밀번호 초기화"
          />
        </DocumentImage>

        <DocumentBox>
          <DocumentLabel num={1} title="비밀번호를 초기화 할 이메일을 입력합니다."/>
          <DocumentLabel num={2} title="❝이메일 인증❞ 버튼 클릭 시 비밀번호 초기화를 위한 인증 메일을 전송합니다."/>
        </DocumentBox>
      </DocumentTextBox>
      {/* =================================================================== */}
      
      <DocumentTextBox>
        <DocumentLabel icon="↓" style={customStyle} title="비밀번호 초기화 인증 메일"/>
        
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_password_Email.png" : "/static/images/document_password_Email_eng.png"}
            alt="비밀번호 초기화 인증 메일"
          />
        </DocumentImage>

        <DocumentBox>
        <DocumentLabel num={3} title="비밀번호 초기화 버튼을 클릭합니다."/>
        <DocumentLabel num={4} title="본 이메일의 URL은 5분 후에 만료되므로 이메일 수신 후 바로 인증하시길 바랍니다."/>
          
        </DocumentBox>
      </DocumentTextBox>
      {/* =================================================================== */}
    </DocumentLayout>
  );
}
export default login;