document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (email && password == true) {
            console.log("Giriş başarılı:", email);
            alert("Giriş başarılı!");
            // backend
        } else {
            alert("Lütfen tüm alanları doldurun.");
        }
    });
});
