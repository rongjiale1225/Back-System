var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shop')
const { response } = require('../middlewars')


//获取商品信息
router.get('/items', shopController.getShoppingList, response)
  
module.exports = router;