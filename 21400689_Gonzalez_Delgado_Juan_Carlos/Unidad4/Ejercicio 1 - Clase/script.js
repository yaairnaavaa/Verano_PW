//Declaracion de variables

var nombre1 = "Juan";
console.log(nombre1);
nombre1 = "Juan Mod";
console.log(nombre1);

let nombre2 = "Carlos";
console.log(nombre2);
nombre2 = "Carlos Mod";
console.log(nombre2);

if (true) {
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}
//console.log(mensaje1);
//console.log(mensaje2); // Esto causará un error porque mensaje2 está definido con let y no es accesible fuera del bloque if

saludo1("Juan");


function saludo1(nombre) {
    console.log("Hola, " + nombre);
}

const saludo2 = function(nombre) {
    console.log("Hola, " + nombre);
}

saludo2("Carlos");

const suma = (a,b) => {
    let s = a+b;
    console.log("suma: " + s);
}
 
suma(5,2);