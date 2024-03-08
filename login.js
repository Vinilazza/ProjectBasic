const users = {
        email: 'vini',
    password: 'vini'
}

const button = document.getElementById("formLogin")
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

button.addEventListener("click", (e) => {
    e.preventDefault();


    if (users.email == email && users.password == password) {
        console.log("SUS")
    }
    else {
        console.log("error")
    }
})
