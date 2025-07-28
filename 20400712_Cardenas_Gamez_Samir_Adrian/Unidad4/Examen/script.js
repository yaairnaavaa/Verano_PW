
function ejercicio1(){
    let numero=0;
     do{
        let numero=parseInt(prompt("introduce el numero que quieras multiplicar del 1 a  10"))
    if (numero<=0 ||numero>10){
        console.log("introduce un numero entre 1 y 10")
    }else{ for(let i=1; i<11;i++){
       console.log(i+"X"+(numero*i)) 
    }}} while(numero<=0 ||numero>10)
    
   

}
ejercicio1();

/*Pide al usuario que ingrese 5 calificaciones
usando prompt guardar en arreglo 
mostrar todas las calificacionses
el promedio
 y si el estudiante aprobo >=6 o no*/
function ejercicio2(){
    let calificaciones=[]
    let promedio=1;
    for(let i=0;i<5;i++){2
        calificaciones[i]=parseInt(prompt("Calificacion" + (i+1)+"="))
        promedio= promedio+calificaciones[i];
    }
    Aprobados=calificaciones.map(n=> {
        if(n>=6){
            console.log(n+"aprobado")
        } else{
            console.log(n+" no aprobado")
        }
    }
   
   
    )
     console.log("promedio= "+(parseFloat(promedio/5)));
}
ejercicio2();

/*
Genera 20 numeros aleatorios entre 1 y 100, guardalos en un arreglo
y muestra cuantos son paresy cuantos impares
*/
    function ejercicio3(){
        let numeros=[]
           
    let pares=0;
    let impares=0;
    for(let i=0;i<20;i++){2
        numeros[i]=parseInt((Math.random()*100)+1)
        }
    Paresimpares=numeros.map(n=> {
        if(n%2==0){
            console.log(n+"par")
            pares=pares+1;
        } else{
            console.log(n+" impar")
            impares=impares+1
        }
    }

   
    )
   console.log("pares="+pares)
      console.log("impares="+impares)
    }
   ejercicio3();


/*Registro de empleados 
crea un ´programa que permita ingresar informacion de varios empleados usando prompt ´reguntar al usuairo
si desea guardad ptrp em´leado al terminar un registro y guarde  cada empleado como un objto con prpiedades:
nombre edad y salario
al finalizar muetre ciantps em´ñedps se registraron
calcula el salario promedio
3.- muesta los nombres de los empleados mayores de 30 años*/


function ejercicio4(){
let Empleado = [];
let seguir = true;

while (seguir) {
  let nombre = prompt("Nombre del empleado:");
  let edad = parseInt(prompt("edad :"));
  let salario = parseFloat(prompt("Salario:"));

  Empleado.push({
    nombre,
    edad,
    salario,
  
  });

  seguir = confirm("¿Deseas registrar otro empleado?");
}

// Total de empleados
console.log("Total de Empleados registrados: " + Empleado.length);

// Total de ingresos
let totalIngresos = Empleado.reduce((sum, venta) => sum + venta.salario, 0);
promedio=parseFloat(totalIngresos/Empleado.length);
console.log("Promedio: "+promedio);

Empleado.forEach(function(n){
    if(n.edad>30){
        console.log(n.nombre+" Es mayor de 30")
    }
})


}
ejercicio4();

/*


Simule un sistema que calcule la comision de ventas 
pide al usuario el nombre del vendedor,monto de venta y calcula su comision
si vendio menos de $10,000=10%
si vendio 10,000o mas =15%
1 guarda cada venta como un objeto en un arreflo
permite ingresar multiples ventas hasta que se ingrese salir
al final muestra el total de ventas y la comisin total pagada
*/ 
function ejercicio5(){
let Empleado = [];
let seguir = true;

while (seguir) {
  let nombre = prompt("Nombre del vendedor:");
  let montoventa = parseFloat(prompt("Monto de venta:"));
     if(montoventa>10000){
        comision=(montoventa*0.15)
    }else{
      comision=(montoventa*0.1)
    }
  Empleado.push({
    nombre,
    montoventa,
     comision
  
  });

  seguir = confirm("¿Deseas registrar otra venta?");
}

// Total de ventas
console.log("Total de ventas registrados: " + Empleado.length);

// Total de ingresos
let totalIngresos = Empleado.reduce((sum, venta) => sum + venta.salario, 0);
promedio=parseFloat(totalIngresos/Empleado.length);
console.log(promedio);

Empleado.forEach(function(n){
   
})
console.log(Empleado)
}

ejercicio5();