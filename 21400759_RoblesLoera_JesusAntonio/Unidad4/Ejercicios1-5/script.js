// 1. Dos números aleatorios, comparar y mostrar cuál es mayor o si son iguales
const num1 = Math.floor(Math.random() * 100) + 1;
const num2 = Math.floor(Math.random() * 100) + 1;
console.log(`Ejercicio 1:\nNúmeros generados: ${num1} y ${num2}`);
if (num1 === num2) {
    console.log("Los números son iguales.");
} else {
    const mayor = num1 > num2 ? num1 : num2;
    console.log(`El mayor es: ${mayor}`);
}
console.log("");

// 2. Comisiones según ventas
function calcularComision(ventas) {
    if (ventas < 5000 || ventas > 30000) {
        return "Monto inválido. Debe estar entre $5,000 y $30,000.";
    }
    let comision = ventas < 10000 ? ventas * 0.10 : ventas * 0.15;
    return `Comisión a recibir: $${comision.toFixed(2)}`;
}
console.log("Ejercicio 2:");
let ventas = 12000; 
console.log(`Ventas: $${ventas}`);
console.log(calcularComision(ventas));
console.log("");

// 3. Tabla de multiplicar de un número aleatorio entre 2 y 10
const numTabla = Math.floor(Math.random() * 9) + 2;
console.log(`Ejercicio 3:\nTabla de multiplicar del ${numTabla}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numTabla} x ${i} = ${numTabla * i}`);
}
console.log("");

// 4. 10 números aleatorios entre 1 y 100, contar pares e impares
let pares = 0, impares = 0;
console.log("Ejercicio 4:\nNúmeros generados:");
for (let i = 0; i < 10; i++) {
    let n = Math.floor(Math.random() * 100) + 1;
    if (n % 2 === 0) pares++;
    else impares++;
}
console.log(`\nPares: ${pares}, Impares: ${impares}`);
console.log("");

// 5. Generar números entre 0 y 5 hasta que salga el 0
console.log("Ejercicio 5:");
let n;
do {
    n = Math.floor(Math.random() * 6);
    console.log(n);
} while (n !== 0);