import { apiUrl } from '../../services/Constants.js';
import Card from '../components/Card.js';
import Utils from '../../services/Utils.js';

let Portfolio = {
    render: async () => {
        let pieces = await Utils.getApiJson(apiUrl);
        let view = /*html*/ `
        <section class="section">
            <h1>Portfolio</h1>
            ${ pieces.map(piece => Card.render(piece)).join('\n ')}
        </section>
    `
    return view;
    },
    afterRender: async () => {}
}

export default Portfolio;