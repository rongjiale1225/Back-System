import appHeaderView from '../views/main/app-header-view.html';
import appNavView from '../views/main/app-nav-view.html';
import appContentView from '../views/main/app-content-view.html';
import angel from '../utils/angel'


const render = () => {
   let $wrapper = $('#app'); //app主体容器
   //放入头部渲染
   $wrapper.append(appHeaderView);
   //放入侧边导航栏
   $wrapper.append(appNavView);
   //放入主体内容模块
   $wrapper.append(appContentView);
   //左侧导航栏增加点击事件
   $('.router-link').click(function () {
      let url = $(this).data('route') // 获取url
      angel.emit('go', url) // 进行跳转
  })

}



export default{
   render
}