document.addEventListener("DOMContentLoaded", function() {
    const hoverButton = document.getElementById("hoverButton");
    const loginForm = document.querySelector(".login-form");
    const signUpForm = document.querySelector(".sign-up-form");
    const formContainer = document.querySelector(".form-container");
    const imageContainer = document.querySelector(".image-container");
    const hoverText = document.getElementById("hoverText");

    let isLoginVisible = true; // baslangictaki login ekrani gorunur

    const updateOverlay = () => {
        if (isLoginVisible) {
            hoverText.textContent = "Kayıt ol";
            hoverButton.textContent = "Kayıt ol";
        } else {
            hoverText.textContent = "Giriş yap";
            hoverButton.textContent = "Giriş yap";
        }
    };

    hoverButton.addEventListener("click", function() {
        if (isLoginVisible) {
            // Kayit ol ekranina gecis
            imageContainer.classList.add("move-left"); // resmi sola kaydir
            setTimeout(() => {
                signUpForm.classList.add("active"); // kayit formunu goster
                loginForm.classList.remove("active"); // giris formunu gizle
            }, 500); // Animasyon suresi
        } else {
            // Giris yap ekranina gecis
            imageContainer.classList.remove("move-left");
            setTimeout(() => {
                loginForm.classList.add("active");
                signUpForm.classList.remove("active");
            }, 500); // Animasyon suresi
        }
        isLoginVisible = !isLoginVisible;
        updateOverlay();
    });

    // gecis yaparken ekrani guncellemek icin
    updateOverlay();
});
