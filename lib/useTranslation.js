import { useRouter } from "next/router"
import i18nextConfig from '../next-i18next.config'
import common_locales from '../public/locales'

const useTranslation = () => {
    const router = useRouter()
    const locale = router.query.locale || i18nextConfig.i18n.defaultLocale
    const t = (key) => common_locales[locale][key]
    const isKr = locale === 'ko'
    return {t, locale, isKr}
}

export default useTranslation