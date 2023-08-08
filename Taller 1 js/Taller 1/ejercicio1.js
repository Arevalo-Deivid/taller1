/**
 * Trabajo 
 * Deivid Ricardo Arevalo Pachon 
 */
/*
*Realizar un programa que pida al usuario 2 números y se realicen las 4 operaciones básicas
(Suma, resta, multiplicación, división). Imprimir los resultados
  */

'use strict'; 

// Solicitar al usuario dos números y validar la entrada

let number1 = parseFloat(prompt("Digita un numero"));
let number2 = parseFloat(prompt("digita un numero"));

// Validar si los números son válidos

{ // Realizar cálculos
    let suma = number1 + number2;
    let resta = number1 - number2;
    let multiplicacion = number1 * number2;
    let division = number1 / number2;

    alert(`El resultado de la suma es: ${suma}`);
    alert(`El resultado de la resta es: ${resta}`);
    alert(`El resultado de la multiplicacion es: ${multiplicacion}`);
    alert(`El resultado de la division es: ${division}`);
}

 