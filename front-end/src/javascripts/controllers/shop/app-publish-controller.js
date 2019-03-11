import appPublishView from '@views/route/app-publish-view.html';
import angel from '@utils/angel';
import {postShopList} from '@models/app-model'


let img = ''; //存放图片路径
let editor = null;
const render = (req,res,next) => {
    res.render(appPublishView);

    //初始化日历插件
    $('#datepicker').date_input();

    //初始化富文本编辑插件
    editor = new Simditor({
        textarea: $('#item-description'),
        imageButton: ['upload'],
        upload: {
            url: '/api/v1/file/description/img',
            fileKey: 'movieImage',
            leaveConfirm: '正在上传文件..'
        }
    });

    //绑定各种事件
    bindEvents();

}

function bindEvents() {
    $('#publish-form').submit( async function(e){
        e.preventDefault();
        //获取表单元素的值
        let name = $('#item-title').val();
        let price = $('#item-price').val();
        let description = editor.getValue();
        let showTime = $('#datepicker').val();
        let data = await postShopList({
            name,price,description,showTime,img
        })
        //发布成功后跳转页面
        if(data){
            angel.emit('go','/shop/shoplists')
        }
    } )
    //上传图片
    $('.img-btn').click(function(e) {
        console.log(111111111111)
        // 触发上传图片input的click方法
        $('#item-img').trigger('click')
    })
    // 当用户选择好图片之后
    $('#item-img').change(function(e) {
        // 将图片内容转换为form-data的二进制格式，post到后端
        uploadImage(this)
    })
}

//上传图片具体逻辑
function uploadImage(inp) {
    let formData = new FormData()
    // 第一个参数为上传的字段
    formData.append('shopImage', inp.files[0])
    $.ajax({
        url: '/api/v1/file/upload/img',
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
    }).done((res) => {
        if ( res.code === 501 ) {
            $.Toast('Warning', res.msg, 'warning')
            return false;
        }
        img = 'http://localhost:3000' + res.data.img;
        $('.publish-img-box').removeClass('hidden').find('img').attr('src', img)
        $.Toast('Success', '图片上传成功', 'success')
    }).fail((error) => {
        $.Toast('Danger', '上传出错', 'error')
    })
}

export default {
    render
}