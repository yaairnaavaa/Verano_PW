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
/*/ 3.
const Tabla = Math.floor(Math.random() * 9)+1;
console.log(`Ejercicio 3:\nTabla de multiplicar del ${Tabla}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${Tabla} x ${i} = ${Tabla * i}`);
}
console.log("");

const numeros = Math.floor(Math.random() * 7) + 1; // Genera un número entre 1 y 7
console.log(numeros)
for (let i = 0; i < numeros; i++) {
}
*/
 function diaSemana(numeros) {
    switch (numeros) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número de día inválido. Debe ser entre 1 y 7.";
    }
}
//diaSemana(); // Ejemplo de uso
//console.log(diaSemana()); // Imprime "Miércoles"


function TablaMultiplicar(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

function saludar(){
let nombres = ["Ana", "Juan", "Pedro", "Maria"];
console.log(nombres)

for(let  i=0;i<nombres.length; i++){
    console.log(`Hola, ${nombres[i]}`);
  }
}

//saludar(); // Llama a la función para saludar a cada nombre en el array

function map(){
    const numeros = [1,2,3,4,5];
    console.log(numeros);
    const dobles = numeros.map(n => {
        if (n % 2 == 0) {
            return "Par";
        } else {
            return "Impar";
        }
    });
    console.log(dobles);
}

function filter() {
    const numeros = [5,10,15,20];
    console.log(numeros);
    const mayoresQue10 = numeros.filter(n => n >10);
    console.log(mayoresQue10);
}

function reduce() {
    const numeros = [1,2,3,4];
    console.log(numeros);
    const sumaTotal = numeros.reduce((acumulador, n) => 
         (acumulador + n),0
);
    console.log(sumaTotal);
}

function forEach() {
    const nombres = ["Ana", "Juan", "Pedro", "Maria"];
    console.log(nombres);
    nombres.forEach(name =>console.log( "Hola, " + name));;
}

function objeto() {
let persona = {
    nombre: "Jesus",
    edad: 22,
    ciudad: "Tepic",
    }
persona.carrera = "Ingeniería en Sistemas Computacionales";

console.log(persona);
}
//filter(); // Llama a la función filter para filtrar los números mayores que 10
//map();
//reduce(); // Llama a la función reduce para sumar los números del array
//forEach(); // Llama a la función forEach para saludar a cada nombre en el array
objeto();