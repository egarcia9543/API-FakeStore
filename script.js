let id = document.getElementById("nombre").value;

//Contenedor para insertar los elementos
//let tableContainer = document.getElementById("tableContainer");


function fetchProduct() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            createProductCard(json);
        })
}

function createProductCard(productos) {
    //let tableContainer = document.getElementById("tableContainer");
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

        tableContainer.appendChild(tableRow);

        tableRow.appendChild(title);
        tableRow.appendChild(price);
        tableRow.appendChild(description);
        tableRow.appendChild(categoria);
    });
}