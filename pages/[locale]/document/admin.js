import React from "react";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from '../../../next-i18next.config';
import { DocumentBox, DocumentImage, DocumentTextBox, DocumentLabel, DocumentLayout } from "../../../components/Document/DocumentComponets";
import styles from '../../../css/Document.module.css'

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

function admin() {
  const { t, isKr } = useTranslation();
  return <>
    <DocumentLayout title="관리자 관리">
      {/* =================================================================== */}
      <DocumentTextBox>
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_admin_1.png" : "/static/images/document_admin_1_eng.png"}
            alt="관리자 페이지"
          />
        </DocumentImage>

        <DocumentBox>
          <DocumentLabel num={1} title="관리자 추가 등록이 가능합니다." />
          <DocumentLabel num={2} title="관리자 정보를 제공합니다." />
        </DocumentBox>
      </DocumentTextBox>
      {/* =================================================================== */}

      <DocumentTextBox>
        <DocumentLabel icon={"↓"} title="관리자 목록 클릭 시" style={customStyle} />
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_admin_2.png" : "/static/images/document_admin_2_eng.png"}
            alt="관리자 페이지"
          />
        </DocumentImage>

        <DocumentBox>
          <DocumentLabel num={1} title="관리자 상세정보가 표기됩니다." />
          <DocumentLabel num={2} customTitle={<div className={styles["divP"]}>
            {t("OMPASS ADMIN 페이지에서 표현되는 모든 시간 데이터들을  설정된 시간대를 기준으로 표시해줍니다.")}
            <DocumentLabel icon={<>→&nbsp;</>} title="회원가입 위치 : 회원가입을 완료한 위치의 시간대로 시간을 표시합니다. (기본 설정)" />
            <DocumentLabel icon={<>→&nbsp;</>} title="현재 위치 : 로그인한 위치의 시간대로 시간을 표시합니다." />
          </div>} />
          <DocumentLabel num={3} title="수정된 관리자 정보를 저장합니다." />
          <DocumentLabel icon={<>*&nbsp;</>} title={<>
            {t(
              "현재 로그인 된 계정의 비밀번호만 수정이 가능합니다."
            )}
            <br />(
            {t(
              "비밀번호는 문자, 숫자, 특수문자를 활용하여 최대 16자리 까지 8자 이상 3가지 조합 또는 10자 이상 2가지 조합으로 입력해야 합니다."
            )}
            )
          </>} />

          <DocumentLabel num={4} customTitle={<div className={styles["divP"]}>
            <b>
              {t("로그인한 계정이")}{" "}
              <b style={{ textDecoration: "underline" }}>
                {t("Admin 계정")}
              </b>
              {t("인 경우 해당 버튼이 보여집니다.")}
            </b>
            <DocumentLabel icon={<>→&nbsp;</>} title="본인 계정 선택 시 “회원 탈퇴” 버튼이 보여지며, OMPASS 서비스 탈퇴가 가능합니다." />
            <DocumentLabel icon={<>→&nbsp;</>} title="Sub Admin 선택 시 “삭제” 버튼이 보여지며, Sub Admin 삭제가 가능합니다." />
          </div>} />
        </DocumentBox>

        <DocumentImage>
          <img
            width="55%"
            src={isKr ? "/static/images/document_admin_7.png" : "/static/images/document_admin_7_eng.png"}
            alt="관리자 페이지"
          />
        </DocumentImage>

        <DocumentBox>
          <DocumentLabel num={5} title="비밀번호 입력 후 회원 탈퇴가 완료됩니다." />
        </DocumentBox>
      </DocumentTextBox>

      {/* =================================================================== */}

      <DocumentTextBox>
        <DocumentLabel icon={"↓"} title="관리자 등록 버튼 클릭 시" style={customStyle} />
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_admin_5.png" : "/static/images/document_admin_5_eng.png"}
            alt="관리자 페이지"
          />
        </DocumentImage>

        <DocumentBox>
          <DocumentLabel num={1} title="신규 등록하고자 하는 관리자의 기본 정보를 입력합니다." />
          <DocumentLabel num={2} title="등록 버튼 클릭 시 입력하신 이메일로 회원가입 인증 메일을 전송합니다." />
        </DocumentBox>
      </DocumentTextBox>

      {/* =================================================================== */}

      <DocumentTextBox>
        <DocumentLabel icon={"↓"} title="관리자 등록 인증 메일" style={customStyle} />
        <DocumentImage>
          <img
            width="100%"
            src={isKr ? "/static/images/document_admin_6.png" : "/static/images/document_admin_6_eng.png"}
            alt="회원가입 이메일 창"
          />
        </DocumentImage>

        <DocumentBox>
          <DocumentLabel num={3} title="“인증하기” 버튼을 클릭하면 관리자 등록이 완료됩니다." />
          <DocumentLabel num={4} title="본 이메일의 URL은 5분 후에 만료되므로 이메일 수신 후 바로 인증하시길 바랍니다." />
        </DocumentBox>
      </DocumentTextBox>

      {/* =================================================================== */}

    </DocumentLayout>
    </>
}
export default admin;