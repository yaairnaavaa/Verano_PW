function NumerosAleatorios() {
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

NumerosAleatorios();

function comision() {
    let numero = prompt("Ingresa un numero")
    let resultado = parseInt(numero);
    if (numero < 5000) {
        alert("Numero invalido");
    } else if (numero > 30000) {

        alert("Numero invalido");
    } else if (numero < 10000) {
        alert("Usted tendra: " + ((numero / 100) * 10) + "$ de comision");
    } else {
        alert("Usted tendra: " + ((numero / 100) * 15) + "$ de comision");
    }
}
function tres() {
    let numero = Math.floor(Math.random() * 10) + 2;
    console.log("Del numero: " + numero + "\n su tabla de multiplicar es:");
    console.log(numero * 1 + " " + numero * 2 + " " + numero * 3 + " " + numero * 4 + " " + numero * 5 + " " + numero * 6 + " " + numero * 7 + " " + numero * 8 + " " + numero * 9 + " " + numero * 10);
}
function Aleatorios() {
    const numeros = []
    const pares = []
    const impares = []

    for (let i = 0; i < 10; i++) {
        let entrada = prompt("Ingresa un numero entre 1 y 100");
        let numero = parseInt(entrada);
        if (isNaN(numero) || numero < 1 || numero > 100) {
            alert("Número inválido. Por favor ingresa un valor entre 1 y 100.");
            i--;
        } else {
            numeros.push(numero);
            if (numero % 2 === 0) {
                pares.push(numero);
            } else {
                impares.push(numero);
            }
        }
    }
    console.log("En total se tienen " + pares.length + " numeros pares los cuales son: " + pares);
    console.log("En total se tienen " + pares.length + " numeros impares los cuales son: " + impares);
}
function cinco() {
  let aleatorio 
    do {
        aleatorio = Math.floor(Math.random() * 7); 
        console.log(aleatorio);
    } while (aleatorio !== 0);
}

//Clase del 21/07 
