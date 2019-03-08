import request from '@utils/request'

// 获取电影信息
const getShopLists = () => {
    return request({
        url: '/api/v1/shop/shoplists'
    })
}


export {
    getShopLists
}