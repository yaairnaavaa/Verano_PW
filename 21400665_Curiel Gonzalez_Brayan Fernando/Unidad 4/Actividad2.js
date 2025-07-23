/*
// EJERCICIO 1
function ej1(){
let numero1 = Math.floor(Math.random() * 100) + 1;
let numero2 = Math.floor(Math.random() * 100) + 1;

console.log("Número 1:", numero1);
console.log("Número 2:", numero2);

if (numero1 === numero2) {
    console.log("son iguales");
} else if (numero1 > numero2) {
    console.log("mayor es:", numero1);
} else {
    console.log("mayor es:", numero2);
}
}
ej1();
*/

/*
// EJERCICIO 2
function ej2(){
let ventas = 12000; 
console.log("Ventas:" + ventas);
let comision;
if (ventas < 10000) {
    comision = ventas * 0.10;
} else {
    comision = ventas * 0.15;
}
console.log("Comision: " + comision);
}
ej2();
*/

/*
// EJERCICIO 3
function ej3(){
let numeroTabla = Math.floor(Math.random() * 9) + 2;
console.log("Tabla de:" + numeroTabla);
for (let i = 1; i <= 10; i++) {
    console.log(numeroTabla + " x " + i + " = " + (numeroTabla * i));
}
}
ej3();
*/

/*
// EJERCICIO 4
function ej4(){
let numeros = [15, 22, 33, 44, 55, 66, 77, 88, 99, 10];
let pares = 0;
let impares = 0;

console.log("Números:", numeros);

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("pares:", pares);
console.log("impares:", impares);
}
ej4();
*/

/*
// EJERCICIO 5
function ej5(){
let numeroAleatorio;
let contador = 0;

do {
    numeroAleatorio = Math.floor(Math.random() * 6);
    console.log("Número generado:", numeroAleatorio);
    contador++;
} while (numeroAleatorio !== 0);

console.log("Se generaron " + contador);
}
ej5();
*/