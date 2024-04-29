import axios from 'axios'

export const isExistDomainApi = (domain) => { // 존재하는 도메인인지 체크하는 API
    return axios.get(`/v2/subdomain/${domain}/existence`)
}