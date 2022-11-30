import request from "@/utils/request"
export function login(params = {}) {
    return request({
        method: 'post',
        url: '/sign/web/login',
        data: params,

        headers: {
            'Content-Type': 'application/json',
            'language': 'en-US'
        },

    })
}
export function logout() {
    return request({
        method: 'post',
        url: '/sign/web/logout',
        headers: {
            'Authorization': localStorage.getItem("token"),
            'language': 'en-US'

        },
        // data: params
    })
}
export function search() {
    return request({
        method: 'post',
        url: '/node/search',
        headers: {
            'Authorization': localStorage.getItem("token"),
            'language': 'en-US'

        },
    })
}