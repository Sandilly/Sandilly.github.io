let Footer = {
    render: async () => {
        let view = /*html*/`
            <footer class="footer">
                <div class="content">
                    <p>
                        sandilly.github.io &copy; 2019
                    </p>
                </div>
            </footer>
        `

        return view;
    },
    afterRender: async () => {}
};

export default Footer;