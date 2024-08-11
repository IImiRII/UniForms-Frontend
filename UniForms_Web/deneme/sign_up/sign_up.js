document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const terms = document.getElementById("terms").checked;

        if (!terms) {
            alert("Kayıt olmadan önce kullanım koşullarını kabul etmelisiniz.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Şifreler eşleşmiyor.");
            return;
        }

        if (firstName && lastName && email && password == true) {
            console.log("Kayıt başarılı:", email);
            alert("Kayıt başarılı!");
            // backend
        } else {
            alert("Lütfen tüm alanları doldurun.");
        }
    });
});
