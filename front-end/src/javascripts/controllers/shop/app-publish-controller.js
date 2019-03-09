import appPublishView from '@views/route/app-publish-view.html';
import angel from '@utils/angel';
import {postShopList} from '@models/app-model'



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

        let name = $('#item-title').val();
        let price = $('#item-price').val();
        let description = editor.getValue();
        let showTime = $('#datepicker').val();
        let data = await postShopList({
            name,price,description,showTime
        })
        console.log(data,22222);

    } )
}

export default {
    render
}