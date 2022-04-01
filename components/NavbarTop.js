import React, { useEffect } from "react";
import { useRouter } from "next/router";

import "../css/NavbarTop.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import $ from "jquery";
import {
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import LinkComponent from "./Link";
import LanguageSwitchLink from "./LanguageSwitchLink";
import useTranslation from "../lib/useTranslation";

function NavbarTop() {
  const router = useRouter();
  const { isKr } = useTranslation();

  const getAdminHomePage = (locale) => process.env.adminRoute + "/" + locale;

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
          <li className="mobile-button">
            <div>
              <LanguageSwitchLink
                locale={isKr ? "en" : "ko"}
                className={isKr ? "langenbutton" : "langkobutton"}
              >
                <FontAwesomeIcon className="globalIcon" icon={faGlobe} />
                &nbsp;{isKr ? "EN" : "KO"}
              </LanguageSwitchLink>
            </div>

            <div
              onClick={() => {
                $(".nav-menu-item").slideToggle();
                $(".scrollBar").hide();
              }}
            >
              <MenuOutlined className="mobile-menu-icon" />
            </div>
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
            <li className="admin-login-button-mobile">
              <LinkComponent
                href={isKr ? getAdminHomePage("ko") : getAdminHomePage("en")}
                target="_blank"
              >
                <LogoutOutlined className="locale-global-icon" />
                &nbsp;ADMIN LOGIN
              </LinkComponent>
            </li>
          </div>
        </ul>

        <ul className="nav-menu-item langbutton-pc">
          <li style={{ marginRight: "1rem" }}>
            <LanguageSwitchLink
              locale={isKr ? "en" : "ko"}
              className={isKr ? "langenbutton" : "langkobutton"}
            >
              <FontAwesomeIcon className="globalIcon" icon={faGlobe} />
              &nbsp;{isKr ? "EN" : "KO"}
            </LanguageSwitchLink>
          </li>
          <li className="admin-login-button">
            <LinkComponent
              href={isKr ? getAdminHomePage("ko") : getAdminHomePage("en")}
              target="_blank"
            >
              <LogoutOutlined className="locale-global-icon" />
              &nbsp; ADMIN LOGIN
            </LinkComponent>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavbarTop;
