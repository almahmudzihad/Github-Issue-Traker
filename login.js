document.getElementById("loginBtn").addEventListener("click", function() {
    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "admin123") {
        
        window.location.href = "./home.html";
    } else {
        alert("Invalid username or password.");
    }   
});

