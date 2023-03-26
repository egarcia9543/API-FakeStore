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
    let i = 1
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
        buttonsContainer.innerHTML = `<button onclick = "updateProduct(${i})">Actualizar</button> <button onclick = "deleteProduct(${i})">Eliminar</button>`

        tableContainer.appendChild(tableRow);

        tableRow.appendChild(title);
        tableRow.appendChild(price);
        tableRow.appendChild(description);
        tableRow.appendChild(categoria);
        tableRow.appendChild(buttonsContainer)
        i++
    });
}

function updateProduct (id){
    const succes = document.querySelector(".alert");
    fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then(succes.classList.remove("hidden"))
}

function deleteProduct (id) {
    fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}