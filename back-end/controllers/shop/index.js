const shopModel = require('../../models/shop');
const moment = require('moment');

//获取商品信息
const getShoppingLists =async (req,res,next) => {
    let data = await shopModel.getShopLists();
    res.responseData = {
        data:data
    }
    next('success');
}


//发布商品信息
const postShoppingList = async (req,res,next) => {
    let {name,price,description,showTime} = req.body;
    //查看是否有参数缺失
    if (name && price && description && showTime){
        try {
            price = Number(price);
            showTime = new Date(moment(showTime)).getTime();
            let data = await shopModel.postShopList({
                name,price,description,showTime,
                publishTime:Date.now(),
            });
            next('success')
        }catch(e){
            console.log(e);
            next('miss param')
        }
    }

}



module.exports = {
    getShoppingLists,
    postShoppingList
}