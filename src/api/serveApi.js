import request from "@/utils/request"
export function typeall() {
    return request({
        method: 'post',
        url: '/type/all',
        headers: {
            'Content-Type': 'application/json',
        },

    })
}
// 图片列表
export function listshow(params = {}) {
    return request({
        method: 'post',
        url: '/show/' + params.type + '/all',

        // data: params
    })
}