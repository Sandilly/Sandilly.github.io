let Card = {
    render: (piece) => {
        let view = /*html*/`
        <a href="#/portfolio/${piece.id}">
            <img src=${piece.imageUrl} />
        </a>`
        

        return view;
    },
    afterRender: async () => {}
}

export default Card;