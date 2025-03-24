const texto = document.getElementById("texto")

// Función para manejar la entrada de datos
function getInput(question) {
    const answer = prompt(question); 
    return parseFloat(answer); 
}


// 1. Saludo
const boton1 = document.getElementById("button1");
boton1.addEventListener("click", function() {
    texto.textContent = "¡Hola Mundo!";

});

// 2. Área del cuadrado
const boton2 = document.getElementById("button2");
boton2.addEventListener("click", function() {
    const sideLength = getInput("Ingrese la medida del lado del cuadrado: ");
    const squareArea = sideLength * sideLength;
    texto.textContent = "El área del cuadrado es: " + squareArea;
});

// 3. Área del cuadrado manual
const boton3 = document.getElementById("button3");
boton3.addEventListener("click", function() {
    const lado = getInput("Ingrese la medida del lado del cuadrado: ");
    const area = lado * lado;
    texto.textContent = "El área del cuadrado es: " + squareArea;

});

// 4. Calculadora básica
const boton4 = document.getElementById("button4");
boton4.addEventListener("click", function() {
    const firstNum = getInput("Introduce el primer número: ");
    const secondNum = getInput("Introduce el segundo número: ");
          texto.textContent = "La suma es: " + (firstNum + secondNum) +
          "\nLa resta es: " + (firstNum - secondNum) +
          "\nEl producto es: " + (firstNum * secondNum) +
          "\nLa división es: " + (secondNum !== 0 ? firstNum / secondNum : "Indefinido");

});

// 5. Cálculos del círculo
const boton5 = document.getElementById("button5");
boton5.addEventListener("click", function() {
    const longitudRadio = getInput("Ingrese la longitud del radio: ");
          texto.textContent = "La longitud de la circunferencia es: " + (2 * longitudRadio * Math
            .PI) +
            "\nEl área del círculo es: " + (Math.PI * longitudRadio *
                longitudRadio) +
                "\nEl volumen de la esfera es: " + ((4 *
                    Math.PI *
                    Math.pow(longitudRadio, 3)) / 3);
                    

});

// 6. Descuento
const boton6 = document.getElementById("button6");
boton6.addEventListener("click", function() {
    const priceOfItem = getInput("Ingrese el precio de un artículo: ");
    const actualPrice = getInput("Ingrese el precio real: ");
    texto.textContent = "El precio real es: " + actualPrice +
    "\nEl precio de venta es: " + priceOfItem +
    "\nEl descuento es: " + ((priceOfItem - actualPrice) / actualPrice);

});

// 7. Conversión de millas a metros
const boton7 = document.getElementById("button7");
boton7.addEventListener("click", function() {
    const miles = getInput('Millas que se quieren convertir: ');
    texto.textContent = "La distancia en metros es: " + (miles * 1852);

});

// 8. Ordenar dos números
const boton8 = document.getElementById("button8");
boton8.addEventListener("click", function() {
    const number1 = getInput('Número 1: ');
    const number2 = getInput('Número 2: ');
    texto.textContent = "El orden ascendente de los números es: " + Math.min(number1, number2)
    + " y " + Math.max(number1, number2);
});

// 9. Comparar dos números
const boton9 = document.getElementById("button9");
boton9.addEventListener("click", function() {
    const firstNumber = getInput("Número 1: ");
    const secondNumber = getInput("Número 2: ");
    texto.textContent = (firstNumber === secondNumber) ? "Los números son iguales" : (firstNumber > secondNumber) ? "El Número 1 es mayor" : "El Número 2 es mayor";

});

// 10. Número máximo de tres
const boton10 = document.getElementById("button10");
boton10.addEventListener("click", function() {
    const firstNumber = getInput("Introduce el primer número: ");
    const secondNumber = getInput("Introduce el segundo número: ");
    const thirdNumber = getInput("Introduce el tercer número: ");
    texto.textContent = "El número máximo es: " + Math.max(firstNumber, secondNumber, thirdNumber);
});

// 11. Sumar dos números
const boton11 = document.getElementById("button11");
boton11.addEventListener("click", function() {
    const firstNumber = getInput("Introduce el primer número: ");
    const secondNumber = getInput("Introduce el segundo número: ");
    texto.textContent = "La suma es: " + (firstNumber + secondNumber)
});

// 12. Mayor de dos números
const boton12 = document.getElementById("button12");
boton12.addEventListener("click", function() {
    const primer = getInput("Primer número: ");
    const segundo = getInput("Segundo número: ");
    texto.textContent = "El mayor es: " + Math.max(primer, segundo);
});

// 13. Positivo o negativo
const boton13 = document.getElementById("button13");
boton13.addEventListener("click", function() {
    const number = getInput("Introduce un número: ");
    texto.textContent = "El número es " + (number >= 0 ? "positivo" : "negativo");

});

























//ESTELA EN ESCALA DE GRISES DEL PUNTERO
document.addEventListener('mousemove', (event) => {
    // Crear un nuevo elemento para la estela
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);

    // Posicionar el elemento en la posición del mouse
    trail.style.left = `${event.pageX}px`;
    trail.style.top = `${event.pageY}px`;

    // Desvanecer y eliminar el elemento después de 1-2 segundos
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            trail.remove();
        }, 1000); // Esperar a que la transición de opacidad termine
    }, 100); // Esperar un poco antes de comenzar a desvanecer
});



//BOTONES CON INTERACCIÓN
const buttons = document.querySelectorAll('button');

// Función para animar el botón
const animateButton = (button) => {
    button.style.transform = 'scale(1.1)';
    button.style.backgroundColor = '#FF00FF'; // Cambiar color al pasar el mouse
};

// Función para restaurar el botón
const restoreButton = (button) => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = ''; // Restaurar color original
};

// Asignar eventos a cada botón
buttons.forEach(button => {
    button.addEventListener('mouseover', () => animateButton(button));
    button.addEventListener('mouseout', () => restoreButton(button));
});