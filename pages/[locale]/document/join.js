import React from "react";

import "../../../css/Document.module.css";
import useTranslation from "../../../lib/useTranslation";
import Document from "../../../components/Document";
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

function join(props) {
  const { t, isKr } = useTranslation();

  return (
    <DocumentLayout title="회원가입">

      {/* =================================================================== */}
      <DocumentTextBox>
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_join_1_img.png" : "/static/images/document_join_1_img_eng.png"}
            alt="회원가입 창"
          />
        </DocumentImage>
      </DocumentTextBox>
      {/* =================================================================== */}
      <DocumentTextBox>
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_join_agree_img.png" : "/static/images/document_join_agree_img_eng.png"}
            alt="회원가입 창"
          />
        </DocumentImage>
      </DocumentTextBox>

      <DocumentBox>
        <DocumentLabel icon="*" title="회원가입을 위해서는 이용약관, 개인정보 수집 및 이용에 모두 동의해야 합니다." />
      </DocumentBox>

      {/* =================================================================== */}

      <DocumentTextBox>
        <DocumentImage>

          <img
            width="100%"
            src={isKr ? "/static/images/document_join_img.png" : "/static/images/document_join_img_eng.png"}
            alt="회원가입 창"
          />
        </DocumentImage>
      </DocumentTextBox>

      <DocumentBox>
        <DocumentLabel num={1} title="성 / 이름을 구분하여 입력합니다." />
        <DocumentLabel num={2} title="사용자 아이디는 이메일로 구분되며 중복 확인을 합니다." />
        <DocumentLabel num={3} title="비밀번호는 문자, 숫자, 특수문자를 활용하여 최대 16자리 까지 8자 이상 3가지 조합 또는 10자 이상 2가지 조합으로 입력해야 합니다." />
        <DocumentLabel num={4} title="국가번호를 선택하고 전화번호를 입력합니다." />
        <DocumentLabel num={5} title="소속된 회사 명을 입력합니다." />
        <DocumentLabel num={6} title="회원정보 입력 완료 시 ❝인증메일 발송❞ 버튼을 클릭합니다." />
        <DocumentLabel num={7} title="계정이 있으면 ❝로그인 페이지 이동하기❞ 버튼을 클릭합니다." />
      </DocumentBox>
      {/* =================================================================== */}

      <DocumentTextBox>
        <DocumentLabel style={customStyle} icon="↓" title='❝인증메일 발송❞ 클릭 시' />
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_join_2.png" : "/static/images/document_join_2_eng.png"}
            alt="회원가입 창"
          />
        </DocumentImage>

        <DocumentBox>
          <DocumentLabel num={8} title="메일함에서 ❝인증하기❞ 버튼을 눌러야 최종 회원가입이 완료됩니다." />

        </DocumentBox>
      </DocumentTextBox>
      {/* =================================================================== */}

      <DocumentTextBox>
        <DocumentLabel icon="↓" title="회원가입 인증 메일" style={customStyle}/>
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_join_Email.png" : "/static/images/document_join_Email_eng.png"}
            alt="회원가입 이메일 창"
          />

        </DocumentImage>

        <DocumentBox>
          <DocumentLabel num={9} title="❝인증하기❞ 버튼을 클릭하면 최종 회원가입이 완료됩니다."/>
          <DocumentLabel num={10} title="본 이메일의 URL은 5분 후에 만료되므로 이메일 수신 후 바로 인증하시길 바랍니다."/>
        </DocumentBox>
      </DocumentTextBox>
      {/* =================================================================== */}
    </DocumentLayout >
  );
}
export default join;
