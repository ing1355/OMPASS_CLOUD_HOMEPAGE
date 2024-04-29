import React, { useEffect, useState } from "react";
import $ from "jquery";

import styles from "../../css/Document.module.css";

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
import { usePathname } from "next/navigation";

const classNames = ["sub", "backcolor"]
const targetClassName = (isSelected, isLast, isSub) => {
  let cNames = [...classNames]
  if (isSub) cNames.push("sub2")
  if (isLast) cNames.push("mobile-bottom")
  if (isSelected) cNames.push("select")
  
  return cNames.map(_ => styles[_]).join(" ")
}

const MenuGroup = ({ title, titleIcon, items }) => {
  const { t } = useTranslation();
  const pathname = usePathname()
  const convertedPathName = '/' + pathname.split('/').slice(-2,).join('/')
  return <li className={`${styles["title"]} ${styles["gnb"]}`}>
    <span>
      <p>
        {titleIcon}
        &nbsp;&nbsp; {t(title)}
      </p>
    </span>

    <ul>
      {
        items.map((_, ind, arr) => _.hasSub ? <li key={ind}>
          <ul
            className={`${styles['sub']} ${styles['subtitle']} ${styles['subback']}`}
            style={{
              cursor: "auto",
              border: "0",
            }}
          >
            {_.title}
          </ul>
          <ul>
            {
              _.subItems.map((__, _ind, _arr) => <LinkComponent href={__.link} key={_ind}>
                <li
                  className={targetClassName(convertedPathName === __.link, _arr.length - 1 === _ind, true)}
                  style={_arr.length - 1 === _ind ? { border: 0 } : {}}
                >
                  - {__.title}
                </li>
              </LinkComponent>)
            }
          </ul>
        </li> : <LinkComponent href={_.link} key={ind}>
          <li
            className={targetClassName(convertedPathName === _.link, arr.length - 1 === ind, false)}
            style={arr.length - 1 === ind ? { border: 0 } : {}}
          >
            {_.title}
          </li>
        </LinkComponent>)
      }
    </ul>
  </li>
}

function Document() {
  const { t } = useTranslation();
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    $(window)
      .resize(function () {
        var width = $(window).width();
        if (width <= 1024) {
          // $(".mobile-menu-button").show();
          // $(".scrollBar").hide();
        } else {
          $("#scrollBar").show();
          // $(".mobile-menu-button").hide();
        }
      })
      .resize();
  });

  return (
    <ul className={styles["sidebar"]}>
      <h2 className={styles["pc-title"]}>OMPASS Developers</h2>

      <h2
        className={styles["mobile-title"]}
        onClick={() => {
          $("#scrollBar").slideToggle();
          setIcon(!icon);
        }}
      >
        OMPASS Developers
        <b className={styles["mobile-title-p"]}>
          {icon === false ? <UpOutlined /> : <DownOutlined />}
        </b>
      </h2>

      <div className={styles["scrollBar"]} id="scrollBar">
        <MenuGroup titleIcon={<LockOutlined />} title="원모어패스 로그인이란?" items={[
          {
            title: "U2F/UAF",
            link: "/document/u2f-uaf"
          }
        ]} />
        <MenuGroup titleIcon={<SendOutlined />} title="원모어패스 시작하기" items={[
          {
            title: t("회원가입"),
            link: "/document/join"
          },
          {
            title: t("로그인"),
            link: "/document/login"
          }
        ]} />
        <MenuGroup titleIcon={<SettingOutlined />} title="관리자 페이지" items={[
          {
            title: t("대시보드"),
            link: "/document/dashboard"
          },
          {
            title: t("어플리케이션 관리"),
            hasSub: true,
            subItems: [
              {
                title: t("어플리케이션"),
                link: "/document/application"
              },
              {
                title: t("기본 정책"),
                link: "/document/policy",
              },
              {
                title: t("사용자 정의 정책"),
                link: "/document/user-policy",
              }
            ]
          },
          {
            title: t("사용자 관리"),
            link: "/document/users",
          },
          {
            title: t("관리자 관리"),
            link: "/document/admin",
          },
          {
            title: t("요금"),
            link: "/document/billing",
          },
          {
            title: t("로그"),
            hasSub: true,
            subItems: [
              {
                title: t("OMPASS 로그"),
                link: "/document/ompass-log",
              },
              {
                title: t("정책 로그"),
                link: "/document/log",
              }
            ]
          }
        ]} />
        <MenuGroup titleIcon={<FileTextOutlined />} title="REST API" items={[
          {
            title: "U2F",
            link: "/document/rest-api-u2f",
          },
          {
            title: "UAF",
            link: "/document/rest-api-uaf",
          },
          {
            title: "OMPASS 등록 초기화",
            link: "/document/rest-api-user-reset",
          }
        ]}
        />
        <MenuGroup titleIcon={<AppstoreOutlined />} title={t("모바일 앱")} items={[
          {
            title: t("안드로이드"),
            link: "/document/android",
          },
          {
            title: "iOS",
            link: "/document/ios",
          }
        ]}
        />
      </div>
    </ul>
  );
}
export default Document;
