const shopModel = require('../../models/shop');


const getShoppingList =async (req,res,next) => {
    let data = await shopModel.getShopList();
    res.responseData = {
        data:data
    }
    next('success');
}



module.exports = {
    getShoppingList
}