const texto = document.getElementById("texto");

// Función para generar números
// const generarNumeros = (cantidad, paso) => {
//     return Array.from({ length: cantidad }, (_, i) => i * paso + 1).join(", ");
// };
const generarNumeros = (cantidad, paso) => {
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        numeros.push(i * paso + 1);
    }
    return numeros.join(", ");
};

// Función para manejar la entrada de datos
const getInput = (question) => parseFloat(prompt(question));

// 1. Mayor edad
document.getElementById("button1").addEventListener("click", () => {
    const edad = getInput("Ingrese su edad: ");
    texto.textContent = edad >= 18 ? "¡Eres mayor de edad!" : "¡Eres menor de edad!";
});

// 2. Mayor/menor edad
document.getElementById("button2").addEventListener("click", () => {
    const edad = getInput("Ingrese su edad: ");
    texto.textContent = edad >= 18 ? "¡Eres mayor de edad!" : "¡Eres menor de edad!";
});

// 3. Números del 1 al 20
document.getElementById("button3").addEventListener("click", () => {
    texto.textContent = generarNumeros(20, 1);
});

// 4. Números del 1 al 200, sumando de dos en dos
document.getElementById("button4").addEventListener("click", () => {
    texto.textContent = generarNumeros(100, 2);
});

// 5. Números del 1 al 200, sumando de uno en uno
document.getElementById("button5").addEventListener("click", () => {
    texto.textContent = generarNumeros(200, 1);
});

// 6. Números del 1 a N
document.getElementById("button6").addEventListener("click", () => {
    const N = parseInt(prompt("Elige tu N: "), 10); // Usar prompt para obtener el valor de N
    if (!isNaN(N) && N > 0) {
        texto.textContent = generarNumeros(N, 1);
    } else {
        texto.textContent = "Por favor, introduce un número válido.";
    }
});

// 7. Conversión de notas
document.getElementById("button7").addEventListener("click", () => {
    const nota = getInput('Inserta tu nota: ');
    const mensajes = ["Insuficiente", "Suficiente", "Buena", "Muy buena", "Excelente"];
    texto.textContent = mensajes[Math.floor(nota / 2)] || "La nota no es válida";
});

// 8. Factorial de un número
document.getElementById("button8").addEventListener("click", () => {
    const numero = getInput('Ingresa un número: ');
    let factorial = 1;
    for (let i = 1; i <= numero; i++) factorial *= i;
    texto.textContent = "El factorial de " + numero + " es: " + factorial;
});

// 9. Hora
document.getElementById("button9").addEventListener("click", () => {
  
    let hora = parseInt(prompt("Ingresa la hora (0-23): "), 10);
    let minutos = parseInt(prompt("Ingresa los minutos (0-59): "), 10);
    let segundos = parseInt(prompt("Ingresa los segundos (0-59): "), 10);

    segundos++;

    if (segundos > 0 || segundos <= 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos > 0 || minutos <= 60) {
        minutos = 0;
        hora++;
    }
    if (hora > 0 || hora <= 24) {
        hora = 0;
    }

    
    texto.textContent = `La hora es: ${hora}:${minutos}:${segundos}`;
});

// 10. Contar números negativos
document.getElementById("button10").addEventListener("click", () => {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        const numero = getInput("Número " + (i + 1) + ": ");
        if (!isNaN(numero)) numeros.push(numero);
    }
    const contadorNegativos = numeros.filter(num => num < 0).length;
    texto.textContent = "Hay " + contadorNegativos + " números negativos.";
});

// 11. Sumar dos números
document.getElementById("button11").addEventListener("click", () => {
    const num1 = getInput("Número 1: ");
    const num2 = getInput("Número 2: ");
    texto.textContent = "La suma es: " + (num1 + num2);
});

// 12. Mayor de dos números
document.getElementById("button12").addEventListener("click", () => {
    const num1 = getInput("Número 1: ");
    const num2 = getInput("Número 2: ");
    texto.textContent = "El número mayor es: " + Math.max(num1, num2);
});

// 13. Sumar y multiplicar los primeros diez números naturales
document.getElementById("button13").addEventListener("click", () => {
    let suma = 0, producto = 1;
    for (let i = 1; i <= 10; i++) {
        suma += i;
        producto *= i;
    }
    texto.textContent = "Suma: " + suma + ", Producto: " + producto;
});


//14. Calculadora salario
document.getElementById("button14").addEventListener("click", () => {
    const horas = getInput("¿Horas trabajadas?"); 
    const pagoxhora = getInput("¿Pago por horas trabajadas?"); // Asegúrate de convertir a número
    
    let salarioBruto = 0;
    let salarioNeto = 0;
    let impuestos = 0;

   
    if (horas > 35) {
        salarioBruto = horas * pagoxhora;
    } else {
        salarioBruto = (horas * pagoxhora) + ((horas - horas) * pagoxhora * 1.5); // Esta línea parece incorrecta
    }


    if (salarioBruto <= 500) {
        impuestos = 0;
        salarioNeto = salarioBruto;
    } else if (salarioBruto > 500 && salarioBruto <= 900) {
        impuestos = salarioBruto * 0.25;
        salarioNeto = salarioBruto - impuestos;
    } else {
        impuestos = salarioBruto * 0.45;
        salarioNeto = salarioBruto - impuestos;
    }
    texto.textContent = `Salario bruto: ${salarioBruto}\nSalario neto: ${salarioNeto}\nImpuestos: ${impuestos}`;
});


