import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import "../css/NavbarTop.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import $ from "jquery";
import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import LinkComponent from "./Link";
import LanguageSwitchLink from "./LanguageSwitchLink";
import useTranslation from "../lib/useTranslation";

function NavbarTop() {
  const router = useRouter();
  const { t, isKr } = useTranslation();
  const [langbox, setLangbox] = useState(false);

  useEffect(() => {
    $(window)
      .resize(function () {
        if (window.outerWidth <= 780) {
          $(".nav-menu-item, .dropDown_bg").hide();
          $(".nav-menu-item li").click(function () {
            $(".nav-menu-item, .dropDown_bg").show();
          });
        } else {
          $(".nav-menu-item").show();
          $(".nav-menu-item li").show();
        }
      })
      .resize();
  });

  return (
    <div className="navbar-div">
      <nav className="navbar-nav">
        <ul className="menu-title">
          <li className="logo">
            <LinkComponent href="/">OMPASS</LinkComponent>
          </li>
          <li
            className="mobile-button"
            onClick={() => {
              $(".nav-menu-item").slideToggle();
              $(".dropDown_bg").slideToggle();
            }}
          >
            <MenuOutlined />
          </li>
        </ul>
        <ul className="nav-menu-item">
          <div className="nav-menu-item-div">
            <li>
              <LinkComponent href="/">Home</LinkComponent>
            </li>
            {!router.route.includes("/on-premise") && (
              <>
                <li>
                  <LinkComponent href="/pricing">Pricing</LinkComponent>
                </li>
                <li>
                  <LinkComponent href="/support">Support</LinkComponent>
                </li>
                <li>
                  <LinkComponent href="/document/u2f-uaf">
                    Document
                  </LinkComponent>
                </li>
              </>
            )}
          </div>

          <div className="langbutton-mobile-div">
            <li className="langbutton-mobile">
              <LanguageSwitchLink locale="ko" className="langkobutton">
                <FontAwesomeIcon className="globalIcon" icon={faGlobe} />
                &nbsp;&nbsp; KOREA / 한국어
              </LanguageSwitchLink>

              <LanguageSwitchLink locale="en" className="langenbutton">
                <FontAwesomeIcon className="globalIcon" icon={faGlobe} />
                &nbsp;&nbsp; GLOBAL / ENGLISH
              </LanguageSwitchLink>
            </li>
            <li className="admin-login-button-mobile">
              <LinkComponent
                href="https://admin.ompasscloud.com/login"
                target="_blank"
              >
                <LogoutOutlined />
                &nbsp;ADMIN LOGIN
              </LinkComponent>
            </li>
          </div>
        </ul>

        <ul className="nav-menu-item langbutton-pc">
          <li>
            <button
              onClick={() => {
                setLangbox(!langbox);
              }}
              className="lang-button"
            >
              <a>
                <FontAwesomeIcon className="globalIcon" icon={faGlobe} />
                &nbsp;&nbsp;{isKr ? "KO" : "EN"}
              </a>

              {langbox === true && (
                <div className="lang-drop-down-box">
                  <LanguageSwitchLink locale="en" />
                  <LanguageSwitchLink locale="ko" />
                </div>
              )}
            </button>
          </li>
          <li className="admin-login-button">
            <LinkComponent
              href="https://admin.ompasscloud.com/login"
              target="_blank"
            >
              <LogoutOutlined />
              &nbsp; ADMIN LOGIN
            </LinkComponent>
          </li>
        </ul>

        {/* <div className="dropDown_bg"></div> */}
      </nav>
    </div>
  );
}
export default NavbarTop;
