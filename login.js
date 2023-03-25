let usuario = document.getElementById("username").value;
let contrasenia = document.getElementById("password").value;

function login() {
    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usuario,
            password: contrasenia
        })
    })
        .then(res => res.json())
        .then(json => console.log(json))
}


