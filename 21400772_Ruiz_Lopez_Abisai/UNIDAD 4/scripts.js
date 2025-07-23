/*
let nombre = prompt("Ingresa tu nombre");
console.log("Nombre: "+nombre);
alert("Nombre: "+nombre);

let numero = prompt("Ingresa un número");
let resultado = parseInt(numero)+5;
alert("Resultado: "+numero);

console.log(parseFloat("5.5"));

let nFlotante = "2.5";
console.log(nFlotante);
console.log(parseInt(nFlotante));
*/

function calificacion(){
    let calificacion = parseInt(prompt("Ingresa tu calificación (0-100)"));
    console.log("calificación: "+calificacion);

    if(calificacion < 70){
        console.log("Reprobado");
    }else if(calificacion < 80){
        console.log("Suficiente");
    }else if(calificacion < 90){
        console.log("Notable");
    }else{
        console.log("Excelente");
    }
}

function diaSemana(){
    let dia = prompt("Ingresa el día de la semana").toLowerCase();
    switch(dia){
        case "lunes":
            console.log(1)
            break;
        case "martes":
            console.log(2)
            break;
        case "miercoles":
            console.log(3)
            break;
        case "jueves":
            console.log(4)
            break;
        case "viernes":
            console.log(5)
            break;
        case "sabado":
            console.log(6)
            break;
        case "domingo":
            console.log(7)
            break;
        default:
            console.log("Dia inválido");
    }
}

/*CALLS*/
calificacion();
diaSemana();