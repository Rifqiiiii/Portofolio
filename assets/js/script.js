document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const correctUsername = 'rifqi';
    const correctPassword = 'rifqi';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        alert("login berhasil");
        window.location.href = 'D:\Asus\OneDrive\portofolio\index.html';
    } else {
        alert("username atau password tidak sesuai");
    }
});