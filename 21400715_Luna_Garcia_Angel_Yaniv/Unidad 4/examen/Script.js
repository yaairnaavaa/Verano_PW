function Ejercicio1(){
  let numero = 0;
  numero = prompt('Ingrese un numero entre 1 y 10');
  if(numero >=1 && numero<=10){
    for (i = 1; i <= 10; i++) {
      console.log(i + ' * ' + numero + ' = ' + numero * i);
    }//for
  }else{
    console.log('numeros no válidos');
  }//if
}//Ejercicio1



//El usuario ingresa 5 calif con prompt dentro de un ciclo
// guardarlas en un arreglo y mostrar: las calif, el prom, si aprobo con 6>=
function Ejercicio2(){
  let numero = [0,0,0,0,0];
  let prome=0;
  for(i=0;i<5;i++){
    numero[i] = parseInt(prompt('Ingrese su calif en la materia '+(i+1)));
    if(numero[i]<0 || numero[i]>10){
      numero[i]=5;
    }
    prome += numero[i];
    console.log('Materia 1: '+numero[i]);
  }
  prome=prome/5;  
  console.log("Su promedio es: "+prome);
  if(prome>=6){
    console.log('Aprobo con un promedio de '+prome);
  }else{
    console.log('Reprobo con un promedio de '+prome);
  } 
}

//Contar pares e impares:
//Generar 20 numeros aleatorios entre 1 y 100, 
// guardarlos en un arreglo y mostrar
//cuantos son pares y nones
function Ejercicio3(){
  num=0;
  let pares= [];
  let nones = [];
  let P=0
  let N=0 
  for(i=0;i<20;i++){
    num=Math.round(Math.random()*100);
    if(num%2){
      pares[P]=num;      
      console.log(pares[P]+' Par');
      P++;
    }else{
      nones[N]=num;
      console.log(nones[N]+' None');
      N++;
    }
  }//for
  
    console.log('Hay '+pares.length+' numeros pares');    
    console.log('Hay '+nones.length+' numeros nones');
}

/*
Crea un prog que permita ingresar info de varios empleados
usando prompt() (preguntar al usu si desea guardar otro empleado al terminar el registro)
y guarde cada empleado como un objeto con propiedades:
nombre, edad y salario.

Al final muestra los empleados que se registraron.
Calcula el salario promedio
Muestra los nombres de empleados > a 30 años
*/
function Ejercicio4(){  
    let empleado = [];
    let nom=0;
    let edadP=0;
    let salarioP=0;
        
    let i=0;
    let opcion='si';
     do{
        nom = prompt('Ingrese nombre del empleado');
        edadP = parseInt(prompt('Ingrese la edad del empleado'));
        salarioP = parseInt(prompt('Ingrese el salario del empleado'));
        empleado.push({nombre: nom,edad: edadP, salario: salarioP})
        console.log(empleado);
        opcion=prompt('Escriba ´si´ en caso de querer añadir un nuevo empleado, ´no´  para terminar');
      }while(opcion=='si');
   const mayores = empleado.filter( sal => sal.edad > 30);
   console.log('Empleados mayores de 30 años');
   mayores.forEach(emp => {
    console.log(`Nombre: ${emp.nombre}, Edad: ${emp.edad}, Salario: ${emp.salario}`);

   });
    
}
Ejercicio4();


/*
Calculadora de comisiones
Simula un sistema que calcula la comision de ventas.

pide al usuario el nombre del vendedor, monto de venta y calcula
su comisión:

*Si vendió menos de $10,000 = 10%;
*         más de $10,000 = 15%;

1- Guarda cada venta como un objeto en un arreglo
2- Permite ingresar múltiples ventas (hasta que se ingrese "salir")
3- Al final, muestra el total de ventas y la comisión total pagada.
*/ 
