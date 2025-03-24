document.addEventListener('DOMContentLoaded', function () {     
    // Se obtienen referencias a elementos HTML por su ID o selector
    const cuerpo = document.getElementById('cuerpo'); // Referencia al elemento del cuerpo
    const botonRestaurar = document.getElementById('botonRestaurar'); // Referencia al botón de restaurar estilos
    const enlacesMenu = document.querySelectorAll('nav a'); // Selecciona todos los enlaces en el menú de navegación
    const parrafoInteractivo = document.getElementById('parrafoInteractivo'); // Referencia al párrafo interactivo
    const imagenInteractiva = document.getElementById('imagenInteractiva'); // Referencia a la imagen interactiva

    // Definición de estilos iniciales para la página
    const estilosIniciales = {
        colorFondo: '#fff', // Color de fondo inicial
        tamanoTexto: '24px', // Tamaño de texto inicial
        tamanoImagen: '100%' // Tamaño de imagen inicial
    };

    // Inicializa los estilos actuales con los valores iniciales
    let estilosActuales = { ...estilosIniciales };

    // Dimensiones específicas para restaurar la imagen
    const dimensionesRestaurar = {
        ancho: '580px', // Ancho al restaurar
        alto: '410px' // Alto al restaurar
    };

    // Función para cambiar el estilo del cuerpo al hacer clic en el párrafo
    function cambiarEstilo() {
        const colores = ['#f39c12', '#e74c3c', '#27ae60', '#3498db']; // Lista de colores disponibles
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; // Selección de un color aleatorio
        cuerpo.style.backgroundColor = colorAleatorio; // Cambia el color de fondo del cuerpo
        cuerpo.style.color = obtenerColorContraste(colorAleatorio); // Cambia el color del texto para contraste
        // Actualiza los estilos actuales con el nuevo color de fondo y texto
        estilosActuales.colorFondo = colorAleatorio;
        estilosActuales.colorTexto = obtenerColorContraste(colorAleatorio);
    }

    // Función para cambiar el tamaño del texto al hacer clic en los enlaces del menú
    function cambiarTamañoTexto() {
        const tamanoTexto = this.getAttribute('data-tamano'); // Obtiene el tamaño de texto del atributo data-tamano
        cuerpo.style.fontSize = tamanoTexto; // Cambia el tamaño de fuente del cuerpo
        // Actualiza los estilos actuales con el nuevo tamaño de texto
        estilosActuales.tamanoTexto = tamanoTexto;
    }

    // Función para restaurar los estilos a los valores iniciales
    function restaurarEstilos() {
        cuerpo.style.backgroundColor = estilosIniciales.colorFondo; // Restaura el color de fondo
        cuerpo.style.fontSize = estilosIniciales.tamanoTexto; // Restaura el tamaño de texto
        cuerpo.style.color = estilosIniciales.colorTexto; // Restaura el color del texto

        // Restaura el tamaño y la rotación de la imagen
        imagenInteractiva.style.width = dimensionesRestaurar.ancho; // Restaura el ancho de la imagen
        imagenInteractiva.style.height = dimensionesRestaurar.alto; // Restaura el alto de la imagen
        imagenInteractiva.style.transform = 'rotate(0deg)'; // Restaura la rotación de la imagen

        // Restaura los estilos actuales a los valores iniciales
        estilosActuales = { ...estilosIniciales };
    }

    // Función para obtener un color de texto contrastante
    function obtenerColorContraste(color) {
        // Calcula la luminosidad del color de fondo
        const luminosidad = (0.299 * parseInt(color.substring(1, 3), 16)) +
                            (0.587 * parseInt(color.substring(3, 5), 16)) +
                            (0.114 * parseInt(color.substring(5, 7), 16));

        // Devuelve negro o blanco dependiendo de la luminosidad
        return luminosidad > 128 ? '#000' : '#fff';
    }

    // Función para cambiar el estilo de la imagen al hacer clic
    function cambiarEstiloImagen() {
        // Cambia el tamaño y rota la imagen al hacer clic
        imagenInteractiva.style.width = estilosIniciales.tamanoImagen; // Cambia el ancho de la imagen
        imagenInteractiva.style.height = estilosIniciales.tamanoImagen; // Cambia el alto de la imagen
        imagenInteractiva.style.transform = 'rotate(180deg)'; // R ota la imagen 180 grados
        // Actualiza los estilos actuales con el nuevo tamaño de la imagen
        estilosActuales.tamanoImagen = estilosIniciales.tamanoImagen;
    }

    // Asociar funciones a eventos
    parrafoInteractivo.addEventListener('click', cambiarEstilo); // Asocia el evento de clic en el párrafo para cambiar el estilo
    enlacesMenu.forEach(enlace => enlace.addEventListener('click', cambiarTamañoTexto)); // Asocia el evento de clic en cada enlace del menú para cambiar el tamaño del texto
    botonRestaurar.addEventListener('click', restaurarEstilos); // Asocia el evento de clic en el botón para restaurar estilos
    imagenInteractiva.addEventListener('click', cambiarEstiloImagen); // Asocia el evento de clic en la imagen para cambiar su estilo
});