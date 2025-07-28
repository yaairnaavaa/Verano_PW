/* Escribe un programa que genere dos números aleatorios y
que escriba en consola qué números se generaron. Además,
el programa deberá señalar si los números son iguales, y en
 caso de que no lo sean, mostrará cuál es el mayor. */

 let num1 = Math.floor(Math.random()*10)+1;
let num2 = Math.floor(Math.random()*10)+1;

console.log("El primer número es: "+num1);
console.log("El primer número es: "+num2);

 if (num1==num2){
    console.log("Los números son iguales");
 } else {
    console.log("Los números son distintos");
    if (num1>num2){
      console.log("El número 1:"+num1+" es mayor.");
    } else {
      console.log("El número 2:"+num2+" es mayor.");
    }
 }