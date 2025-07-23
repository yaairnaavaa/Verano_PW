/*1
Escribe un programa que genere dos números aleatorios y que escriba 
en consola qué numeros se generaron. Además, el programa deberá señalar
si los números son iguales, y en caso de que no lo sean, mostrará cuál
es mayor.
*/
function numAleat(){
    let n1 = Math.floor( Math.random()*100)+1;
    let n2 = Math.floor( Math.random()*100)+1;
    console.log(n1);
    console.log(n2);
    if(n1 == n2){
        console.log("Los números son iguales");
    }else if(n1 > n2){
        console.log("El numero mayor es: " + n1);
    }else{
        console.log("El número mayor es "+ n2);
    }
}

//numAleat();

/*2
Una tienda departamental paga a sus empleados el 10% de comisión a quienes
vendan menos de $10,000.00 en artículos, mientras que otorga un 15% a quienes
vendan $10,000.00 o más. Diseña un programa que solicite un número entre
$5,000 y $30,000 (validar entrada hasta que sea número válido) en ventas
para un empleado y muestre en pantalla cuánto dinero va a recibir por 
comisión
*/
function calcularComision() {
    let ventas;
    
    do {
        ventas = Number(prompt("Ingrese el total de ventas (entre $5,000 y $30,000):"));
    } while (ventas < 5000 || ventas > 30000 || !ventas);


    let comision = ventas < 10000 ? ventas * 0.1 : ventas * 0.15;
    
    alert("Total de ventas: $" + ventas + "\nComisión obtenida: $" + comision);
}

//calcularComision();

/*3
Elabora un programa que genere un número aleatorio entre el número 2 y el 10
y después escriba la tabla de multiplicar del numero generado.*/

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tablaM(){
const numero = generarNumeroAleatorio(2, 10);

console.log(`Tabla de multiplicar para el número: ${numero}`);
console.log("-----------------------------------");


for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);
}
}
tablaM();

/*4
Escribe un programa que solicite 10 números aleatorios entre el 1 y el 100
y determine cuantos de esos números son pares y cuantos son impares*/

function parImpar(){
let pares = 0;
let impares = 0;

console.log("Números generados aleatoriamente:");
for (let i = 0; i < 10; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  console.log(numeroAleatorio);

  if (numeroAleatorio % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log("\n--- Resultados ---");
console.log(`Pares: ${pares}`);
console.log(`Impares: ${impares}`);
}

parImpar();
/*5
Escribe un programa que genere de forma continua números entre el 0 y el 5
hasta que salga el número 0*/

function cero(){
let numeroGenerado;
console.log("Iniciando generación de números... (se detendrá con el 0)");
do {
  
  numeroGenerado = Math.floor(Math.random() * 6); //0 y 5
  console.log(`Número generado: ${numeroGenerado}`);
} while (numeroGenerado !== 0);

console.log("0, Fin.");
}

cero();