/*
*Leer un número e imprimir un mensaje si es positivo o negativo
 */
function determinarPositivoNegativo() {
    var numero = parseFloat(prompt("Ingrese un número:"));

    if (isNaN(numero)) {
        alert("Ingrese un número válido.");
        return;
    }

    if (numero > 0) {
        alert(numero + " es un número positivo.");
    } else if (numero < 0) {
        alert(numero + " es un número negativo.");
    } else {
        alert("El número ingresado es cero.");
    }
}

determinarPositivoNegativo();

