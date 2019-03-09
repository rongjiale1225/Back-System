import request from '@utils/request'

// 获取商品信息
const getShopLists = () => {
    return request({
        url: '/api/v1/shop/shoplists'
    })
}

//发布商品信息
const postShopList = (data) => {
    console.log(data,1111)
    return request({
        url:'/api/v1/shop/publish',
        type: 'post',
        data,
        // headers: {
        //     'content-type': 'application/json'
        // }
    })
}


export {
    getShopLists,
    postShopList
}