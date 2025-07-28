/*
  Ejercicio 1
  Crea un archivo en el cual pida número con prompt y 
  te de la tabla de multiplicar del 1 al 10
*/

function TablaMultiplicar(){
  let n = prompt("Ingresa un número");
  if(n<=0){
  alert("Número no valido");
  }else{
    let conta = 1;
    while (conta <= 10) {
        console.log(n + " x " + conta + " = " + (n * conta));
        conta++;
    }
  } 
}

//TablaMultiplicar();

/*  Ejercicio 2
    Pide al usuario que ingrese 5 calificaciones 
    (usando prompt() dentro de un ciclo), 
    guardalas en un arreglo y al final muestra:
    1- Todas las calificaciones
    2- El promedio
    3- Si el estudiante aprobo (>=6) o no
*/

function calificaciones() {
  const calif=[];
  let sum=0;

  for (let i=1;i<=5;i++) {
    const califica = prompt("Dame la calificación " + i);
    const num = parseFloat(califica);
    calif.push(num);
    sum = sum + num; 
  }

  const promedio = sum/calif.length;
  console.log("Promedio: " + promedio.toFixed(2));

  if (promedio >= 6) {
    console.log("Aprobado");
  } else {
    console.log("Reprobado");
  }
}

//calificaciones();

/* Ejercicio 3 
   Genera 20 números aleatorios entre 1 y 100, 
   guárdalos en un arreglo y muestra cuántos 
   son pares y cuántos son impares 
*/

function aleatorios() {
  const numeros=[];
  let pares=0;
  let impares=0;

  for (let i=0;i<20;i++) {
    const num = Math.floor(Math.random()*100)+1;
    numeros.push(num);
    if (num%2===0) {
    pares++;
    } else {
    impares++;
    }
  }

  console.log("Números:", numeros);
  console.log("N pares:", pares);
  console.log("N impares:", impares);
}

//aleatorios();

/* Ejercicio 4
   Crea un programa que permita ingresar informacion
   de varios empleados usando un prompt() (preguntar
   al usuario si desea guardar otro empleado al terminar
   un registro) y guarde cada empleado como un objeto
   con propiedades: nombre, edad y salario

   1- Al finalizar, muestra cuántos empleados se registraron.
   2- Calcula el salario promedio
   3- Muestra los nombres de los empleados mayores de 30 años
*/

function infoEmpleado(){
  let empleado
}

/* Ejercicio 5
   Simula un sistema que calcule la comision de ventas.
   Pide al usuario el nombre del vendedor, monto de venta
   y calcula su comision:

   Si vendio menos de $10,000 = 10%
   Si vendio $10,000 o más = 15%

   1- Guarda cada venta como un objeto en un arreglo
   2- Permite ingresar multiples ventas hasta que ingrese salir
   3- Al final, muestra el total de ventas y la comision total pagada
*/

function comisionVentas(){
  let nombre = prompt("Nombre de usuario:");
  let salir = 0;
  while(i = 0){
    let venta = [] = prompt("Ingrese venta");
    let salir = prompt(parseInt("Quiere salir, 1 si, 0 no"));
  } 
  
  let monto = parseFloat();
  if(monto<=10000){
    let descuento = 10%;
  }else{
    let descuento = 15%;
  }

  console.log(nombre);
}

comisionVentas();