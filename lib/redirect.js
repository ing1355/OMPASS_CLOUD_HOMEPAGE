import { useRouter } from "next/router"
import { useEffect } from "react"
import languageDetector from "./languageDetector"

const useRedirect = (to) => {
    const router = useRouter()
    to = to || router.asPath
    useEffect(() => {
        const detectedLng = languageDetector.detect()
        let changeEvent = false;
        if (to.startsWith('/' + detectedLng) && router.route === '/404') {
            router.replace('/' + detectedLng + router.route)
            return
        }
        
        languageDetector.cache(detectedLng)
        if(to.match(/\/$/) && to !== '/') {
            to.slice(0,-1)
            changeEvent = true;
        }
        if(!to.startsWith('/ko') && !to.startsWith('/en')) {
            to = '/' + detectedLng + to;
            changeEvent = true;
        }
        if(changeEvent) router.replace(to)
    }, [])

    return <></>
}

export const Redirect = () => {
    useRedirect()
    return <></>
}

// eslint-disable-next-line react/display-name
export const getRedirect = to => () => {
    useRedirect(to)
    return <></>
}