const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true});

// 规定商品数据库的文档格式
var shopItemSchema = new mongoose.Schema({
    img: String,   //商品图片
    name: String,  //商品名称
    price: Number,  //价格
    description: String,   //商品描述
    showTime: Number,      //上架时间
    publishTime: Number,    //发布时间
    fullDescription: String    //商品详情描述
})
//建立模型，映射一个集合
var Shoplists = mongoose.model('shoplist',shopItemSchema); 


//获取商品列表
const getShopLists = () => {
    return Shoplists.find({});
}
//发布商品信息
const postShopList = (params) => {
    console.log(params,2222)
    let html = parmas.description;
    let formatHtml = html.raplace(/<[^>]*>/g, '')
    params.description = formatHtml.slice(0,30) + '...';
    params.fullDescription = html;
    return Shoplists.insertMany(params);
    
}


module.exports = {
    getShopLists,
    postShopList
}