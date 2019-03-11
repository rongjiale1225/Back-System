import appShoplistsContentView from '@views/route/app-shop-shoplist-content.html'
import appShoplistsView from '@views/route/app-shop-shoplist.html'
import {getShopLists} from '@models/app-model.js'
const render = async (req,res,next) => {
    let data = await getShopLists();
    console.log(data);
    res.render(template.compile(appShoplistsView)({
        item:data.data
    }));
}

export default {
    render
}