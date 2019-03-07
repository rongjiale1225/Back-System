const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true});

// 规定商品数据库的文档格式
var shopItemSchema = new mongoose.Schema({
    img: String,   //商品图片
    name: String,  //商品名称
    price: Number,  //价格
    description: String,   //商品描述
    showTime: Number,      //上架时间
    publishTime: Number    //发布时间
})
//建立模型，映射一个集合
var Items = mongoose.model('shoplist',shopItemSchema); 

Items.find({}).exec().then(res => {
    console.log(res,11111);
})


//获取商品列表
const getShopList = () => {
    return Items.find({}).exec();
}



module.exports = {
    getShopList
}