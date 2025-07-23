//Examen U4 Programacion Web - Martínez Toribio Eric Gabriel

var tablas = function(){
let numero = prompt("Ingresa un numero del 1 al 10");
var tabla = 1;
for(i=1;i<=5;i++){
   res = tabla * numero;
   tabla++;
   console.log(res);
 }//Fin for
}//Fin 


//EXAMEN U4 Ejercicio 2 Promedio de calificaciones 
//Pide al usuario que ingrese 5 calificaciones 
var Promedios = function(){
var calificaciones = []; 
var notas = 0;
for(i=1;i<=5;i++){
let calificacion = prompt("Ingresa una calificacion");
calificaciones.push(calificacion);
var nota = parseInt(calificacion);
notas = notas + nota;
}
console.log(calificaciones);
var Promedio = notas/5;
console.log(Promedio);
}//Fin

//EXAMEN U4 Ejercicio3 contar pares e impares 
//Genera 20 numeros aleatorios entre 1 y 100, guardalos en un 
//un arreglo y muestra cuantos pares son y cuantos impares 
var PareaImpares = function(){
var numeros = []
var par 
var impar
for(i=1;i<=20;i++){
  let numero = parseInt(Math.random() * 100);
   if(numero%2==0){
     par++
   }else{
   impar++
   }
  numeros.push(parseInt(numero)); 
 }//for
console.log(numeros);
console.log("Los numeros pares son : "+par);
console.log("Los numeros imapres son: "+impar)
}//fin

//EXAMEN U4 Ejercicio4 registro de empleados 
//Crea un programa que perimita ingresar informacion
//de varios empleados usando prompt() preguntar al usuario 
//si desea guardar otro empleado al terminar un registro 
//y gaurde cada empleado como un objeto con propiedades:
//nombre, edad,salario. 
var Empleados = function(){
var empleados = 0;
var salarios = 0;
var promedio = 0;

do{
   var treinton = 0;
   let nombre = prompt("Ingresa el nombre del empleado");
   let edad = prompt("Ingresa la edad del susuario");
   let salario = prompt("Ingresa el salario");
   var opcion = prompt("Deseas agregar otro usuario");
   console.log("Datos de empleado: \n"+"Nombre:"+nombre+"\nEdad:"+edad+"\nSalario: "+salario)
   if(edad>=30){
      treinton++;
   }
   salarios = salarios + parseInt(salario);
   empleados++
   
}while(opcion =="si");
console.log("Numero de empleados de más de 30: "+treinton);
console.log("Numero de empleados"+empleados);
promedio = salarios / empleados;
console.log("El promedio de salarios es: "+promedio)
}//fin

//EXAMEN U4 Simula un sistema que calcule la comision de ventas
//Pide al usuario el nombre del vendedor, monto y venta 
//y calcule su comision:
//*Si vende menos de 10000 es 10%
//Si vendio 10000 o mas en 15%
//1-Guarda cada venta como un objeto en un arreglo 
//2.Permite ingresar multiples ventas hasta salir 
//Al final muestre total de ventas y la comison total 
var Ventas = function(){
do{
   var nombre = prompt("Ingresa el nombre del vendedor");
   var monto = prompt("Ingresa el monto");
   var ventas = prompt("Ingresa la venta");
   if(ventas>=10000){
      
   }else{

   }
  
   
}while(opcion =="si");


}//fin



//Prueba de Funciones 
//tablas()
//Promedios()
//PareaImpares()
//Empleados()

