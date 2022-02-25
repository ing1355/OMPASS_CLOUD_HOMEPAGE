import React from "react";
import "../../../css/Document.module.css";
import Document from "../../../components/Document";
import useTranslation from "../../../lib/useTranslation";
import LinkComponent from "../../../components/Link";
import i18nextConfig from '../../../next-i18next.config';

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

export async function getStaticProps({params}) {
  return {
    props: {
      ...params
    }
  }
}

function userpolicy(props) {
  const { t, isKr } = useTranslation();
  const document_userPolicy = true;

  return (
    <div className="document UserPolicyBox">
      <ul className="documentLeft">
        <Document document_userPolicy={document_userPolicy} />
      </ul>
      <ul className="documentRight">
        <div className="rightContentsBox">
          <ul>
            <li>
              <div class="main">
                <div className="code">
                  <h4>▶ {t("사용자 정의 정책")}</h4>

                  {/* =================================================================== */}
                  <div className="document-text-box">
                    <div className="document-img">
                      <img
                        width="100%"
                        src={isKr ? "/static/images/document_custompolicy_1.png" : "/static/images/document_custompolicy_1_eng.png"}
                        alt="user 페이지"
                      />
                    </div>
                    <>
                      <div className="document-label">
                        <label>*&nbsp;</label>
                        <p>
                          {t(
                            "특정 어플리케이션에 적용할 수 있는 관리자 정의형 맞춤 정책입니다. 상세 항목에 대한 사항 "
                          )}
                          <LinkComponent href="/document/policy">
                            {t("기본 정책 페이지")}
                          </LinkComponent>
                          {t("를 참고하세요.")}
                        </p>
                      </div>
                    </>
                  </div>
                  {/* =================================================================== */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}
export default userpolicy;
