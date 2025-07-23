//Declaración de variables

var nombre1 = "Said";
console.log(nombre1);
nombre1 = "Said mod";
console.log(nombre1);

let nombre2 = "SAID";
console.log(nombre2);
nombre2 = "SAID mod";
console.log(nombre2);

if (true) {
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}

function saludo1(nombre){
    console.log("Hola "+nombre)
}

const saludo2 = function(nombre) {
    console.log("Hola "+nombre);
}

saludo1("Said");
saludo2("SAID");

const suma =(a,b) => {
    let s = a+b;
    console.log("suma: " +s);
}

suma(5,2);

/*let numero = prompt("Ingresa un número");
let resultado = parseInt(numero)+5;
alert("Resultado: "+resultado);

let numeroFlotante = "2.5";
console.log(numeroFlotante);
console.log(parseFloat("5.5"));*/

/*function calificacion(){

    let calificacion = parseInt{
    prompt("Ingresa tu calificación (0-100)")
    };

    console.log("calificacion: " +calificacion);

    if(calificacion < 70){
        console.log("reprobado");
    } else if (calificacion < 80){
        console.log("Suficiente");
    } else if (calificacion < 90){
        console.log("Notable");
    } else {
        console.log("Excelente");
    }
}

calificacion ();*/

function dia(){
    let dia = prompt("Ingrese dia").toLowerCase();
    switch(dia){
        case "Lunes":
            console.log(1);
            break;
        case "martes":
            console.log(2);
            break;
        case "Miercoles":
            console.log(3);
            break;
        case "Jueves":
            console.log(4);
            break;
        case "Viernes":
            console.log(5);
            break;
        case "Sabado":
            console.log(6);
            break;
        case "Domingo":
            console.log(7);
            break;
    }
}