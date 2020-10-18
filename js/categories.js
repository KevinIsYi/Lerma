const cardsProducts = document.getElementById('cards-product');
const filterSection = document.getElementById('filter-section');

const cleanSection = () => {
    while(cardsProducts.firstChild) {
        cardsProducts.removeChild(cardsProducts.firstChild);
    }
}

const fillSection = (type) => {

    readTextFile('lerma.json', (text) => {
        cleanSection();

        let { products } = JSON.parse(text);

        console.log(type);
        if (type !== '') {
            products = products.filter(product => product.id[0] === type);
        }   

        products.forEach(product => {
            const div = document.createElement('div');
            const { id, name, price } = product;
            div.className = 'card-product';

            div.innerHTML = `
                <img src="./images/items/${ id }.jpg" alt=${ id }>
                <h1>${ name }</h1>
                <div class="price-see">
                    <p>$${ price }</p>
                    <button>See</button>
                </div>
            `;

            cardsProducts.appendChild(div);
        });
    });

}

const eventListener = () => {
    filterSection.addEventListener('click', (e) => {
        fillSection(e.target.id);
    });
}

eventListener();
