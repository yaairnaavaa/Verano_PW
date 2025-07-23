function uno() {
    let num1 = parseInt(Math.random() * 10);
    let num2 = parseInt(Math.random() * 10);
    console.log(num1);
    console.log(num2);
    if (num1 == num2) {
        console.log("Los numeros son iguales");
    } else if (num1 > num2) {
        console.log("El numero uno es mayor que el dos");
    } else if (num2 > num1) {
        console.log("El numero dos es mayor que el uno");
    }
}
function dos() {
    let numero = prompt("Ingresa un numero")
    let resultado = parseInt(numero);
    if (numero < 5000) {
        alert("Numero invalido");
    } else if (numero > 30000) {

        alert("Numero invalido");
    } else if (numero < 10000) {
        console.log("Usted tendra: " + ((numero / 100) * 10) + "$ de comision");
    } else {
        console.log("Usted tendra: " + ((numero / 100) * 15) + "$ de comision");
    }
}
function tres() {
    let numero = Math.floor(Math.random() * 10) + 2;
    console.log("Del numero: " + numero + "\n su tabla de multiplicar es:");
    console.log(numero * 1 + " " + numero * 2 + " " + numero * 3 + " " + numero * 4 + " " + numero * 5 + " " + numero * 6 + " " + numero * 7 + " " + numero * 8 + " " + numero * 9 + " " + numero * 10);
}
function cuatro() {
    const numeros = []
    const pares = []
    const impares = []

    for (let i = 1; i < 10; i++) {
        let entrada = prompt("Ingresa el número"+i+"entre 1 y 100:");
        let numero = parseInt(entrada);
    }
}