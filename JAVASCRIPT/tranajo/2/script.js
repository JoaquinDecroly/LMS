document.addEventListener('DOMContentLoaded', function () {

    const carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Retrieve cart items from local storage

    const sumaCarrito = document.getElementById('suma-carrito');
    const tiempoRebajas = document.getElementById('tiempo-rebajas');

    function actualizarSumaCarrito() { // Update the total sum of the cart

        const total = carrito.reduce((acc, item) => acc + item.precio, 0);
        sumaCarrito.innerText = `${total.toFixed(2)}€`;
    }

    function actualizarCarrito() { // Update the cart display

        const itemsCarrito = document.getElementById('items-carrito');
        itemsCarrito.innerHTML = ''; 
        let total = 0;

        carrito.forEach((item, index) => {
            const li = document.createElement('li'); 
            li.innerText = `${item.nombre} - ${item.precio.toFixed(2)}€`; 
            const botonEliminar = document.createElement('button'); 
            botonEliminar.innerText = 'Eliminar'; 
            botonEliminar.addEventListener('click', () => {
                carrito.splice(index, 1); 
                localStorage.setItem('carrito', JSON.stringify(carrito)); 
                actualizarCarrito(); 
                actualizarSumaCarrito(); 
            });
            li.appendChild(botonEliminar); 
            itemsCarrito.appendChild(li); 
            total += item.precio; 
        });

        document.getElementById('precio-total').innerText = total.toFixed(2); 
    }

    document.querySelectorAll('.añadir-al-carrito').forEach(boton => { // Add event listeners to "Add to Cart" buttons

        boton.addEventListener('click', () => {
            const elementoProducto = boton.parentElement; 
            const nombreProducto = elementoProducto.querySelector('h3').innerText; 
            const precioProducto = parseFloat(elementoProducto.querySelector('.precio').innerText.replace('€', '')); 

            carrito.push({ nombre: nombreProducto, precio: precioProducto });
            localStorage.setItem('carrito', JSON.stringify(carrito)); 
            actualizarSumaCarrito(); 
        });
    });

    const botonVaciarCarrito = document.getElementById('vaciar-carrito'); // Get the "Clear Cart" button

    if (botonVaciarCarrito) {
        botonVaciarCarrito.addEventListener('click', () => {
            carrito.length = 0; 
            localStorage.setItem('carrito', JSON.stringify(carrito)); 
            actualizarCarrito(); 
            sumaCarrito.innerText = '0.00€'; 
        });
    }

    if (document.getElementById('items-carrito')) {
        actualizarCarrito();
        actualizarSumaCarrito(); 
    }

    const botonCambiarTema = document.getElementById('cambiar-tema');
    const cuerpo = document.body; 
    const encabezado = document.querySelector('header'); 

    botonCambiarTema.addEventListener('click', () => {
        cuerpo.classList.toggle('modo-nocturno'); 
        encabezado.classList.toggle('modo-nocturno'); 
    });

    document.querySelectorAll('.reproducir-audio').forEach(boton => {
        boton.addEventListener('click', () => {
            const srcAudio = boton.getAttribute('data-audio'); 
            const audio = new Audio(srcAudio); 
            audio.play(); 
        });
    });

    const fechaFin = new Date("2025-03-07T14:59:59").getTime(); // Set the end date for the countdown


    const x = setInterval(function() {
        const ahora = new Date().getTime(); 
        const distancia = fechaFin - ahora; 

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        tiempoRebajas.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`; 

        if (distancia < 0) {
            clearInterval(x); 
            tiempoRebajas.innerHTML = "¡Las rebajas han comenzado!"; 
        }
    }, 1000); 
});
