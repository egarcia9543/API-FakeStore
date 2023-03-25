const productsContainer = document.getElementById("productos");
const buttonPrev = document.querySelector("#previous");
const buttonNext = document.querySelector("#next");

let offset = 1;
let limit = 9;


buttonPrev.addEventListener("click", () => {
    if (offset != 1) {
        offset -= 10;
        removeChilds(productsContainer);
        fetchProductos(offset, limit);
    }
})

buttonNext.addEventListener("click", () => {
    offset += 10;
    removeChilds(productsContainer);
    fetchProductos(offset, limit);
})

//Traer todos los productos
function fetchProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            createProduct(data);
        })
}

function fetchProductos(offset, limit) {
    for (let i = offset; i <= offset + limit; i++) {
        fetchProduct(i)
    }
}

//

function createProduct(productos) {
    let productCard = document.createElement("div");
    productCard.classList.add("product__card");

    let image = document.createElement("img");
    image.classList.add("product__img")
    image.src = productos.image

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("product__info");

    let price = document.createElement("p");
    price.innerText = `$ ${productos.price}`
    price.classList.add("product__price");

    let name = document.createElement("p");
    name.innerText = productos.title

    infoContainer.appendChild(name);

    productCard.appendChild(image);
    productCard.appendChild(infoContainer);
    productCard.appendChild(price);
    productsContainer.appendChild(productCard);
}

function removeChilds (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

fetchProductos(offset, limit);