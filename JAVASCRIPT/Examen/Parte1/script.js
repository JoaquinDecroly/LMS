// const texto = document.getElementById("texto");

// // Función para manejar la entrada de datos
// function getInput(prompt) {
//     const input = prompt(prompt);
//     return input;
// }


// //1. temperaturas
// const boton1 = document.getElementById("button1");
// boton1.addEventListener("click", function() {
//     const grados = getInput('Grados Celsius: ');
//     const gradosFloat = parseFloat(grados);
//     texto.textContent = `Los grados en Fahrenheit son de: ${gradosFloat * 9/5 + 32}°F
// \nLos grados en Kelvin son de: ${gradosFloat + 273.15}K`;
// });

// //2.numeros primos
// document.getElementById("button2").addEventListener("click", function() {
//     const N = getInput('Ingrese un número: ');
//     const NInt = parseInt(N, 10);
//     if (!isNaN(NInt)) {
//         texto.textContent = (`Los números primos menores o iguales a ${NInt} son:`, primos);
//         alert(`Los números primos menores o iguales a ${NInt} son: ${primos.join(", ")}`);
//     } else {
//         alert('Por favor, ingrese un número válido.');
//     }
// });

// // Función para comprobar si un número es primo
// function esPrimo(n) {
//     if (n <= 1) return false; // Los números menores o iguales a 1 no son primos
//     if (n === 2) return true; // 2 es el único número primo par
//     if (n % 2 === 0) return false; // Cualquier otro número par no es primo

//     // Comprobar divisores impares desde 3 hasta la raíz cuadrada de n
//     for (let i = 3; i * i <= n; i += 2) {
//         if (n % i === 0) return false; // Si n es divisible por algún i, no es primo
//     }

//     return true;
// }

// // Función para mostrar números primos hasta N
// function mostrarPrimosHastaN(N) {
//     const primos = [];
//     for (let i = 2; i <= N; i++) {
//         if (isPrime(i)) {
//             primos.push(i);
//         }
//     }
//     return primos;
// }
// // 3.factorial
// document.getElementById("button3").addEventListener("click", () => {
//     const numero = getInput('Ingresa un número: ');
//     let factorial = 1;
//     for (let i = 1; i <= numero; i++) factorial *= i;
//     texto.textContent = "El factorial de " + numero + " es: " + factorial;
// });

// // 4.dto
// document.getElementById("button4").addEventListener("click", () => {
//     const precio = getInput('Ingresa el precio de un producto: ');
//     const cantidad = getInput('Ingresa la cantidad de productos: ');
//     const total = precio * cantidad;

//     if (total > 100) {
//         alert('El total es mayor a 100');
// texto.textContent = `Precio con descuento: $${total * 0.01}
// \nEl precio sin descuento es de: $${precio * cantidad}`;
// } else {
//     texto.textContent = `El total es: $${total}`;
//     }
//     });

//     //5. adivinanzas
//     document.getElementById("button5").addEventListener("click", () => {
//         const cont = document.getElementById("cont");
//         const numero = getInput('Ingresa un número entre 1 y 25: ');
//         const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
//         if (numero === numeroAleatorio) {
//             texto.textContent = `¡Lo adivinaste! El número era ${numeroAleatorio}
//             \nLo intentaste ${cont} veces.`;
//             if (numero > numeroAleatorio) {
//                 texto.textContent = `El numero es menor a ${numeroAleatorio}`;
//                 } else if (numero < numeroAleatorio) {
//                     texto.textContent = `El numero es mayor a ${numeroAleatorio}`;
//                     }
//                     } else {
//                         texto.textContent = `Lo intentaste ${cont} veces.`;
//                         cont++;
//                         }
//                         });


//     // 6.salario y bonificacion (no hecho)
//     // 7.ordenarNumeros
//     document.getElementById("button7").addEventListener("click", () => {
//         const numeros = getInput('Ingresa 5 números separados por comas: ');
//         const array = numeros.split(',').map(Number);
//         array.sort((a, b) => a - b);
//         texto.textContent = `Los números ordenados son: ${array}`;
//         });


//     //8. contadorVocales
//     document.getElementById("button8").addEventListener("click", () => {
//         const texto = getInput('Ingresa un texto: ');
//         const textoMinusculas = texto.toLowerCase();
//         const vocales = 'aeiou';
//         let contador = 0;
//         for (let i = 0; i < textoMinusculas.length; i++) {
//             if (vocales.includes(textoMinusculas[i])) {
//                 contador++;
//                 }
//                 }
//                 texto.textContent = `El texto tiene ${contador} vocales.`;
//                 });

