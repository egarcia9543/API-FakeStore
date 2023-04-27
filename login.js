function login() {
    fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: "admin@mail.com",
            password: "admin123"
        })
    })
        .then(res => res.json())
        .then(json => console.log(json))
}