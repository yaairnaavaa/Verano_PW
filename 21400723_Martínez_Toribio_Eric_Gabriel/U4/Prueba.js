//Declaracion de variables 
var nombre1 = 'Yair';
console.log(nombre1);
nombre1 = "Yair Mode"
console.log(nombre1);

let nombre2 = "Irving";
console.log(nombre2);
nombre2 = "Irving Mod"
caches.log(nombre2);

if(true){
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}

console.log(mensaje1);
console.log(mensaje2);




function saludo1(nombre){
    console.log("Hola"+nombre);
}

saludo1();

const saludo2 = function(nombre){
    console.log("Hola, Saludo2"+nombre)
}

saludo2("Irving");

const suma=(a,b)=>{
    let s = a + b;
    console.log("suma: ")
}

suma(5,2);