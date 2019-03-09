var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shop')
const { response } = require('../middlewars')


//获取商品信息
router.get('/shoplists', shopController.getShoppingLists, response);
//发布商品信息
router.post('/publish',shopController.postShoppingList, response)
  
module.exports = router;