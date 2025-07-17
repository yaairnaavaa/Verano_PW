//Declaracion de variables

var nombre1 = "Jose";
console.log(nombre1);
nombre1 = "Jose Mod";
console.log(nombre1);

let nombre2 = "Luis";
console.log(nombre2);
nombre2 = "Luis Mod";
console.log(nombre2);

if(true){
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}

function saludo1(nombre){
    console.log("Hola, " + nombre);
}

const saludo2 = function(nombre){
    console.log("Hola, " + nombre);
}

saludo1("Jose");
saludo2("Luis");

const suma = (a,b) => {
    let s = a+b;
    console.log("Suma: "+s);
}

suma(5,2);