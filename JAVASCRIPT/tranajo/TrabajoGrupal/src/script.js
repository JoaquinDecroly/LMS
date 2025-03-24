document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const sumaCarrito = document.getElementById('suma-carrito');
    const tiempoRebajas = document.getElementById('tiempo-rebajas');
    const itemsCarrito = document.getElementById('items-carrito');
    const precioTotal = document.getElementById('precio-total');

    // Función para actualizar la suma total del carrito
    function actualizarSumaCarrito() {
        const total = carrito.reduce((acc, item) => acc + item.precio, 0);
        sumaCarrito.innerText = `${total.toFixed(2)}€`; // Actualiza el texto con la suma total
    }

    // Función para actualizar la visualización del carrito
    function actualizarCarrito() {
        itemsCarrito.innerHTML = ''; // Limpiar la lista de items en el carrito
        let total = 0;

        carrito.forEach((item, index) => {
            const li = document.createElement('li'); // Crear un nuevo elemento de lista
            li.innerText = `${item.nombre} - ${item.precio.toFixed(2)}€`; // Mostrar nombre y precio del producto
            const botonEliminar = document.createElement('button'); // Crear botón de eliminar
            botonEliminar.innerText = 'Eliminar'; // Texto del botón
            botonEliminar.addEventListener('click', () => {
                carrito.splice(index, 1); // Eliminar el item del carrito
                localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar el localStorage
                actualizarCarrito(); // Actualizar la vista del carrito
                actualizarSumaCarrito(); // Actualizar la suma después de eliminar un producto
            });
            li.appendChild(botonEliminar); // Añadir el botón al elemento de lista
            itemsCarrito.appendChild(li); // Añadir el elemento de lista a la lista del carrito
            total += item.precio; // Sumar el precio del item al total
        });

        precioTotal.innerText = total.toFixed(2); // Mostrar el precio total
    }

    // Añadir evento a los botones de añadir al carrito
    document.querySelectorAll('.añadir-al-carrito').forEach(boton => {
        boton.addEventListener('click', () => {
            const elementoProducto = boton.parentElement; // Obtener el elemento padre del botón
            const nombreProducto = elementoProducto.querySelector('h3').innerText; // Obtener el nombre del producto
            const precioProducto = parseFloat(elementoProducto.querySelector('.precio').innerText.replace('€', '')); // Obtener el precio del producto

            // Añadir el producto al carrito
            carrito.push({ nombre: nombreProducto, precio: precioProducto });
            localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar el localStorage
            actualizarSumaCarrito(); // Actualizar la suma total al añadir un producto
        });
    });

    // Función para vaciar el carrito
    function vaciarCarrito() {
        carrito.length = 0; // Vaciar el carrito
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar el localStorage
        actualizarCarrito(); // Actualizar la vista del carrito
        sumaCarrito.innerText = '0.00€'; // Restablecer la suma a cero inmediatamente
    }

    // Evento para el botón de vaciar carrito
    const botonVaciarCarrito = document.getElementById('vaciar-carrito');
    if (botonVaciarCarrito) {
        botonVaciarCarrito.addEventListener('click', vaciarCarrito); // Añadir evento al botón
    }

    // Actualizar el carrito y la suma al cargar la página
    if (document.getElementById('items-carrito')) {
        actualizarCarrito();
        actualizarSumaCarrito(); // Asegúrate de mostrar la suma total al cargar la página
    }

    // Modo oscuro
    const botonCambiarTema = document.getElementById('cambiar-tema');
    const cuerpo = document.body; // Obtener el cuerpo del documento
    const encabezado = document.querySelector('header'); // Obtener el encabezado

    // Evento para cambiar entre modo claro y oscuro
    botonCambiarTema.addEventListener('click', () => {
        cuerpo.classList.toggle('modo-nocturno'); // Alternar clase de modo nocturno en el cuerpo
        encabezado.classList.toggle('modo-nocturno'); // Alternar clase de modo nocturno en el encabezado
    });

    // Reproducir audio al hacer clic en el botón correspondiente
    document.querySelectorAll('.reproducir-audio').forEach(boton => {
        boton.addEventListener('click', () => {
            const srcAudio = boton.getAttribute('data-audio'); // Obtener la fuente del audio
            const audio = new Audio(srcAudio); // Crear un nuevo objeto de audio
            audio.play(); // Reproducir el audio
        });
    });

    // Contador de rebajas
    const fechaFin = new Date("2025-03-07T14:59:59").getTime(); // Fecha de finalización de las rebajas

    const x = setInterval(function() {
        const ahora = new Date().getTime(); // Obtener la fecha y hora actuales
        const distancia = fechaFin - ahora; // Calcular la distancia hasta la fecha de finalización

        // Calcular días, horas, minutos y segundos restantes
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        tiempoRebajas.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`; // Actualizar el contador en la interfaz

        // Si la cuenta atrás ha terminado, mostrar un mensaje
        if (distancia < 0) {
            clearInterval(x); // Detener el contador
            tiempoRebajas.innerHTML = "¡Las rebajas han comenzado!"; // Mensaje de inicio de rebajas
        }
    }, 1000); // Actualizar cada segundo
});