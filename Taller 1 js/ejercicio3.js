/**
 * Leer un número determinar si es par o impar e imprimir el mensaje.
 */
function determinarParImpar() {
    var numero = parseInt(prompt("Ingrese un número:"));

    if (isNaN(numero)) {
        alert("Ingrese un número válido.");
        return;
    }

    if (numero % 2 === 0) {
        alert(numero + " es un número par.");
    } else {
        alert(numero + " es un número impar.");
    }
}

determinarParImpar();
