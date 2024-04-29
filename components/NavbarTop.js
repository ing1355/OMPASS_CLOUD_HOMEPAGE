import React, { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../css/NavbarTop.module.css";

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
import { AdminLoginRoute } from "../lib/ConstantsValues";

function NavbarTop() {
  const router = useRouter();
  const { isKr } = useTranslation();

  // const getAdminHomePage = (locale) => `${process.env.adminRoute}/${locale}`;

  useEffect(() => {
    $(window)
    .resize(function () {
      if (window.outerWidth <= 780) {
          console.log($.contains(".nav-menu-item"))
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
    <div className={styles["navbar-div"]}>
      <nav className={styles["navbar-nav"]}>
        <ul className={styles["menu-title"]}>
          <li className={styles["logo"]}>
            <LinkComponent href="/">OMPASS</LinkComponent>
          </li>
          <li className={styles["mobile-button"]}>
            <div>
              <LanguageSwitchLink
                locale={isKr ? "en" : "ko"}
                className={styles[isKr ? "langenbutton" : "langkobutton"]}
              >
                <FontAwesomeIcon className={styles["globalIcon"]} icon={faGlobe} />
                &nbsp;{isKr ? "EN" : "KO"}
              </LanguageSwitchLink>
            </div>

            <div
              onClick={() => {
                $(".nav-menu-item").slideToggle();
                $(".scrollBar").hide();
              }}
            >
              <MenuOutlined className={styles["mobile-menu-icon"]} />
            </div>
          </li>
        </ul>
        <ul className={styles["nav-menu-item"]}>
          <div className={styles["nav-menu-item-div"]}>
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

          <div className={styles["langbutton-mobile-div"]}>
            <li className={styles["admin-login-button-mobile"]}>
              <LinkComponent
                // href={isKr ? getAdminHomePage("ko") : getAdminHomePage("en")}
                href={AdminLoginRoute}
                target="_blank"
              >
                <LogoutOutlined />
                &nbsp;ADMIN LOGIN
              </LinkComponent>
            </li>
          </div>
        </ul>

        <ul className={`${styles["nav-menu-item"]} ${styles["langbutton-pc"]}`}>
          <li style={{ marginRight: "1rem" }}>
            <LanguageSwitchLink
              locale={isKr ? "en" : "ko"}
              className={styles[isKr ? "langenbutton" : "langkobutton"]}
            >
              <FontAwesomeIcon className={styles["globalIcon"]} icon={faGlobe} />
              &nbsp;{isKr ? "EN" : "KO"}
            </LanguageSwitchLink>
          </li>
          <li className={styles["admin-login-button"]}>
            <LinkComponent
              // href={isKr ? getAdminHomePage("ko") : getAdminHomePage("en")}
              href={AdminLoginRoute}
              target="_blank"
            >
              <LogoutOutlined className={styles["locale-global-icon"]} />
              &nbsp; ADMIN LOGIN
            </LinkComponent>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavbarTop;
