const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaBicicleta = document.createElement("div");
    nuevaBicicleta.classList = "tarjeta-producto"
    nuevaBicicleta.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Bicicleta 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaBicicleta);
    nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(bicicletas);


// // Function to toggle dark mode
// function toggleDarkMode() {
//     const body = document.body;
//     body.classList.toggle("dark-mode");

//     // Save the user's preference in localStorage
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("darkMode", "enabled");
//     } else {
//         localStorage.setItem("darkMode", "disabled");
//     }
// }

// // Check for user's preference on page load
// if (localStorage.getItem("darkMode") === "enabled") {
//     document.body.classList.add("dark-mode");
// }

// // Add event listener to the dark mode toggle button
// const darkModeToggle = document.getElementById("darkModeToggle");
// if (darkModeToggle) {
//     darkModeToggle.addEventListener("click", toggleDarkMode);
// }

// Function to toggle dark mode
// function toggleDarkMode() {
//     const body = document.body;
//     body.classList.toggle("dark-mode");

//     // Save the user's preference in localStorage
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("darkMode", "enabled");
//     } else {
//         localStorage.setItem("darkMode", "disabled");
//     }
// }

// // Check for user's preference on page load
// if (localStorage.getItem("darkMode") === "enabled") {
//     document.body.classList.add("dark-mode");
// }

// // Add event listener to the dark mode toggle button
// const darkModeToggle = document.getElementById("darkModeToggle");
// if (darkModeToggle) {
//     darkModeToggle.addEventListener("click", toggleDarkMode);
// } else {
//     console.error("Dark mode toggle button not found.");
// }
// Function to toggle dark mode
// function toggleDarkMode() {
//     const body = document.body;
//     body.classList.toggle("dark-mode");

//     // Save the user's preference in localStorage
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("darkMode", "enabled");
//     } else {
//         localStorage.setItem("darkMode", "disabled");
//     }
// }

// // Check for user's preference on page load
// if (localStorage.getItem("darkMode") === "enabled") {
//     document.body.classList.add("dark-mode");
// }

// // Add event listener to the dark mode toggle button
// const darkModeToggle = document.getElementById("darkmode-toggle");
// if (darkModeToggle) {
//     darkModeToggle.addEventListener("click", toggleDarkMode);
// } else {
//     console.error("Dark mode toggle button not found.");
// }
function cambiarModo() {
    let cuerpoweb = document.body;
    cuerpoweb.classList.toggle("darkmode-toggle");
    cuerpoweb.classList.toggle("oscuro");
    if (cuerpoweb.classList.contains("oscuro")) {
        localStorage.setItem("modo", "oscuro");
        } else {
            localStorage.setItem("modo", "claro");
            }
    localStorage.setItem("modoOscuro", cuerpoweb.classList.contains("oscuro"));
}
window.onload = function() {
    let cuerpoweb = document.body;
    if (localStorage.getItem("modoOscuro") === "true") {
        cuerpoweb.classList.add("oscuro");
    }
}
