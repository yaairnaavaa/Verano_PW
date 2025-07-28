/*Escribe un programa que genere de forma continua números
entre el 0 y el 5, hasta que salga el número 0 */

let numeros = [];
let i;

do {
    numeros[i]=Math.floor(Math.random()*5);    
    console.log(numeros[i]);
} while(numeros[i]!=0);