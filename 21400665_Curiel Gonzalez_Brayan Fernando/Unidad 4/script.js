//DECLARACION DE VARIABLES

var nombre1 = "Brayan"; //var permite estar cambiando el valor de la variable y volver a declararla
console.log(nombre1);
nombre1 = "Brayan Mod";
console.log(nombre1);

let nombre2 = "Fernando"; //asigna un valor pero no se puede volver a declar
console.log(nombre2);
nombre2 = "fernando Mod";
console.log(nombre2)

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

saludo1("Brayan");
saludo2("Fernando");

const suma = (a,b) =>{
    let s = a+b;
    console.log("suma: "+s);
}

suma(5,2);