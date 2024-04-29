import koCommon from './ko/common.json'
import koServer from './ko/serverError.json'
import enCommon from './en/common.json'
import enServer from './en/serverError.json'

export default {
    ko: Object.assign({}, koCommon, koServer),
    en: Object.assign({}, enCommon, enServer)
}