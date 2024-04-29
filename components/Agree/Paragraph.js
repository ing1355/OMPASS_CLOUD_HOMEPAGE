import useTranslation from "../../lib/useTranslation";

const Paragraph = ({ title, children }) => {
    const { t } = useTranslation();
    return <div>
        <h5>{t(title)}</h5>
        {children}
    </div>
}

export default Paragraph