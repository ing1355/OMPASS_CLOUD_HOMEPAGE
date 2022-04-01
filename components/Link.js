import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkComponent = ({ children, skipLocaleHandling, style, className, disabled, ...rest }) => {
    const router = useRouter()
    const locale = rest.locale || router.query.locale || ''
    let href = (rest.href.pathname || rest.href) || router.asPath
    if(href.indexOf('http') === 0) skipLocaleHandling = true
    if(locale && !skipLocaleHandling) {
        href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale)
    }
    return <>
        <Link href={rest.href.pathname ? {pathname: href, query: rest.href.query} : href} passHref>
            <a {...rest} style={style} className={className}>{children}</a>
        </Link>
    </>
}

export default LinkComponent