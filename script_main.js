// Esto va en script_main.js
document.addEventListener("DOMContentLoaded", () => {

    // Mensaje en consola cuando la página carga
    console.log("Voider Web loaded! 😎");

    // Efecto de fade en header
    const header = document.querySelector("header");
    if(header) {
        header.style.opacity = 0;
        setTimeout(() => {
            header.style.transition = "opacity 1s";
            header.style.opacity = 1;
        }, 100);
    }

    // Aquí puedes poner más cosas globales, como un efecto de scroll, animaciones, etc.
});
