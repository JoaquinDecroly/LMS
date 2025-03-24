document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, nombre: "Goku", precio: 40.95, categoria: "figuras", imagen: "../Recursos/Imagenes/goku_Super.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/goku.mp3" },
        { id: 2, nombre: "Khamzat Chimaev", precio: 45.90, categoria: "deportes", imagen: "../Recursos/Imagenes/Khamzat.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/Khamzat.mp3" },
        { id: 3, nombre: "Conor Mcgregor", precio: 50.99, categoria: "deportes", imagen: "../Recursos/Imagenes/conor.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/conor.mp3" },
        { id: 4, nombre: "Deadpool", precio: 40.90, categoria: "peliculas", imagen: "../Recursos/Imagenes/deadpool.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/deadpool.mp3" },
        { id: 5, nombre: "Antonio Recio", precio: 45.69, categoria: "peliculas", imagen: "../Recursos/Imagenes/antonio.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/antonio_recio_guarrilla.mp3" },
        { id: 6, nombre: "Mariano Rajoy", precio: 47.90, categoria: "politica", imagen: "../Recursos/Imagenes/mariano.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/rajoy_mejor.mp4" },
        { id: 7, nombre: "Cristiano Ronaldo", precio: 40.90, categoria: "deportes", imagen: "../Recursos/Imagenes/cristiano.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/cristiano.mp3" },
        { id: 8, nombre: "Pitbull", precio: 40.90, categoria: "musica", imagen: "../Recursos/Imagenes/pitbull.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/pitbull.mp3" },
        { id: 9, nombre: "elxokas", precio: 48.90, categoria: "streamers", imagen: "../Recursos/Imagenes/Xokas.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/xokas.mp3" },
        { id: 10, nombre: "Messi", precio: 40.80, categoria: "deportes", imagen: "../Recursos/Imagenes/messi.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/messi.mp3" },
        { id: 11, nombre: "Alex Pereira", precio: 50.50, categoria: "deportes", imagen: "../Recursos/Imagenes/alex.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/alex.mp3" },
        { id: 12, nombre: "Homer Simpson", precio: 40.00, categoria: "peliculas", imagen: "../Recursos/Imagenes/Simpson.png", descripcion: "Ingresar Descripcion.", audio: "../Recursos/Audios/simpson.mp3" }
    ];

    const carrito = JSON.parse(localStorage.getItem('cart')) || [];

    const sumaCarrito = document.getElementById('suma-carrito');
    const tiempoRebajas = document.getElementById('tiempo-rebajas');
    const itemsCarrito = document.getElementById('items-carrito') || { innerHTML: '' };
    const precioTotal = document.getElementById('precio-total') || { innerText: '' };

    // Función para actualizar la suma total del carrito
    function actualizarSumaCarrito() {
        const total = carrito.reduce((acc, item) => acc + item.precio, 0);
        sumaCarrito.innerText = `${total.toFixed(2)}€`; // Actualiza el texto con la suma total
    }

    // Función para renderizar los artículos en el carrito
    function renderizarArticulosCarrito() {
        itemsCarrito.innerHTML = ''; // Limpiar la lista de items en el carrito
        let total = 0;

        carrito.forEach((item, index) => {
            const li = document.createElement('li'); // Crear un nuevo elemento de lista
            li.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}" class="imagen-producto" style="width: 50px; height: 50px;">
                <span>${item.nombre} - ${item.precio.toFixed(2)}€</span>
            `; // Mostrar nombre y precio del producto

            const botonEliminar = document.createElement('button'); // Crear botón de eliminar
            botonEliminar.innerText = 'Eliminar'; // Texto del botón
            botonEliminar.addEventListener('click', () => {
                carrito.splice(index, 1); // Eliminar el item del carrito
                localStorage.setItem('cart', JSON.stringify(carrito)); // Actualizar el localStorage
                renderizarArticulosCarrito(); // Actualizar la vista del carrito
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
            const imagenProducto = elementoProducto.querySelector('.imagen-producto').src; // Obtener la imagen del producto

            // Añadir el producto al carrito
            carrito.push({ nombre: nombreProducto, precio: precioProducto, imagen: imagenProducto });
            localStorage.setItem('cart', JSON.stringify(carrito)); // Actualizar el localStorage
            actualizarSumaCarrito(); // Actualizar la suma total al añadir un producto
            renderizarArticulosCarrito(); // Renderizar los artículos en el carrito
        });
    });

    // Función para vaciar el carrito
    function vaciarCarrito() {
        carrito.length = 0; // Vaciar el carrito
        localStorage.setItem('cart', JSON.stringify(carrito)); // Actualizar el localStorage
        renderizarArticulosCarrito(); // Actualizar la vista del carrito
        sumaCarrito.innerText = '0.00€'; // Restablecer la suma a cero inmediatamente
    }

    // Evento para el botón de buscar productos
    const submit = document.getElementById('form-busqueda');
    if (submit) {
        submit.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('entrada-busqueda').value.trim();
            const resultados = buscarProductos(input);
            renderizarProductos(resultados);
        });
    }

    const botonVaciarCarrito = document.getElementById('vaciar-carrito');
    if (botonVaciarCarrito) {
        botonVaciarCarrito.addEventListener('click', vaciarCarrito); // Añadir evento al botón
    }

    // Actualizar el carrito y la suma al cargar la página
    if (document.getElementById('items-carrito')) {
        renderizarArticulosCarrito();
        actualizarSumaCarrito(); // Asegúrate de mostrar la suma total al cargar la página
    }

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

    // Modo oscuro
    const botonCambiarTema = document.getElementById('cambiar-tema');
    const cuerpo = document.body; // Obtener el cuerpo del documento
    const encabezado = document.querySelector('header'); // Obtener el encabezado

    // Evento para cambiar entre modo claro y oscuro
    botonCambiarTema.addEventListener('click', () => {
        cuerpo.classList.toggle('modo-nocturno'); // Alternar clase de modo nocturno en el cuerpo
        encabezado.classList.toggle('modo-nocturno'); // Alternar clase de modo nocturno en el encabezado
    });

    // Botón para ir al carrito
    const botonIrAlCarrito = document.getElementById('ir-al-carrito');
    if (botonIrAlCarrito) {
        botonIrAlCarrito.addEventListener('click', () => {
            window.location.href = 'carrito.html';
        });
    }
});
