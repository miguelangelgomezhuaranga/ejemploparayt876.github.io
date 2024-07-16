document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    
    if (localStorage.getItem(username)) {
        document.getElementById('message').innerText = 'El usuario ya existe';
    } else {
        localStorage.setItem(username, password);
        document.getElementById('message').innerText = 'Usuario registrado con éxito';
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (localStorage.getItem(username) === password) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'home.html';
    } else {
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedInUser')) {
        window.location.href = 'inicio1.html';
    }
});