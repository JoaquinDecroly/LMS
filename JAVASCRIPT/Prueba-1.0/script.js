// Inicializar variables para el carrito
let cantidadCarrito = 0; // Contador de productos en el carrito
let totalCarrito = 0; // Total de precios en el carrito
let itemsCarrito = []; // Array para almacenar los productos en el carrito

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    cantidadCarrito++; // Incrementar la cantidad de productos
    totalCarrito += precio; // Sumar el precio al total
    itemsCarrito.push({ nombre, precio }); // Agregar el producto al array de items

    actualizarDisplayCarrito(); // Actualizar la visualización del carrito
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(indice) {
    totalCarrito -= itemsCarrito[indice].precio; // Restar el precio del total
    cantidadCarrito--; // Decrementar la cantidad de productos
    itemsCarrito.splice(indice, 1); // Eliminar el producto del array

    actualizarDisplayCarrito(); // Actualizar la visualización del carrito
}

// Función para actualizar la visualización del carrito
function actualizarDisplayCarrito() {
    document.getElementById('cantidad-carrito').innerText = cantidadCarrito; // Mostrar cantidad de productos
    document.getElementById('total-carrito').innerText = totalCarrito.toFixed(2); // Mostrar total con dos decimales

    const contenedorItemsCarrito = document.getElementById('items-carrito');
    contenedorItemsCarrito.innerHTML = ''; // Limpiar el contenedor

    if (cantidadCarrito > 0) {
        itemsCarrito.forEach((item, indice) => {
            // Crear un elemento para cada producto en el carrito
            const itemCarrito = document.createElement('div');
            itemCarrito.className = 'item-carrito';
            itemCarrito.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)} <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>`;
            contenedorItemsCarrito.appendChild(itemCarrito); // Agregar el elemento al contenedor
        });
    }
}

// Función para alternar el modo nocturno
function toggleModoNocturno() {
    document.body.classList.toggle('modo-nocturno'); // Alternar clase en el body
    const header = document.querySelector('header');
    header.classList.toggle('modo-nocturno'); // Alternar clase en el encabezado
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        producto.classList.toggle('modo-nocturno'); // Alternar clase en los productos
    });
    const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
        boton.classList.toggle('modo-nocturno'); // Alternar clase en los botones
    });

    // Cambiar el icono del botón
    const iconoModo = document.getElementById('icono-modo');
    if (document.body.classList.contains('modo-nocturno')) {
        iconoModo.classList.remove('fa-sun');
        iconoModo.classList.add('fa-moon');
    } else {
        iconoModo.classList.remove('fa-moon');
        iconoModo.classList.add('fa-sun');
    }
}