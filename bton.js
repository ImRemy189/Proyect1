const boton = document.getElementById("botonSaludo");

const parrafo = document.querySelector(".respuesta");

boton.addEventListener("click", function() {
    parrafo.textContent = "¡Hola, Bienvenido a movil bus! ";
});