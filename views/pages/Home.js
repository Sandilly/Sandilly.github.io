let Home = {
    render: async () => {
        let view = /*html*/ `
        <section class="section">
            <h1>Home</h1>
            <p>Welcome to my site
        </section>
    `
    return view;
    },
    afterRender: async () => {}
}

export default Home;