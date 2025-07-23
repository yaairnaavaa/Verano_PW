//let nombre =prompt("Ingresa tu nombre");
//console.log("Nombre "+nombre);
//alert("Nombre: "+nombre);

//let numero = prompt("Ingresa un numero")
//let resultado= parseInt(numero)+5;
//alert ("Resultado: "+resultado);

/*let numeroFlotante ="2.5";
console.log(numeroFlotante);
console.log(parseFloat(numeroFlotante)+0.5);

*/

function calificacion (){

    let calificacion=parseInt(prompt("Ingresa tu calificacion (0-100)"));
console.log("Calificacion: "+calificacion)

if (calificacion<70){
console.log("Reprobaste")

}else if(calificacion<80){

    console.log("Suficiente");

}else if(calificacion<90){

    console.log("Notable");

}else{

    console.log("Exelente");

}


}

function diaSemana(){

    let dia = prompt("Ingrese día").toLowerCase();
    switch(dia){

        case "lunes":
            console.log(1);
            break;

        case "martes":
            console.log(2);
            break;  
        case "miercoles":
            console.log(3);
            break;
        case "jueves":
            console.log(4);
            break;    
        case "viernes":
            console.log(5);
            break;          
        case "sabado":
            console.log(6);
            break;
        case "domingo":
            console.log(7);
            break;
        default:
            console.log("Dia invalido");    
    }

}

diaSemana();