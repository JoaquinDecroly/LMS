// Inicializar variables para el carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Cargar el carrito desde localStorage

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio }); // Agregar el producto al carrito
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar el carrito en localStorage
    actualizarDisplayCarrito(); // Actualizar la visualización del carrito
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1); // Eliminar el producto del array
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar el carrito en localStorage
    actualizarDisplayCarrito(); // Actualizar la visualización del carrito
}

// Función para actualizar la visualización del carrito
function actualizarDisplayCarrito() {
    const cantidadCarrito = document.getElementById('cantidad-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const itemsCarrito = document.getElementById('items-carrito');

    cantidadCarrito.textContent = carrito.length; // Mostrar la cantidad de productos
    const total = carrito.reduce((acc, item) => acc + item.precio, 0); // Calcular el total
    totalCarrito.textContent = total.toFixed(2); // Mostrar el total

    // Mostrar los productos en el carrito
    itemsCarrito.innerHTML = carrito.map((item, index) => `
        <div>
            ${item.nombre} - $${item.precio.toFixed(2)} 
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        </div>
    `).join('');
}

// Función para alternar el modo nocturno
function toggleModoNocturno() {
    document.body.classList.toggle('modo-nocturno'); // Alternar la clase para el modo nocturno
    const iconoModo = document.getElementById('icono-modo');
    iconoModo.classList.toggle('fa-sun'); // Cambiar el icono
    iconoModo.classList.toggle('fa-moon'); // Cambiar el icono
}

// Función para alternar el menú hamburguesa
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Alternar la clase 'show' para mostrar/ocultar el menú
}

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    const menu = document.getElementById('menu');
    const hamburguesa = document.querySelector('.hamburguesa');
    if (!menu.contains(event.target) && !hamburguesa.contains(event.target)) {
        menu.classList.remove('show'); // Ocultar el menú si se hace clic fuera
    }
});

// Cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarDisplayCarrito(); // Actualizar la visualización del carrito al cargar la página
});