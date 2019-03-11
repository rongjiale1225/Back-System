const shopModel = require('../../models/shop');
const moment = require('moment');
const comond = require('../../utils/comond')

//获取商品信息
const getShoppingLists =async (req,res,next) => {
    let data = await shopModel.getShopLists();
    res.responseData = {
        data:data.shopList.map(comond.setTime)
    }
    next('success');
}


//发布商品信息
const postShoppingList = async (req,res,next) => {
    let {name,price,showTime,description,img} = req.body;
    console.log(req.body,666)
    //查看是否有参数缺失
    if (name && price && showTime && description){
        try {
            price = Number(price);
            showTime = new Date(moment(showTime)).getTime();
            let data = await shopModel.postShopList({
                name,price,description,showTime,
                publishTime:Date.now(),
                img
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