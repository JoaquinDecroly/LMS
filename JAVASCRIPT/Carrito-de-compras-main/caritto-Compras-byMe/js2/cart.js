const contenedorTarjetas = document.getElementById("productos-container")
const productos = JSON.parse(localStorage.getItem("bicicletas"));

function crearTarjetasProductosInicio(productos){
    if (productos && productos.lenght > 0) {
        productos.forEach(producto => {
        const nuevaBicicleta = document.createElement("div");
        nuevaBicicleta.classList = "tarjetas-producto";
        nuevaBicicleta.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Bicicleta 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
     <div>
    <button>-</button>
    <span class="cantidad">${producto.cantidad}</span>
    <button>+</button>
    </div>`
         contenedorTarjetas.appendChild(nuevaBicicleta);
        nuevaBicicleta.getElementsByTagName("button")[1].addEventListener("click",()=> agregarAlCarrito(producto))
    
        contenedorTarjetas.appendChild(nuevaBicicleta);
        nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",()=> restarAlCarrito(producto))
    });
    }
}

crearTarjetasProductosInicio();