// ----------------------------------------------------------------------------------------
// const texto = document.getElementById("texto");

// // Función para manejar la entrada de datos
// function getInput(message) {
//     const input = prompt(message);
//     return input;
// }

// // 1. temperaturas
// const boton1 = document.getElementById("button1");
// boton1.addEventListener("click", function() {
//     const grados = getInput('Grados Celsius: ');
//     const gradosFloat = parseFloat(grados);
//     texto.textContent = `Los grados en Fahrenheit son de: ${gradosFloat * 9/5 + 32}°F
// \nLos grados en Kelvin son de: ${gradosFloat + 273.15}K`;
// });

// // 2. numeros primos
// document.getElementById("button2").addEventListener("click", function() {
//     const N = getInput('Ingrese un número: ');
//     const NInt = parseInt(N, 10);
//     if (!isNaN(NInt)) {
//         const primos = mostrarPrimosHastaN(NInt);
//         alert(`Los números primos menores o iguales a ${NInt} son: ${primos.join(", ")}`);
//     } else {
//         alert('Por favor, ingrese un número válido.');
//     }
// });

// // Función para comprobar si un número es primo
// function esPrimo(n) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;

//     for (let i = 3; i * i <= n; i += 2) {
//         if (n % i === 0) return false;
//     }

//     return true;
// }

// // Función para mostrar números primos hasta N
// function mostrarPrimosHastaN(N) {
//     const primos = [];
//     for (let i = 2; i <= N; i++) {
//         if (esPrimo(i)) {
//             primos.push(i);
//         }
//     }
//     return primos;
// }

// // 3. factorial
// document.getElementById("button3").addEventListener("click", () => {
//     const numero = getInput('Ingresa un número: ');
//     let factorial = 1;
//     for (let i = 1; i <= numero; i++) factorial *= i;
//     texto.textContent = "El factorial de " + numero + " es: " + factorial;
// });

// // 4. descuento
// document.getElementById("button4").addEventListener("click", () => {
//     const precio = getInput('Ingresa el precio de un producto: ');
//     const cantidad = getInput('Ingresa la cantidad de productos: ');
//     const total = precio * cantidad;

//     if (total > 100) {
//         alert('El total es mayor a 100');
//         texto.textContent = `Precio con descuento: $${total * 0.9}
// \nEl precio sin descuento es de: $${precio * cantidad}`;
//     } else {
//         texto.textContent = `El total es: $${total}`;
//     }
// });

// // 5. adivinanzas
// document.getElementById("button5").addEventListener("click", () => {
//     let cont = 0; // Inicializar contador
//     const numero = getInput('Ingresa un número entre 1 y 25: ');
//     const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
//     cont++; // Incrementar contador

//     if (numero == numeroAleatorio) {
//         texto.textContent = `¡Lo adivinaste! El número era ${numeroAleatorio}
//         \nLo intentaste ${cont} veces.`;
//     } else {
//         texto.textContent = `Lo intentaste ${cont} veces.`;
//         if (numero > numeroAleatorio) {
//             texto.textContent += ` El número es menor a ${numeroAleatorio}`;
//         } else {
//             texto.textContent += ` El número es mayor a ${numeroAleatorio}`;
//         }
//     }
// });

// // 7. ordenar numeros
// document.getElementById("button7").addEventListener("click", () => {
//     const numeros = getInput('Ingresa 5 números separados por comas: ');
//     const array = numeros.split(',').map(Number);
//     array.sort((a, b) => a - b);
//     texto.textContent = `Los números ordenados son: ${array}`;
// });

// // 8. contador vocales
// document.getElementById("button8").addEventListener("click", () => {
//     const textoInput = getInput('Ingresa un texto: ');
//     const textoMinusculas = textoInput.toLowerCase();
//     const vocales = 'aeiou';
//     let contador = 0;
//     for (let i = 0; i < textoMinusculas.length; i++) {
//         if (vocales.includes(textoMinusculas[i])) {
//             contador++;
//         }
//     }
//     texto.textContent = `El texto tiene ${contador} vocales.`;
// });
// ---------------------------------------------------
const texto = document.getElementById("texto");

// Función para manejar la entrada de datos
function getInput(message) {
    return prompt(message);
}

