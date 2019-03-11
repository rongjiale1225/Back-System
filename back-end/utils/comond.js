const moment = require('moment')

const setTime = ( shopList ) => {
    let state = (shopList.publishTime - shopList.showTime) > 0 ? 'playing' : 'coming';
    let publishTime = moment(shopList.publishTime).format('YYYY-MM-DD');
    let showTime = moment(shopList.showTime).format('YYYY-MM-DD');
    return Object.assign({},shopList._doc,{
        state,publishTime,showTime
    })
    
}


module.exports = {
    setTime
}