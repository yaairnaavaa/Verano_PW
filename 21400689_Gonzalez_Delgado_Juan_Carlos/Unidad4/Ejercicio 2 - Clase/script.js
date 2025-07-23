//let numero = prompt("Ingrese un numero:");
//let resultado = parseInt(numero) + 5;
//alert("Resultado: " + resultado);

//let numeroFlotante = "2.5";
//console.log(numeroFlotante);
//console.log(parseFloat("5.5"));

//let calificacion = parseInt(
//    prompt("Ingresa tu calificación(0-100): ")
//);

//console.log("Calificacion: " + calificacion);

//if (calificacion < 70) {
//    console.log("Reprobado");
//} else if (calificacion < 80) {
//    console.log("Sufuciente");
//} else if (calificacion < 90) {
//    console.log("Notable");
//} else {
//    console.log("Excelente");
//}

/*
function calificacion() {
    let calificacion = parseInt(
        prompt("Ingresa tu calificación(0-100): ")
    );

    console.log("Calificacion: " + calificacion);

    if (calificacion < 70) {
        console.log("Reprobado");
    } else if (calificacion < 80) {
        console.log("Sufuciente");
    } else if (calificacion < 90) {
        console.log("Notable");
    } else {
        console.log("Excelente");
    }
}

calificacion();
*/


function diaSemana(){
    let dia = prompt("Ingrese dia").toLowerCase();
    switch(dia){
        case "lunes":
            console.log("Hoy es lunes");
            break;
        case "martes":
            console.log("Hoy es martes");
            break;
        case "miercoles":
            console.log("Hoy es miercoles");
            break;
        case "jueves":
            console.log("Hoy es jueves");
            break;
        case "viernes":
            console.log("Hoy es viernes");
            break;
        case "sabado":
            console.log("Hoy es sabado");
            break;
        case "domingo":
            console.log("Hoy es domingo");
            break;
        default:
            console.log("Dia no valido");
    }
}

diaSemana();