import React, { useState } from "react";
import "../../css/Build_Contents.module.css";
import "../../css/Support.module.css";
import useTranslation from "../../lib/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faUserCircle,
  faGripVertical,
  faShieldAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contents() {
  const { t, isKr } = useTranslation();
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <>
      <div className="contentsBox1">
        <div className="contentsSubBox">
          <ul>
            <li>
              <h1>
                <b>{t("차세대 통합 인증 솔루션의 도입 필요성")}</b>
              </h1>
              <p>
                {t(
                  "·강력한 보안성과 사용자 편의성을 보장하는 사용자 인증기술에 대한 요구가 증가"
                )}
              </p>
              <p>
                {t(
                  "·공개키 기반의 FIDO 표준 인증방식 준용에 따라 패스워드 인증의 위험요소를 해결"
                )}
              </p>
            </li>
            <li>
              <img
                className="OmpassSolutionBox"
                src={isKr ? "/static/images/OmpassBoxKor.png" : "/static/images/OmpassBoxEng.png"}
                alt="원모어패스 패키지박스_한글"
              />
            </li>
          </ul>
          <ul className="passWord">
            <h4>
              <b style={{ color: "red" }}>{t("위험 요소_영어")}</b>
              {t("패스워드 인증의")}{" "}
              <b style={{ color: "red" }}>{t("위험 요소_한글")}</b>
              <br />
              <FontAwesomeIcon icon={faArrowDown} className="fontawsome" />
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
      <div className="contentsBox2">
        <ul className="contentsSubBox">
          <li>
            <h2>{t("원모어패스의 특장점")}</h2>
            <ul className="contents2Box">
              <li>
                <div>
                  <FontAwesomeIcon
                    className="contents1FontAwsome"
                    icon={faUserCircle}
                    style={{ color: "7aba98" }}
                  />
                  <p>{t("패스워드가 없는 사용자 편의성")}</p>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <FontAwesomeIcon
                      className="contents1FontAwsome"
                      icon={faShieldAlt}
                      style={{ color: "7aba98" }}
                    />
                    <p>{t("PKI 기반의 높은 보안성")}</p>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    className="contents1FontAwsome"
                    icon={faGripVertical}
                    style={{ color: "7aba98" }}
                  />
                  <p>{t("다양한 인증방식 적용한 멀티확장성")}</p>
                </div>
              </li>
            </ul>
            <ul className="contents2Box_2">
              <li>
                <h5>{t("사용자 편의성")}</h5>
                <p>
                  {t(
                    "원모어패스(모바일 인증장치) 하나로 다양한 인증수단 적용 및 통합된 인증라이프 사이클 관리"
                  )}
                </p>
              </li>
              <li>
                <h5>{t("보안 취약점 완벽 제거")}</h5>
                <p>
                  {t(
                    "Password-Less를 통해 비밀번호 사용·관리에 따른 보안 취약점 완벽 제거 및 보안 컴플라이언스 충족"
                  )}
                </p>
              </li>
              <li>
                <h5>{t("국제 표준 준수")}</h5>
                <p>{t("공개키 기반의 FIDO Alliance 국제 표준 준수")}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="contentsBox3">
        <ul className="contentsSubBox">
          <li>
            <h2>{t("주요기능 (경쟁력)")}</h2>
            <div className="contents2Box">
              <div className="contents2Title">
                <ul>
                  <li
                    onMouseOver={() => {
                      setShow1(true);
                      setShow2(false);
                      setShow3(false);
                    }}
                    style={
                      show1 === true
                        ? {
                          border: "3px solid #41ad95",
                          background: "rgb(199 219 210)",
                        }
                        : null
                    }
                  >
                    {t("다양한 인증 수단 제공")}
                  </li>
                </ul>
                <ul>
                  <li
                    onMouseOver={() => {
                      setShow2(true);
                      setShow1(false);
                      setShow3(false);
                    }}
                    style={
                      show2 === true
                        ? {
                          border: "3px solid #41ad95",
                          background: "rgb(199 219 210)",
                        }
                        : null
                    }
                  >
                    {t("고객 중심의 유연성")}
                  </li>
                </ul>
                <ul>
                  <li
                    onMouseOver={() => {
                      setShow3(true);
                      setShow1(false);
                      setShow2(false);
                    }}
                    style={
                      show3 === true
                        ? {
                          border: "3px solid #41ad95",
                          background: "rgb(199 219 210)",
                        }
                        : null
                    }
                  >
                    {t("시스템 보안성 강화")}
                  </li>
                </ul>
              </div>
              <div className="contents2Sub">
                {show1 === true ? (
                  <ul>
                    <ul>
                      <li>
                        <h5>{t("다양한 인증방식 확장 가능")}</h5>
                        <p>
                          {t(
                            "안전한 공개키 기반으로 다양한 최신 사용자 인증기술을 적용합니다."
                          )}
                        </p>
                      </li>
                      <li>
                        <h5>{t("사용자 선택형 인증")}</h5>
                        <p>
                          {t(
                            "얼굴인식, 지문인식, PIN, 패턴, Windows Hello 로그인 등 다양한 인증을 지원합니다."
                          )}
                        </p>
                      </li>
                      <li>
                        <h5>
                          {t(
                            "원모어페이스 모듈적용, 한국인터넷진흥원 K-NBTC 인증, 99.96%"
                          )}
                        </h5>
                        <p>{t("중앙 통제형 얼굴인증을 별도로 제공합니다.")}</p>
                      </li>
                    </ul>
                  </ul>
                ) : null}

                {show2 === true ? (
                  <ul>
                    <ul>
                      <li>
                        <h5>{t("고객중심 서비스")}</h5>
                        <p>
                          {t(
                            "사용자 통합 인증 앱 또는 SDK 제공을 통해 고객 요구 환경에 최적화된 서비스 제공"
                          )}
                        </p>
                      </li>
                      <li>
                        <h5>{t("구축 기간 최소화")}</h5>
                        <p>
                          {t(
                            "적용 시간 및 구축 업무 최소화를 위한 연동 모듈(인터페이스 서버) 제공"
                          )}
                        </p>
                      </li>
                      <li>
                        <h5>{t("고객 환경 최적화")}</h5>
                        <p>
                          {t(
                            "FIDO UAF(Universal Authentication Framework), U2F(Universal Second Factor) 모두 지원 가능"
                          )}
                        </p>
                      </li>
                      <li className="engNo">
                        <h5>{t("통신사 보인인증 서비스 연계 지원")}</h5>
                        <p>{t("사용자 본인인증 서비스 제공")}</p>
                      </li>
                      <li>
                        <h5>{t("네트워크 환경 최적화")}</h5>
                        <p>{t("인터넷망·폐쇄망 환경 완벽 지원")}</p>
                      </li>
                    </ul>
                  </ul>
                ) : null}
                {show3 === true ? (
                  <ul>
                    <ul>
                      <li>
                        <h5>{t("보안성 확보")}</h5>
                        <p>
                          {t(
                            "전문 화이트 해커팀을 통한 모의해킹 실시 및 보안조치 완료"
                          )}
                        </p>
                      </li>
                      <li>
                        <h5>{t("관리자 인증 강화")}</h5>
                        <p>
                          {t("FIDO2 Admin 서버 접근 시 OMPASS 2차 인증 적용")}
                        </p>
                      </li>
                      <li>
                        <h5>{t("비인가 접근 IP 차단")}</h5>
                        <p>
                          {t("FIDO2 Admin 서버 접근 시 IP 접근통제 정책 적용")}
                        </p>
                      </li>
                      <li>
                        <h5>{t("Phishing 공격 등에 강력 대응 가능")}</h5>
                        <p>{t("사용자 접근 기기(브라우저) 검증 기능 적용")}</p>
                      </li>
                    </ul>
                  </ul>
                ) : null}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="contentsBox4">
        <div className="contentsSubBox">
          <h2>{t("사양·구성도")}</h2>
          <img
            className="ompass DiagramImg"
            src={isKr ? "/static/images/OmpassDiagramImg_Kor.png" : "/static/images/OmpassDiagramImg_Eng.png"}
            alt="원모어패스 사양구성도_한글"
          />{" "}
        </div>
      </div>
      <div className="contentsBox5">
        <div className="contentsSubBox">
          {/* <h2>주요 화면</h2> */}
          <ul>
            <li>
              <img
                className="ompassApp"
                src={isKr ? "/static/images/OmpassAppImg_Kor.png" : "/static/images/OmpassAppImg_Eng.png"}
                alt="원모어패스 앱_한글"
              />
            </li>
            <li>
              <h1>{t("원모어패스는")} </h1>
              <p>{t("사용자 선택형 인증 입니다.")}</p>
              <span>
                ▶{" "}
                <img
                  className="icon"
                  src={"/static/images/1.png"}
                  alt="지문인식 아이콘"
                />{" "}
                {t("지문")},{" "}
                <img
                  className="icon"
                  src={"/static/images/2.png"}
                  alt="얼굴인식 아이콘"
                />{" "}
                {t("얼굴인식")},{" "}
                <img
                  className="icon"
                  src={"/static/images/3.png"}
                  alt="패턴 아이콘"
                />
                {t("패턴")},{" "}
                <img
                  className="icon"
                  src={"/static/images/4.png"}
                  alt="핀 코드 아이콘"
                />{" "}
                {t("핀코드")}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="contentsBox6">
        <div className="contentsSubBox">
          <h2>{t("원모어패스 시연영상")}</h2>
          <div className="videoDiv">
            <iframe
              className="iframeVideo"
              src={isKr ? "https://www.youtube.com/embed/1-0ltemtiPc" : "https://www.youtube.com/embed/LEcciL5JKvs"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contentsBox6 contentsBox7">
        <div className="supportContents3">
          <ul>
            <h1>{t("기술지원")}</h1>
            <p>{t("고객 중심의 신속 대응 서비스를 제공해드립니다.")}</p>

            <div>
              {!isKr && <p>{t("로 문의해주세요.")}</p>}
              <a
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
                href="mailto:service@omsecurity.kr"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="supportfontawsome"
                />{" "}
                {t("service@omsecurity.kr")}
              </a>
              {isKr && <p>{t("로 문의해주세요.")}</p>}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contents;
