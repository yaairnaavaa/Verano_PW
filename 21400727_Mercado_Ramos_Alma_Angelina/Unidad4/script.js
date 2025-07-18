//Declaración de variables
var nombre1 = "Alma";
console.log(nombre1);
nombre1 = "Alma Mod";
console.log(nombre1);

let nombre2 = "Angelina";
console.log(nombre2);
nombre2 = "Angelina Mod";
console.log(nombre2);

if(true){
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}
console.log(mensaje1);
//console.log(mensaje2);

saludo1("Alma");
function saludo1(nombre) {
    console.log("Hola, " + nombre);
}

const saludo2 = function(nombre) {
    console.log("Hola, " + nombre);
}
saludo2("Angelina");

const suma = (a,b) => {
    let s = a + b;
    console.log("Suma: " + s);
}
suma(5,2);

let nombre = prompt("Ingresa tu nombre");
console.log("Nombre: " + nombre);
alert("Nombre: " + nombre);

let numero = prompt("Ingresa un numero");
let resultado = parseInt(numero) + 5;
alert("Resultado: " + resultado)

let numeroFlotante = "2.5";
console.log(numeroFlotante);
console.log(parseFloat("2.5"));

function calificacion() {
    let calificacion = parseInt(prompt("Ingresa tu calificación (0-100)"));
    console.log(calificacion);

    if (calificacion < 70) {
        console.log("Reprobado");
    } else if (calificacion < 80) {
        console.log("Suficiente");
    } else if (calificacion < 90) {
        console.log("Notable");
    } else {
        console.log("Excelente");
    }
}
calificacion();

function diaSemana() {
    let dia = prompt("Ingrese un día de la semana").toLowerCase();
    switch (dia) {
        case "lunes":
            console.log(1);
            break;
        case "martes":
            console.log(2);
            break;
        case "miercoles":
            console.log(3);
            break;
        case "jueves":
            console.log(4);
            break;
        case "viernes":
            console.log(5);
            break;
        case "sabado":
            console.log(6);
            break;
        case "domingo":
            console.log(7);
            break;
        default:
            console.log("Día invalido")
            break;
    }
}
diaSemana();