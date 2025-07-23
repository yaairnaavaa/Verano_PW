/* Examen U4: Ejercicio 1 Tabla de multiplicar.

Crea un programa que pida al usuario 
un número del 1 al 10 mediante prompt()
 y muestre su tabla de multiplicar del 1 
 al 10 en consola.*/

function tablaMultiplicar(){
    let num;
    do{
    num = prompt("Ingrese un número del 1 al 10.");
    if (num<1 || num>10){
        alert("El número debe de estar entre 1 y 10.");
    }
    } while(num<1 || num>10);

    for (i=1; i<=10;i++){
    
        console.log(num+"*"+i+"="+num*i);
    }
}


/* Ejercicio 2 Promedio de calificaciones

Pide al usuario que ingrese 5 calificaciones
(usando prompt() dentrode un cliclo),
guárdalas en un arreglo y al final muestra:
1.- Todas las calificaciones
2.- El promedio
3.- Si el estudiante aprobó (>=6) o no*/


function Promedio(){
    let cals = [];

    for(i=0;i<=4;i++){
        do{
            cals[i]=prompt("Ingrese su calificación");
            if(cals[i]<1 || cals[i]>10){
                alert("Ingrese una calificación válida!");
            }
        } while(cals[i]<1 || cals[i]>10);
    }
    let prom;
    console.log("1. Calificaciones");
    for(i=0;i<=4;i++){
        console.log(i+".-"+cals[i]);
        prom=prom+cals[i];
    }
    console.log("2. Promedio");
    prom=prom/5;
    console.log("Su promedio es: "+prom);
    console.log("3. Aprobación");
    if(prom<6){
        console.log("Reprobaste.");
    } else {
        console.log("Aprobaste");
    }

   
}



/* Ejercicio 3 Contar pares e impares

Genera 20 números aleatorios entre 1 y 
100 y guárdalos en un arreglo y muestra
cuántos son pares y cuántos impares.*/
function ParesImpares(){
let nums = [];
let pares=0;
let impares=0;

for (i=0;i<20;i++){
    nums[i]=Math.floor(Math.random()*100)+1;

    (nums[i] % 2 === 0)? pares++ : impares ++;
    
}

console.log("Hay "+pares+" números pares y "+impares+" números impares.");
}


/* Ejercicio 4 Registro de empleados

Crea un programa que permita ingresar información de
varios empleados usando prompt() (preguntar al usuario
si desea guardar otro empleado al terminar un registro) y
guarde cada empleado como un objeto con propiedades:
nombre, edad y salario.

1.- Al finalizar, muestra cuántos empleados se registraron.
2.- Calcula el salario promedio.
3.- Muestra los nombres de los empleados mayores de 30*/

function RegistroEmpleados(){
    let nombre = [];
    let edad = [];
    let salario = [];
    let terminar;
    let salarioProm;
    i=0;

    do {
        nombre[i]=prompt("Ingresa nombre de empleado");
        edad[i]=prompt("Ingresa edad de empleado");
        salario[i]=prompt("Ingresa salario de empleado");
        i++;
        salarioProm=salarioProm+salario[i];
        terminar=prompt("Desea guardar otro usuario (1) o salir (2)");
    } while (terminar==1);
    console.log("Se registraron "+i+" Empleados");
    console.log("El salario promedio es "+(salarioProm/i));
    console.log("Empleados mayores de 30:");
    for (i;i>=0;i--){
        if(edad[i]>30){
            console.log(nombre[i]);
        }
    }
}




/* Ejercicio 5 Calculadora de comisiones

Simula un sistema que calcule la comisión de ventas.
Pide al usuario el nombre del vendedor, monto de venta y
calcula su comisión:

Si vendió menos de $10,000 = 10%
Si vendió $10,000 o más = 15%

1. Guarda cada venta como un objeto en un arreglo
2. Permite ingresar múltiples ventas (hasta que se
ingrese "salir".
3. Al final muestra el total de ventas y la comisión total
pagada.*/


function Comisiones(){
    let nombre = String;
    let venta = [];
    let comision;
    let opcion = String;
    let i = 0;

    nombre = prompt("Ingrese su nombre");
    do{
        venta[i]=prompt("Ingrese el monto de su venta");
        i++;

        if(venta[i]<10000){
            comision=comision+(venta[i]*0.10);
        } else {
            comision=comision+(venta[i]*0.15);
        }
        opcion = prompt("¿Desea seguir o salir?");

    } while(opcion!="salir");

    console.log("Hola "+nombre+" hiciste un total de "+i+" y ganaste una comisión de $"+comision);
}

/*
tablaMultiplicar();
Promedio();
ParesImpares();
RegistroEmpleados();
Comisiones();
*/
