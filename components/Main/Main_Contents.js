import React, { useState } from "react";
import useTranslation from "../../lib/useTranslation";
import styles from "../../css/Cloud_Contents.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faUserCircle,
  faGripVertical,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const showStyle = {
  border: "3px solid #2f92da",
  background: "#afd1e4d6",
}

const MainContents = ({ title, content }) => {
  const { t } = useTranslation();
  return <li>
    <h5>{t(title)}</h5>
    <p>
      {t(
        content
      )}
    </p>
  </li>
}

function Main_Contents() {
  const { t, isKr } = useTranslation();
  const [show, setShow] = useState(1)

  const ShowContents = ({ title, index }) => {
    return <ul>
      <li
        onMouseOver={() => {
          setShow(index);
        }}
        style={
          show === index
            ? showStyle
            : null
        }
      >
        {t(title)}
      </li>
    </ul>
  }

  const ShowIconContents = ({ title, icon }) => {
    return <li>
      <div>
        <p className={styles["FontAwesomeIcon-p"]}>
          <FontAwesomeIcon
            className={styles["contents1FontAwsome"]}
            icon={icon}
            style={{ color: "7aa9ba" }}
          />
        </p>
        <p>{t(title)}</p>
      </div>
    </li>
  }

  const ContentsDiv = ({ title }) => {
    return <div className={styles["content-div"]}>
      <label>-&nbsp;</label>
      <p>
        {t(title)}
      </p>
    </div>
  }

  const ShowImgIcon = ({ title, src, alt, isLast }) => {
    return <><img
      className={styles["icon"]}
      src={src}
      alt={alt}
      style={{ marginRight: "3px" }}
    />{" "}
      {t(title)}
      {!isLast && <>
        , {" "}
      </>}
    </>
  }

  return (
    <div className={styles["cloud-div"]}>
      <div className={styles["CloudcontentsBox1"]}>
        <div className={styles["contentsSubBox"]}>
          <ul>
            <li>
              <h1>
                <b>{t("차세대 통합 인증 솔루션의 도입 필요성")}</b>
              </h1>

              {isKr ? (
                <>
                  <ContentsDiv title="·강력한 보안성과 사용자 편의성을 보장하는 사용자 인증기술에 대한 요구가 증가" />
                  <ContentsDiv title="·공개키 기반의 FIDO 표준 인증방식 준용에 따라 패스워드 인증의 위험요소를 해결" />
                </>
              ) : (
                <>
                  <p>
                    {t(
                      "·공개키 기반의 FIDO 표준 인증방식 준용에 따라 패스워드 인증의 위험요소를 해결"
                    )}
                  </p>
                </>
              )}
            </li>
            <li>
              <img
                className={styles["OmpassSolutionBox"]}
                src={
                  isKr
                    ? "/static/images/OmpassBoxKor.png"
                    : "/static/images/OmpassBoxEng.png"
                }
                alt="원모어패스 패키지박스_한글"
              />
            </li>
          </ul>
          <ul className={styles["passWord"]}>
            <h4>
              <b style={{ color: "red" }}>{t("위험 요소_영어")}</b>
              {t("패스워드 인증의")}{" "}
              <b style={{ color: "red" }}>{t("위험 요소_한글")}</b>
              <br />
              <FontAwesomeIcon icon={faArrowDown} className={styles["fontawsome"]} />
            </h4>
          </ul>
          <ul>
            <li>
              <p>{t("대부분의 사용자는 5개 이하의 패스워드를 사용")}</p>
              <p>
                {t("50% 이상의 사용자가 5년간 패스워드를 변경한 적이 없음")}
              </p>
            </li>
            <li>
              <p>{t("데이터 손실 80% 주요 원인은 패스워드")}</p>
              <p>
                {t("대부분의 사용자는 여러 사이트에서 동일 패스워드 재사용")}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["CloudcontentsBox2"]}>
        <ul className={styles["contentsSubBox"]}>
          <li>
            <h2>{t("원모어패스의 특장점")}</h2>
            <ul className={styles["contents2Box"]}>
              <ShowIconContents title="패스워드가 없는 사용자 편의성" icon={faUserCircle} />
              <ShowIconContents title="PKI 기반의 높은 보안성" icon={faShieldAlt} />
              <ShowIconContents title="다양한 인증방식 적용한 멀티확장성" icon={faGripVertical} />
            </ul>
            <ul className={styles["contents2Box_2"]}>
              <MainContents title="사용자 편의성" content="원모어패스(모바일 인증장치) 하나로 다양한 인증수단 적용 및 통합된 인증라이프 사이클 관리" />
              <MainContents title="보안 취약점 완벽 제거" content="Password-Less를 통해 비밀번호 사용·관리에 따른 보안 취약점 완벽 제거 및 보안 컴플라이언스 충족" />
              <MainContents title="국제 표준 준수" content="공개키 기반의 FIDO Alliance 국제 표준 준수" />
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles["CloudcontentsBox3"]}>
        <ul className={styles["contentsSubBox"]}>
          <li>
            <h2>{t("주요기능 (경쟁력)")}</h2>
            <div className={styles["contents2Box"]}>
              <div className={`${styles["contents2Title"]} ${styles["cloud"]}`}>
                <ShowContents title="다양한 인증 수단 제공" index={1} />
                <ShowContents title="고객 중심의 유연성" index={2} />
                <ShowContents title="시스템 보안성 강화" index={3} />
              </div>
              <div className={styles["contents2Sub"]}>
                {show === 1 ? (
                  <ul>
                    <ul>
                      <MainContents title="다양한 인증방식 확장 가능" content="안전한 공개키 기반으로 다양한 최신 사용자 인증기술을 적용합니다." />
                      <MainContents title="사용자 선택형 인증" content="얼굴인식, 지문인식, PIN, 패턴, Windows Hello 로그인 등 다양한 인증을 지원합니다." />
                    </ul>
                  </ul>
                ) : null}

                {show === 2 ? (
                  <ul>
                    <ul>
                      <MainContents title="고객중심 서비스" content="사용자 통합 인증 앱 또는 SDK 제공을 통해 고객 요구 환경에 최적화된 서비스 제공" />
                      <MainContents title="구축 기간 최소화" content="적용 시간 및 구축 업무 최소화를 위한 연동 모듈(인터페이스 서버) 제공" />
                      <MainContents title="통합 인증 서비스" content="웹기반 서비스, 윈도우즈 클라이언트, 윈도우즈 로그인, 모바일앱, 리눅스 PAM, MacOS 클라이언트 연동 가능" />
                      <MainContents title="고객 환경 최적화" content="FIDO UAF(Universal Authentication Framework), U2F(Universal Second Factor) 모두 지원 가능" />
                    </ul>
                  </ul>
                ) : null}
                {show === 3 ? (
                  <ul>
                    <ul>
                      <MainContents title="보안성 확보" content="전문 화이트 해커팀을 통한 모의해킹 실시 및 보안조치 완료" />
                      <MainContents title="관리자 인증 강화" content="FIDO2 Admin 서버 접근 시 OMPASS 2차 인증 적용" />
                      <MainContents title="비인가 접근 IP 차단" content="FIDO2 Admin 서버 접근 시 IP 접근통제 정책 적용" />
                      <MainContents title="Phishing 공격 등에 강력 대응 가능" content="사용자 접근 기기(브라우저) 검증 기능 적용" />
                      <MainContents title="모바일 인증장치 보안성 강화" content="모바일 인증장치 탈옥, 위변조 및 최신버전 여부 검증 기능 적용" />
                    </ul>
                  </ul>
                ) : null}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles["CloudcontentsBox5"]} id="cloud">
        <div className={styles["contentsSubBox"]}>
          {/* <h2>주요 화면</h2> */}
          <ul>
            <li>
              <img
                className={styles["ompassApp"]}
                src={
                  isKr
                    ? "/static/images/OmpassAppImg_Kor.png"
                    : "/static/images/OmpassAppImg_Eng.png"
                }
                alt="원모어패스 앱_한글"
              />
            </li>
            <li>
              <h1>{t("원모어패스는")} </h1>
              <p>{t("사용자 선택형 인증 입니다.")}</p>
              <span>
                ▶{" "}
                <ShowImgIcon title="지문" src={"/static/images/1.png"} alt="지문인식 아이콘"/>
                <ShowImgIcon title="얼굴인식" src={"/static/images/2.png"} alt="얼굴인식 아이콘"/>
                <ShowImgIcon title="패턴" src={"/static/images/3.png"} alt="패턴 아이콘"/>
                <ShowImgIcon title="핀코드" src={"/static/images/4.png"} alt="핀 코드 아이콘" isLast/>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles["contentsBox6"]} ${styles["cloudVideo"]}`}>
        <div className={styles["contentsSubBox"]}>
          <h2>{t("원모어패스 시연영상")}</h2>
          <div className={styles["videoDiv"]}>
            <iframe
              className={styles["iframeVideo"]}
              src={
                isKr
                  ? "https://www.youtube.com/embed/MMNlcNh-1RE"
                  : "https://www.youtube.com/embed/oyPRHNtUaU4"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Contents;
