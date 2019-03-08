import appHeaderView from '../views/main/app-header-view.html';
import appNavView from '../views/main/app-nav-view.html';
import appContentView from '../views/main/app-content-view.html';


const render = () => {
   let $wrapper = $('#app'); //app主体容器
   //放入头部渲染
   $wrapper.append(appHeaderView);
   //放入侧边导航栏
   $wrapper.append(appNavView);
   //放入主体内容模块
   $wrapper.append(appContentView);
}



export default{
   render
}