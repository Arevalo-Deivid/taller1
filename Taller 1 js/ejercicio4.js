function determinarMayor() {
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Ingrese números válidos en todos los campos.");
        return;
    }

    var mayor = Math.max(numero1, numero2, numero3);
    console.log("El mayor de los tres números es: " + mayor);
}

determinarMayor();
