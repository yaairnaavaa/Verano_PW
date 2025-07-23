//Declaración de variables

var nombre1 = "Carim";
console.log(nombre1);

nombre1 = "Golshi";
console.log(nombre1);

let nombre2 = "Edwin";
console.log(nombre2);

nombre2 = "Jovial";
console.log(nombre2);

if(true){
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";

    console.log(mensaje1);
    console.log(mensaje2);
}

console.log(mensaje1);
//console.log(mensaje2);

saludo1("Carim");
//saludo2();
//suma();

function saludo1(nombre) {
    console.log("Hola, saludo1 " + nombre);
}

const saludo2 = function(nombre) {
    console.log("Hola, saludo2 " + nombre);
}

saludo2("Golshi");

const suma = (a, b) => {
    let c = a + b
    console.log("suma: " + c);
}

suma(1, 2);