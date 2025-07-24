/*
let nombre = prompt ("Ingresa tu nombre");

console.log("nombre: " + nombre)
alert("Nombre: "+ nombre)

let numero = prompt("Inregsa un numero")
let resultado = parseInt(numero)+5

alert("Numero: " + resultado)

let numeroFlotante ="2.5";
console.log(numeroFlotante)             // Como cadena de texto
console.log(parseFloat(numeroFlotante)) // Como número

*/



function calif(){
    let calificacion = parseInt(prompt("Ingresa tu calificacion del 0 al 100"));
    console.log("Calif: " + calificacion);
    
    
    if (calificacion < 70){
        console.log("Reprobado")
    }else if(calificacion < 80){
        console.log("Suficiente")
    }else if(calificacion < 90){
        console.log("Notable")
    }else{
        console.log("Aprobado")
    }
}

calif()

function diaSemana(){

    let dia = prompt("Ingresa un dia de la semana")
    switch (dia){
        case "Lunes":
            console.log(1);
            break;
        case "Martes":
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
        default:
                console.log("Día erróneo")
        }
}
diaSemana() 
