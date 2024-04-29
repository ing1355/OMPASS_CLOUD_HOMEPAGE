import React from "react";

import styles from "../../../css/Document.module.css";
import useTranslation from "../../../lib/useTranslation";
import i18nextConfig from "../../../next-i18next.config";
import { DocumentBox, DocumentImage, DocumentLabel, DocumentLayout, DocumentTextBox } from "../../../components/Document/DocumentComponets";

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

const customStyle = {
  fontSize: "1rem",
  fontWeight: "bold",
}

function billing(props) {
  const { t, isKr } = useTranslation();

  return <DocumentLayout title="요금">
    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="*" title="Sub Admin 계정에서는 요금 메뉴가 보이지 않습니다." style={{
        color: "rgb(11, 158, 85)",
        fontSize: "1rem",
        fontWeight: "bold",
        marginBottom: "2rem",
      }} />
      <DocumentLabel icon="■" title="무료 플랜 상태" style={customStyle} />

      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_1.png"
              : "/static/images/billing_1_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel icon="*" labelClassName={styles["number"]} title="무료 플랜은 10인 이하 기업의 경우 무료 무제한 사용이 가능합니다." />
      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}
    <DocumentTextBox>
      <DocumentLabel icon="■" title="OMPASS 서비스 결제 상태" style={customStyle} />
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_2.png"
              : "/static/images/billing_2_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel icon="*" labelClassName={styles["number"]} title="OMPASS 결제를 진행하시면 현재 현황과 사용기간 확인이 가능합니다." />

      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}
    <DocumentTextBox>
      <DocumentLabel icon="■" title="OMPASS 서비스 제공 정보" style={customStyle} />
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_3.png"
              : "/static/images/billing_3_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel icon="*" labelClassName={styles["number"]} title="무료 플랜 , OMPASS 결제 시 사용 하실 수 있는 정보입니다." />

      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="■" title="OMPASS 결제" style={customStyle} />
      <DocumentImage>
        <img
          width="75%"
          src={
            isKr
              ? "/static/images/billing_4.png"
              : "/static/images/billing_4_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel num={1} title="OMPASS 서비스를 이용할 최대 사용자 수를 선택합니다." />
        <DocumentLabel num={2} title="최대 사용자 수에 맞게 월 단위 금액이 산정됩니다." />
        <DocumentLabel num={3} title="결제대행서비스 이용약관, 구매조건 및 환불 규정을 확인 후 이용 동의에 체크해 주세요." />

      </DocumentBox>

      <DocumentImage>
        <img
          width="75%"
          src={
            isKr
              ? "/static/images/billing_5.png"
              : "/static/images/billing_5_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={4} title="최대 사용자 수, 가격 정보를 확인 하신 후 결제를 진행하시면 됩니다." />
      </DocumentBox>

      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_6.png"
              : "/static/images/billing_6_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={5} title="결제완료 후 결제 내역 확인이 가능합니다." />

      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="■" title="OMPASS 결제 인원 변경" style={customStyle} />
      <DocumentImage>
        <img
          width="75%"
          src={
            isKr
              ? "/static/images/billing_10.png"
              : "/static/images/billing_10_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>

      <DocumentBox>
        <DocumentLabel num={1} title="변경 할 사용자 수를 선택합니다." />
        <DocumentLabel num={2} title="선택한 사용자 수에 맞게 금액이 산정됩니다." />
      </DocumentBox>

      <DocumentImage>
        <img
          width="75%"
          src={
            isKr
              ? "/static/images/billing_11.png"
              : "/static/images/billing_11_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={3} title="변경 된 정보를 확인 후 OK 버튼을 선택합니다. (다음 결제일에 변경 된 내용으로 결제가 진행됩니다." />
      </DocumentBox>

      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_13.png"
              : "/static/images/billing_13_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel icon="❹-⑴" labelClassName={`${styles["number"]} ${styles["number-2"]}`} title="사용 가능한 인원이 변경 됩니다." />

      </DocumentBox>

      <DocumentImage>
        <img
          width="75%"
          src={
            isKr
              ? "/static/images/billing_12.png"
              : "/static/images/billing_12_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel icon="❹-⑵" labelClassName={`${styles["number"]} ${styles["number-2"]}`} title="다음 결제일에 결제 할 예정 금액이 표시됩니다." />

      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="■" title="구독 취소" style={customStyle} />
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_7.png"
              : "/static/images/billing_7_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={1} title="페이지의 상단의 “구독 취소” 버튼을 선택합니다." />

      </DocumentBox>

      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_8.png"
              : "/static/images/billing_8_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={2} title="만료일을 확인 하신 후 OK 버튼을 누르시면 구독 취소가 완료 됩니다." />
        <DocumentLabel num={3} title="구독 취소 완료 후 화면 변경 상태입니다." />

      </DocumentBox>
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_9.png"
              : "/static/images/billing_9_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel icon="*" title="구독 취소 완료시 관리자 이메일로 구독 취소 이메일이 발송됩니다." />
        <DocumentLabel icon="*" title="구독 취소 후 사용 만료일까지 OMPASS 서비스 사용이 가능하며 재결제 시 구독이 다시 활성화 됩니다." />

      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}

    <DocumentTextBox>
      <DocumentLabel icon="■" title="청약 철회" style={customStyle} />
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_14.png"
              : "/static/images/billing_14_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={1} title="페이지의 상단의 “청약 철회” 버튼을 선택합니다. (청약 철회 버튼은 환불 기능으로 결제 후 7일 동안 보여집니다.)" />

      </DocumentBox>

      <DocumentImage>
        <img
          width="75%"
          src={
            isKr
              ? "/static/images/billing_15.png"
              : "/static/images/billing_15_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={2} title="청약 철회 정보를 확인 하신 후 OK 버튼을 누르시면 청약 철회가 완료 됩니다." />

      </DocumentBox>
      <DocumentImage>
        <img
          width="100%"
          src={
            isKr
              ? "/static/images/billing_16.png"
              : "/static/images/billing_16_eng.png"
          }
          alt="대시보드 사용자 정보"
        />
      </DocumentImage>
      <DocumentBox>
        <DocumentLabel num={3} title="청약 철회 후 결제 내역에 환불 처리가 표시됩니다." />
      </DocumentBox>
    </DocumentTextBox>
    {/* =================================================================== */}
  </DocumentLayout >
}
export default billing;
