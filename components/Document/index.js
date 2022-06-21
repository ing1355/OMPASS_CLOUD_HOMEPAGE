import React, { useEffect, useState } from "react";
import $ from "jquery";

import "../../css/Document.module.css";

import {
  LockOutlined,
  SendOutlined,
  FileTextOutlined,
  SettingOutlined,
  AppstoreOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import useTranslation from "../../lib/useTranslation";
import LinkComponent from "../Link";

function Document(props) {
  const { t } = useTranslation();
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    $(window)
      .resize(function () {
        var width = $(window).width();
        if (width <= 1024) {
          $(".mobile-menu-button").show();
          // $(".scrollBar").hide();
        } else {
          $(".scrollBar").show();
          $(".mobile-menu-button").hide();
        }
      })
      .resize();
  });

  return (
    <ul className="sidebar">
      <h2 className="pc-title">OMPASS Developers</h2>

      <h2
        className="mobile-title"
        onClick={() => {
          $("#scrollBar").slideToggle();
          setIcon(!icon);
        }}
      >
        OMPASS Developers
        <b className="mobile-title-p">
          {icon === false ? <UpOutlined /> : <DownOutlined />}
        </b>
      </h2>

      <div className="scrollBar" id="scrollBar">
        <li className="title gnb">
          <span>
            <p>
              <LockOutlined />
              &nbsp;&nbsp; {t("원모어패스 로그인이란?")}
            </p>
          </span>

          <ul>
            <LinkComponent href="/document/u2f-uaf">
              {props.document_login === true ? (
                <li
                  className="sub backcolor select mobile-bottom"
                  style={{ border: "0" }}
                >
                  U2F/UAF
                </li>
              ) : (
                <li
                  className="sub backcolor mobile-bottom"
                  style={{ border: "0" }}
                >
                  U2F/UAF
                </li>
              )}
            </LinkComponent>
          </ul>
        </li>

        <li className="title gnb">
          <span>
            <p>
              <SendOutlined />
              &nbsp;&nbsp; {t("원모어패스 시작하기")}
            </p>
          </span>

          <ul>
            <LinkComponent href="/document/join">
              {props.document_join === true ? (
                <li className="sub backcolor select">{t("회원가입")}</li>
              ) : (
                <li className="sub backcolor">{t("회원가입")}</li>
              )}
            </LinkComponent>

            <LinkComponent href="/document/registration">
              {props.document_AdminLogin === true ? (
                <li
                  className="sub backcolor select mobile-bottom"
                  style={{ border: "0" }}
                >
                  {t("로그인")}
                </li>
              ) : (
                <li
                  className="sub backcolor mobile-bottom"
                  style={{ border: "0" }}
                >
                  {t("로그인")}
                </li>
              )}
            </LinkComponent>
          </ul>
        </li>

        <li className="title gnb">
          <span>
            <p>
              <SettingOutlined />
              &nbsp;&nbsp; {t("관리자 페이지")}
            </p>
          </span>

          <ul>
            <LinkComponent href="/document/dashboard">
              {props.document_Dashboard === true ? (
                <li className="sub  backcolor select">{t("대시보드")}</li>
              ) : (
                <li className="sub  backcolor">{t("대시보드")}</li>
              )}
            </LinkComponent>

            <li>
              <ul
                className="sub subtitle subback"
                style={{
                  cursor: "auto",
                  border: "0",
                }}
              >
                {t("어플리케이션 관리")}
              </ul>
              <ul>
                <LinkComponent href="/document/application">
                  {props.document_application === true ? (
                    <li className="sub backcolor sub2 select">
                      - {t("어플리케이션")}
                    </li>
                  ) : (
                    <li className="sub backcolor sub2">
                      - {t("어플리케이션")}
                    </li>
                  )}
                </LinkComponent>

                <LinkComponent href="/document/policy">
                  {props.document_policy === true ? (
                    <li className="sub backcolor sub2 select">
                      - {t("기본 정책")}
                    </li>
                  ) : (
                    <li className="sub backcolor sub2">- {t("기본 정책")}</li>
                  )}
                </LinkComponent>

                <LinkComponent href="/document/user-policy">
                  {props.document_userPolicy === true ? (
                    <li
                      className="sub backcolor sub2 select"
                      style={{ border: "0" }}
                    >
                      - {t("사용자 정의 정책")}
                    </li>
                  ) : (
                    <li className="sub backcolor sub2" style={{ border: "0" }}>
                      - {t("사용자 정의 정책")}
                    </li>
                  )}
                </LinkComponent>
              </ul>
            </li>
            <LinkComponent href="/document/users">
              {props.document_users === true ? (
                <li className="sub backcolor select">{t("사용자 관리")}</li>
              ) : (
                <li className="sub backcolor">{t("사용자 관리")}</li>
              )}
            </LinkComponent>

            <LinkComponent href="/document/admin">
              {props.document_admins === true ? (
                <li className="sub backcolor select">{t("관리자 관리")}</li>
              ) : (
                <li className="sub backcolor">{t("관리자 관리")}</li>
              )}
            </LinkComponent>

            <LinkComponent href="/document/billing">
              {props.document_billing === true ? (
                <li className="sub backcolor select">{t("요금")}</li>
              ) : (
                <li className="sub backcolor">{t("요금")}</li>
              )}
            </LinkComponent>

            <li>
              <ul
                className="sub subtitle subback"
                style={{
                  cursor: "auto",
                  border: "0",
                }}
              >
                {t("로그")}
              </ul>
              <ul>
                <LinkComponent href="/document/ompass-log">
                  {props.document_OmpassLog === true ? (
                    <li className="sub backcolor sub2 select">
                      - {t("OMPASS 로그")}
                    </li>
                  ) : (
                    <li className="sub backcolor sub2">- {t("OMPASS 로그")}</li>
                  )}
                </LinkComponent>

                <LinkComponent href="/document/log">
                  {props.document_log === true ? (
                    <li
                      className="sub backcolor sub2 select mobile-bottom"
                      style={{ border: "0" }}
                    >
                      - {t("정책 로그")}
                    </li>
                  ) : (
                    <li
                      className="sub backcolor sub2 mobile-bottom"
                      style={{ border: "0" }}
                    >
                      - {t("정책 로그")}
                    </li>
                  )}
                </LinkComponent>
              </ul>
            </li>
          </ul>
        </li>

        <li className="title gnb">
          <span>
            <p>
              <FileTextOutlined /> &nbsp;&nbsp; REST API
            </p>
          </span>

          <ul>
            <LinkComponent href="/document/rest-api-u2f">
              {props.start === true ? (
                <li className="sub backcolor select" style={{ border: "0" }}>
                  U2F
                </li>
              ) : (
                <li className="sub backcolor" style={{ border: "0" }}>
                  U2F
                </li>
              )}
            </LinkComponent>
            <LinkComponent href="/document/rest-api-uaf">
              {props.start2 === true ? (
                <li className="sub backcolor select" style={{ border: "0" }}>
                  UAF
                </li>
              ) : (
                <li className="sub backcolor" style={{ border: "0" }}>
                  UAF
                </li>
              )}
            </LinkComponent>
            <LinkComponent href="/document/rest-api-user-reset">
              {props.reset === true ? (
                <li
                  className="sub backcolor select mobile-bottom"
                  style={{ border: "0" }}
                >
                  {t("OMPASS 등록 초기화")}
                </li>
              ) : (
                <li
                  className="sub backcolor mobile-bottom"
                  style={{ border: "0" }}
                >
                  {t("OMPASS 등록 초기화")}
                </li>
              )}
            </LinkComponent>
          </ul>
        </li>

        <li className="title gnb">
          <span>
            <p>
              <AppstoreOutlined />
              &nbsp;&nbsp; {t("모바일 앱")}
            </p>
          </span>

          <ul>
            <LinkComponent href="/document/android">
              {props.document_android === true ? (
                <li className="sub backcolor select">{t("안드로이드")}</li>
              ) : (
                <li className="sub backcolor">{t("안드로이드")}</li>
              )}
            </LinkComponent>

            <LinkComponent href="/document/ios">
              {props.document_IOS === true ? (
                <li
                  className="sub backcolor select mobile-bottom"
                  style={{ border: "0" }}
                >
                  iOS
                </li>
              ) : (
                <li
                  className="sub backcolor mobile-bottom"
                  style={{ border: "0" }}
                >
                  iOS
                </li>
              )}
            </LinkComponent>
          </ul>
        </li>
      </div>
    </ul>
  );
}
export default Document;
