const path = require('path');
const status = require('../modules/status');



//处理响应的数据格式，设置响应头
const jasonFormal = (req,res,next) =>{
    res.set('encoding', 'utf-8');

    res.set('content-type','application/json; chaarset=utf8');
    next();
}
//处理响应返回的数据格式
const response = (state,req,res,next) => {
    res.render('defalut',{
        data: JSON.stringify(res.responseData || {}),
        status: status[state]
    })
    next()
}
module.exports = {
    jasonFormal,
    response 
}