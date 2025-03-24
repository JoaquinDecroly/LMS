  
            const boton = document.getElementById("boton");
            boton.addEventListener("click", function() {
                let texto = document.getElementById("mensaje");
                texto.textContent = "¡Hola!"; 
            });

            const cambiarColor = document.getElementById('cambiarColor');
            cambiarColor.addEventListener('click', function() {
                document.body.style.backgroundColor = 'blue'; 
            });

            const restaurar = document.getElementById('restaurar');
            restaurar.addEventListener('click', function() {
                let texto = document.getElementById("mensaje");
                texto.textContent = "Se pilla antes a un mentiroso que a un cojo"; 
                document.body.style.backgroundColor = 'white'; 
            });