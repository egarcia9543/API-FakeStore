let id = document.getElementById("nombre").value;


function actualizar() {
    fetch('https://fakestoreapi.com/products/7', {
        method: "PUT",
        body: JSON.stringify(
            {
                title: id,
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
}

