import Link from 'next/link'
import { useRouter } from 'next/router'
import languageDetector from '../lib/languageDetector'

const LanguageSwitchLink = ({ locale, ...rest }) => {
    const router = useRouter()
    let href = rest.href || router.asPath
    let pName = router.pathname
    
    console.log(rest, router, href)
    Object.keys(router.query).forEach(k => {
        if (k === 'locale') {
            pName = pName.replace(`[${k}]`, locale)
            return
        }
        pName = pName.replace(`[${k}]`, router.query[k])
    })
    if (locale) {
        href = rest.href ? `/${locale}${rest.href}` : pName
    }
    const changeLanguage = () => {
        languageDetector.cache(locale)
        document.documentElement.setAttribute('lang', locale)
    }
    console.log(href)
    return <Link href={href} passHref>
        <a onClick={changeLanguage}><li>{locale === 'ko' ? 'KOREA / 한국어' : 'GLOBAL / ENGLISH'}</li></a>
    </Link>
}

export default LanguageSwitchLink