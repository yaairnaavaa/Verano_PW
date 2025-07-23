//EJERCICIO 1
//Crea un programa que pida al usuario un número del 1 al 10 mediante prompt() y
//muestre su tabla de multiplicar del 1 al 10 en consola.
function ejercicio1() {
    let num;

    do {
        num = parseInt(prompt("Ingresa un numero del 1 al 10, para crear su tabla de multiplicar"));
    } while (num < 1 && num > 10);

    for (let i = 1; i <= 10; i++) {
        console.log(`{num} X {i} = {num * i}`)
    }
}
ejercicio1();