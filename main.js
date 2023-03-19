const productsContainer = document.getElementById("productos");
const buttonsContainer = document.getElementById("buttons");
//Traer todos los productos
function fetchProduct() {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => {
        createProduct(data)
        let totalProductos = data.length;

        const itemsPerPage = 20;

        let numberOfPages = totalProductos/itemsPerPage
        for (let i = 1; i < numberOfPages+1; i++){
            let buttonPage = document.createElement("button");
            buttonPage.textContent = i;
            buttonsContainer.appendChild(buttonPage);
        }
    })
}

//

function createProduct(productos) {
    productos.forEach(producto => {
        let productCard = document.createElement("div");
        productCard.classList.add("product__card");

        let image = document.createElement("img");
        image.classList.add("product__img")
        image.src = producto.images[0]

        let infoContainer = document.createElement("div");
        infoContainer.classList.add("product__info");

        let price = document.createElement("p");
        price.innerText = `$ ${producto.price}`
        price.classList.add("product__price");

        let name = document.createElement("p");
        name.innerText = producto.title

        infoContainer.appendChild(name);

        productCard.appendChild(image);
        productCard.appendChild(infoContainer);
        productCard.appendChild(price);
        productsContainer.appendChild(productCard);
    });
}
