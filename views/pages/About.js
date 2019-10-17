let About = {
    render: async() => {
        let view = /*html*/ `
            <section class="section">
                <h1>About</h1>
                <p>I am so cool I dont know what to say</p>
            </section>
        `
        return view;
    },
    afterRender: async () => {}
}

export default About;