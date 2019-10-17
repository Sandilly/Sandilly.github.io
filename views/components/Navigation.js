let Navigation = {
    render: async () => {
        let view = /*html*/`
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            <img src="https://thelogo.shop/wp-content/uploads/2016/12/11-Letter-S.png" />
                        </a>
                    </div>
                    <div class="navbar-menu">
                        <ul>
                            <li>
                                <a href="/#/portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="/#/about">About</a>
                            </li>
                            <li><a href="/#/contact">Contact</a></li>
                        </ul>                
                    </div>
                </div>
            </nav>
        `

        return view;
    },
    afterRender: async () => {}
};

export default Navigation;