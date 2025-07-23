//Jueves 17/07/25
let nombre = prompt("Ingresa un nombre");
console.log("Nombre: "+nombre);
alert("Nombre: "+nombre)

let numero = prompt("Ingresa un numero");
let resultado = parseInt(numero)+5;
alert("Resultado: "+resultado)

console.log(parseFloat("5.5"));

let numeroFlotante="2.5";
console.log(numeroFlotante);
console.log(parseInt(numeroFlotante));

let calificacion = parseInt(porpmt("Ingresa tu calificación del 0-100"));
console.log("Clificación :"+calificacion);

if(calificacion<70){
    console.log("Reprobado");
}else if(calificacion<=80){
    console.log("Suficiente")
}else if(calificacion<=90){
    console.log("Notable")
}else{
    console.log("Excelente")
}

function calificacion(){
let calificacion = parseInt(porpmt("Ingresa tu calificación del 0-100"));
console.log("Clificación :"+calificacion);

   if(calificacion<70){
      console.log("Reprobado");
   }else if(calificacion<=80){
      console.log("Suficiente")
   }else if(calificacion<=90){
      console.log("Notable")
   }else{
      console.log("Excelente")
 }   
}//Fin de funcion 

calificacion();

function diaSemana(){
   let dia = prompt("Ingresa el dia de la semana: ").toLowerCase;
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
        console.log(5);
        break;
     case "domingo":
        console.log(6);
        break
     default:
        console.log("Dia invalido")
        break;
   }
}

   