// Función para comprobar si un número es primo
function esPrimo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// Función para mostrar números primos hasta N
function mostrarPrimosHastaN(N) {
    return Array.from({ length: N - 1 }, (_, i) => i + 2).filter(esPrimo);
}

// 1. Conversión de temperatura
document.getElementById("button1").addEventListener("click", () => {
    const grados = parseFloat(getInput('Grados Celsius: '));
    if (!isNaN(grados)) {
        const fahrenheit = (grados * 9 / 5) + 32;
        const kelvin = grados + 273.15;
        texto.textContent = `Los grados en Fahrenheit son: ${fahrenheit.toFixed(2)}°F\nLos grados en Kelvin son: ${kelvin.toFixed(2)}K`;
    } else {
        alert('Por favor, ingrese un número válido.');
    }
});

// 2. Análisis de números primos
document.getElementById("button2").addEventListener("click", () => {
    const NInt = parseInt(getInput('Ingrese un número: '), 10);
    if (!isNaN(NInt)) {
        const primos = mostrarPrimosHastaN(NInt);
        alert(`Los números primos menores o iguales a ${NInt} son: ${primos.join(", ")}`);
    } else {
        alert('Por favor, ingrese un número válido.');
    }
});

// 3. Cálculo del factorial
document.getElementById("button3").addEventListener("click", () => {
    const numero = parseInt(getInput('Ingresa un número: '), 10);
    if (!isNaN(numero) && numero >= 0) {
        const factorial = Array.from({ length: numero }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
        texto.textContent = `El factorial de ${numero} es: ${factorial}`;
    } else {
        alert('Por favor, ingrese un número válido.');
    }
});

// 4. Cálculo de descuento en una compra
document.getElementById("button4").addEventListener("click", () => {
    const precio = parseFloat(getInput('Ingresa el precio de un producto: '));
    const cantidad = parseInt(getInput('Ingresa la cantidad de productos: '), 10);
    if (!isNaN(precio) && !isNaN(cantidad) && cantidad > 0) {
        const total = precio * cantidad;
        const descuento = total > 100 ? total * 0.1 : 0;
        texto.textContent = `Precio con descuento: $${(total - descuento).toFixed(2)}\nEl precio sin descuento es de: $${total.toFixed(2)}`;
    } else {
        alert('Por favor, ingrese valores válidos.');
    }
});

// 5. Juego de adivinanza
document.getElementById("button5").addEventListener("click", () => {
    let cont = 0;
    const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
    let numero;

    do {
        numero = parseInt(getInput('Adivina un número entre 1 y 25: '), 10);
        cont++;
        if (numero > numeroAleatorio) {
            alert('Menor');
        } else if (numero < numeroAleatorio) {
            alert('Mayor');
        }
    } while (numero !== numeroAleatorio);

    texto.textContent = `¡Lo adivinaste! El número era ${numeroAleatorio}. Lo intentaste ${cont} veces.`;
});

// 6. Cálculo de salario con bonificaciones
document.getElementById("button6").addEventListener("click", () => {
    const sueldoBase = parseFloat(getInput('Ingresa el sueldo base del empleado: '));
    const ventas = parseFloat(getInput('Ingresa las ventas realizadas en el mes: '));
    if (!isNaN(sueldoBase) && !isNaN(ventas)) {
        const comision = ventas > 1000 ? (ventas - 1000) * 0.1 : 0;
        const salarioFinal = sueldoBase + comision;
        texto.textContent = `El salario final del empleado es: $${salarioFinal.toFixed(2)}`;
    } else {
        alert('Por favor, ingrese valores válidos.');
    }
});

// 7. Ordenamiento de números
document.getElementById("button7").addEventListener("click", () => {
    const numeros = getInput('Ingresa 5 números separados por comas: ');
    const array = numeros.split(',').map(Number);
    if (array.every(num => !isNaN(num))) {
        array.sort((a, b) => a - b);
        texto.textContent = `Los números ordenados son: ${array.join(", ")}`;
    } else {
        alert('Por favor, ingrese números válidos.');
    }
});

// 8. Contador de vocales en una palabra
document.getElementById("button8").addEventListener("click", () => {
    const textoInput = getInput('Ingresa una palabra: ');
    const contador = (textoInput.match(/[aeiou]/gi) || []).length;
    texto.textContent = `El texto tiene ${contador} vocales.`;
});
    


