import SMERouter from 'sme-router';
import appHomeController from '@controllers/shop/app-home-controller'
import appShoplistsController from '@controllers/shop/app-shoplists-controller'
import appPublishController from '@controllers/shop/app-publish-controller'
import angel from '../utils/angel'

const init = () => {
    const router = new SMERouter('router-view');
    //进入项目后如果没有hash值就加一个默认值
    if( !location.hash ){
        location.hash = '#/home';
    }
    


    //设置路由
    router.route('/home',appHomeController.render);
    router.route('/shop/publish',appPublishController.render)
    router.route('/shop/shoplists',appShoplistsController.render);



    //默认路由 
    router.route('*', (req, res, next) => {
        res.redirect('/home')
    });

    router.use(req => {
        activeNavLink(req);
    });

    angel.on('go', router.go.bind(router))
    angel.on('back', router.back.bind(router))
    

}


function activeNavLink (req) {
    let route = req.route
    let firstRoute = route.split('/')[1] // 一级路由路径
    let $firstLi = $('.sidebar-menu>li')
    let length = $firstLi.length
    for (let i = 0; i < length; i++ ) {
        let $firstLiItem = $firstLi.eq(i)
        let ownDataRoute = $firstLiItem.data('route')// 一级li对应的路由属性data-route
        let ownRoute = ownDataRoute.split('/')[1]
        if ( ownRoute === firstRoute ) { // 判断一级路径哪个li能匹配
            $firstLiItem.addClass('active').siblings().removeClass('active')
            //判断这个li中又有哪个li能匹配到二级路由
            $firstLiItem.find('li').each(function () {
                if ( $(this).data('route') === route ) {
                    $(this).addClass('active').siblings().removeClass('active')
                }
            })
            break;
        }
    }
}

export default { init }