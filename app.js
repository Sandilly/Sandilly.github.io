import Home from './views/pages/Home.js';
import About from './views/pages/About.js';
import Error404 from './views/pages/Error404.js';
import Portfolio from './views/pages/Portfolio.js';
import Contact from '/views/pages/Contact.js';
import Item from '/views/pages/Item.js'

import Navigation from './views/components/Navigation.js';
import Footer  from './views/components/Footer.js';

import Utils from './services/Utils.js'
;

const routes = {
    '/' : Home,
    '/about' : About,
    '/portfolio' : Portfolio,
    '/portfolio/:id' : Item,
    '/contact' : Contact
};

const router = async() => {
    const headerContainer = null || document.getElementById("header");
    const contentContainer = null || document.getElementById("page");
    const footerContainer = null || document.getElementById("footer");

    headerContainer.innerHTML = await Navigation.render();
    await Navigation.afterRender();
    footerContainer.innerHTML = await Footer.render();
    await Footer.afterRender();

    let req = Utils.parseReqUrl();
    let parsedURL = (req.resource ? '/' + req.resource : '/') + (req.id ? '/:id' : '') + (req.verb ? '/' + req.verb : '')
    let page = routes[parsedURL] || Error404;

    contentContainer.innerHTML = await page.render();
    await page.afterRender();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);


