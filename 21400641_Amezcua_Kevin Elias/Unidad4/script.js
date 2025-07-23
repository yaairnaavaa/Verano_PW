console.log("Hola Mundo!");

//Declaración de variables.
var nombre1 = "Kevin"; //Cambiando valor de la variable y volverla a declarar.
console.log(nombre1);
nombre1 = "Kevin Amezcua";
console.log(nombre1);

let nombre2 = "Elias"; //Asignar un valor pero sin volver a declarar.
console.log(nombre2);
nombre2 = "Elias Amezcua";
console.log(nombre2);

if(true) {
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}

function saludo1(nombre) {
    console.log("Hola, Saludo 1 " + nombre);
}

const saludo2 = function(nombre) {
    console.log("Hola, Saludo 2 "  + nombre);
}

saludo1(nombre1);
saludo2(nombre2);

const suma = (a,b) => {
    let s = a + b
    console.log("suma: " + s);
}

suma(1,7);