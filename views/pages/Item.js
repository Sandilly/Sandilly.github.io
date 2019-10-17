import Utils from '../../services/Utils.js';
import { apiUrl } from '../../services/Constants.js';

import Error404 from './Error404.js'

const idUnknown = "Not found";

let Item = {
    render: async () => {
        let request = Utils.parseReqUrl();
        let item = await Utils.getApiJson(apiUrl + "/" + request.id);

        if(item === idUnknown) {
            return Error404.render();
        }

        let view = /*html*/`
            <section class="section">
                <h1>Item ${item.title}</h1>
                <img src=${item.imageUrl} />
                <p>${item.caption}</p>
            </section>
        `
        return view;
    },
    afterRender: async () => {}
}

export default Item;