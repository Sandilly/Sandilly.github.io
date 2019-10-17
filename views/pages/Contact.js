let Contact = {
    render: async () => {
        let view = /*html*/ `
            <section class="section">
                <h1>Contact</h1>
                <p>Call me</p>
            </section>
        `
        return view;
    },
    afterRender: async () => {}
}

export default Contact;