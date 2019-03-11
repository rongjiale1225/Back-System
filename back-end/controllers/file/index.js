
//处理接收图片功能函数
const fileUploadImage = (req,res,next) => {
    if ( req.error ) {
        next('illegal')
    }else {
        res.responseData = {
            img:req.body.img
        }
        next('success')
    }
}

module.exports = {
    fileUploadImage
}