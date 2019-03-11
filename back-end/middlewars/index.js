const path = require('path');
const status = require('../modules/status');
const multer = require('multer');



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

//处理接收、存储图片
const uploadImage = (req,res,next) => {
    //控住图片存储位置信息
    var storage = multer.diskStorage({
        // 控制存储位置
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../public/images/upload'))
        },
        filename: function (req, file, cb) {
            // 处理存储时的文件名字
            let extname = path.extname(file.originalname)
            let basename = path.basename(file.originalname, extname)
            let filename = basename + '-' + Date.now() + extname
            // 挂载在req.body上方便传递给下一个中间件
            req.body.img = '/images/upload/' + filename
            cb(null, filename)
        }
    })
    //文件类型过滤
    // 文件类型过滤
    let fileFilter = (req, file, cb) => {
        let flag = file.mimetype.startsWith('image/')
        cb(flag ? null : '请上传正确的图片格式', flag)
    }
    
    let upload = multer({ storage, fileFilter }).single('shopImage') // 上传文件的中间件

    upload(req, res, (err) => {
        if ( err ) {
            req.error = err
            next()
        } else {
            next()
        }
    })
}
module.exports = {
    jasonFormal,
    response,
    uploadImage 
}