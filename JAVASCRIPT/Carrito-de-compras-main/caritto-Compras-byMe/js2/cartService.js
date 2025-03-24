function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("bicicletas"));
    console.log(memoria);
    if (!memoria) {
       const nuevoProducto = producto;
       nuevoProducto.cantidad = 1; 
       localStorage.setItem("bicicletas",JSON.stringify[nuevoProducto])
    }else{
        const indiceProducto = memoria.findIndex(bicicleta => bicicleta.id === producto.id )
        if (indiceProducto === -1) {
            const nuevaMemoria = memoria;
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            localStorage.setItem("bicicletas",JSON.stringify(nuevaMemoria))
        }else{
            nuevaMemoria[indiceProducto].cantidad++;
        }
    }
    actualizarNumeroCarrito();
}

function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}


const cuentaCarrito = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("bicicletas"));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
    cuentaCarrito.innerText = cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("bicicletas"));
}