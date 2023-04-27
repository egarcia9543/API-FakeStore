
function fetchProduct() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            createProductCard(json);
        })
}

function createProductCard(productos) {
    let tableContainer = document.getElementById("tableContainer");
    productos.forEach(producto => {

        let tableRow = document.createElement("tr");

        let title = document.createElement("td");
        title.innerText = producto.title;

        let price = document.createElement("td");
        price.innerText = producto.price;

        let description = document.createElement("td");
        description.innerText = producto.description

        let categoria = document.createElement("td");
        categoria.innerText = producto.category

        let buttonsContainer = document.createElement("td");
        buttonsContainer.innerHTML = `<button onclick = "updateProduct(${producto.id})">Actualizar</button> <button onclick = "deleteProduct(${producto.id})">Eliminar</button>`

        tableContainer.appendChild(tableRow);

        tableRow.appendChild(title);
        tableRow.appendChild(price);
        tableRow.appendChild(description);
        tableRow.appendChild(categoria);
        tableRow.appendChild(buttonsContainer)
    });
}

function updateProduct(id) {
    const succes = document.querySelector(".alert-success");
    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .then(succes.classList.remove("hidden"))
}

function deleteProduct(id) {
    const deleteSucces = document.querySelector(".alert-danger")
    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .then(deleteSucces.classList.remove("hidden"))
}


function addNewProduct(id) {
    let productTitle = document.getElementById("title").value;
    let productPrice = document.getElementById("price").value;
    let productDescription = document.getElementById("description").value;
    let productCategory = document.getElementById("category").value;
    fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title: productTitle,
                price: productPrice,
                description: productDescription,
                image: 'https://i.pravatar.cc',
                category: productCategory
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
}

function closeD() {
    let deleteSucces = document.querySelector(".alert-danger");
    deleteSucces.classList.add("hidden");
}

function closeS() {
    let succes = document.querySelector(".alert-success");
    succes.classList.add("hidden")
}

