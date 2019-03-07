// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shops', {useNewUrlParser: true});

// // 规定商品数据库的文档格式
// var shopItemSchema = new mongoose.Schema({
//     img: String,   //商品图片
//     name: String,  //商品名称
//     price: Number,  //价格
//     description: String,   //商品描述
//     showTime: Number,      //上架时间
//     publishTime: Number    //发布时间
// })

// var Items = mongoose.model('item',shopItemSchema); 



let shoppingList = [
    {img:'aswqrtreg',name:'鞋子',price: 2000,description: 'dsadsdsad',showTime: 1561256546312,publishTime:2313131221565}
]


module.exports = {
    shoppingList
}