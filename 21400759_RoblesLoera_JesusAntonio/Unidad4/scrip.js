//Declaracion de variables

var nombre1 = "Jesus";
console.log(nombre1);
nombre1 = "Jesus Mod";
console.log(nombre1);

let nombre2 = "Antonio";
console.log(nombre2);
nombre2 = "Antonio Mod";
console.log(nombre2);

if(true){
var mensaje1="Mensaje 1";
let mensaje2="Mensaje 2";
console.log(mensaje1);
console.log(mensaje2);
}
function saludo1(nombre){
    console.log("Hola," + nombre);
}

const saludo2 = function(nombre){
console.log("Hola,"+ nombre);
}

saludo1("Jesus");
saludo2("Antonio");

const suma = (a,b) => {
   // let resultado = a + b;
   // console.log("suma: " + resultado);
    console.log("suma: " + (a + b));
}


suma(5,8);



// 1.
/*const num1 = Math.floor(Math.random() * 100) ;
const num2 = Math.floor(Math.random() * 100) ;
console.log(num1) 
console.log(num2);
if (num1 === num2) {
    console.log("Los números son iguales:");
} else {
    const mayor = num1 > num2 ? num1 : num2;
    console.log(`El mayor es: ${mayor}`);
}
console.log("");
*/
// 2. 
/*function calcularComision(ventas) {
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
*/
// 3.
const Tabla = Math.floor(Math.random() * 9)+1;
console.log(`Ejercicio 3:\nTabla de multiplicar del ${Tabla}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${Tabla} x ${i} = ${Tabla * i}`);
}
console.log("");

const numeros = Math.floor(Math.random() * 6-1);
console.log(numeros)
for (let i = 0; i < numeros; i++) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Número ${i + 1}: ${num}`);
}