import useTranslation from "../lib/useTranslation";
import LinkComponent from "./Link";

const getAdminHomePage = (locale) => process.env.adminRoute + "/" + locale;

const LinkToLoginPage = () => {
    const { t, isKr } = useTranslation();
    return (
        <LinkComponent
            style={{
                marginLeft: "4px",
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: "500",
                color: "blue",
            }}
            href={isKr ? getAdminHomePage("ko") : getAdminHomePage("en")}
            target="_blank"
        >
            {t("로그인 페이지 이동하기")}
        </LinkComponent>
    );
};

export default LinkToLoginPage