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

  const getAdminHomePage = locale => process.env.adminRoute + '/' + locale

  useEffect(() => {
    $(window)
      .resize(function () {
        var width = $(window).width();

        if (width <= 768) {
          $(".nav-menu-item").hide();
          $(".dropDown_bg").hide();
          $(".nav-menu-item").click(function () {
            $(".nav-menu-item").hide();
            $(".dropDown_bg").hide();
          });
        } else {
          $(".nav-menu-item").show();
          $(".dropDown_bg").hide();
        }
      })
      .resize();
  });

  return (
    <div className="navbar-div">
      <nav className="navbar-nav">
        <ul className="menu-title">
          <li className="logo">
            <LinkComponent href="/">
              OMPASS
            </LinkComponent>
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
          <li>
            <LinkComponent href="/">
              Home
            </LinkComponent>
          </li>
          {!router.route.includes('/on-premise') && <><li>
            <LinkComponent href="/pricing">
              Pricing
            </LinkComponent>
          </li>
            <li>
              <LinkComponent href="/support">
                Support
            </LinkComponent>
            </li>
            <li>
              <LinkComponent href="/document/u2f-uaf">
                Document
            </LinkComponent>
            </li></>}
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
            <LinkComponent href={isKr ? getAdminHomePage('ko') : getAdminHomePage('en')} target="_blank">
              <LogoutOutlined />
                &nbsp;{t("ADMIN LOGIN")}
            </LinkComponent>
          </li>
        </ul>
        <ul className="nav-menu-item langbutton-pc">
          <button
            onClick={() => {
              setLangbox(!langbox);
            }}
            className="lang-button"
          >
            <a className="langbutton-pc">
              <FontAwesomeIcon className="globalIcon" icon={faGlobe} />
              &nbsp;&nbsp;{isKr ? 'KO' : 'EN'}
            </a>

            {langbox === true && (
              <div className="lang-drop-down-box">
                <LanguageSwitchLink locale="en" />
                <LanguageSwitchLink locale="ko" />
              </div>
            )}
          </button>
          <li className="admin-login-button">
            <LinkComponent href={isKr ? getAdminHomePage('ko') : getAdminHomePage('en')} target="_blank">
              <LogoutOutlined />
                &nbsp;ADMIN LOGIN
            </LinkComponent>
          </li>
        </ul>

        <div className="dropDown_bg"></div>
      </nav>
    </div>
  );
}
export default NavbarTop;
