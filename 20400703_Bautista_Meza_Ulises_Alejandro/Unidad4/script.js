//Declaracion de var
var nombre1 = "Ulises";
console.log(nombre1);
nombre1="Ulises Mod";
console.log(nombre1);

let nombre2 = "Alejandro";
console.log(nombre2);
nombre2 = "Alejandro Mod";
console.log(nombre2);

if(true){
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}


function saludo1(nombre){
    console.log("Hola, "+nombre)
}

const saludo2 = function(nombre){
    console.log("Hola, "+nombre)
}
saludo2("Alejandro");
saludo2("Alex");
const suma = (a,b) =>{
    let s = a+b;
    console.log("suma: "+s);
}

suma(9,9)