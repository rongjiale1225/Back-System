import SMERouter from 'sme-router';


const init = () => {
    const router = new SMERouter('router-view');
    //进入项目后如果没有hash值就加一个默认值
    if( !location.hash ){
        location.hash = '#/home';
    }


}

export default { init }