import appHomeView from '@views/route/app-home-view.html';

const render = (req,res,next) => {
       res.render(appHomeView)
}


export default {
    render
}