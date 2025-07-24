console.log("Hola Mundo!")

//Declaracion de variables
var nombre1 = "Eddi";
console.log(nombre1);
nombre1 = "Eddi2";
console.log(nombre1);



let nombre2 = "Eddilson";
console.log(nombre2);

nombre2 = "Eddilson2";
console.log(nombre2);

if(true){
    var mensaje1 = "Mensaje1";
    var mensaje2 = "Mensaje2";
    console.log(mensaje1);
    console.log(mensaje2);
}


saludo1("Eddddddilson");

function saludo1(nombre){
    console.log("Hola " + nombre);


}

const saludo2 = function(nombre){
    console.log("Hola " + nombre);
}


saludo2("edi");


const suma = (a,b) => {
    let s = a+b;
    console.log("suma: "+s );
}

suma(15,15);