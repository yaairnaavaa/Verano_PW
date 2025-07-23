/*Crea un programa que pida al usario un numero del 1 al 10 mediante 
prompt() y mustre su tabla de multiplicar del 1 al 10 en consola*/
function Ejercicio1(n){
    let resultado;
    for(let i = 1; i <= 10; i++){
      resultado = i *n;
      console.log(n+"x"+i+"="+resultado);
    }
    }
    
    //Ejercicio1(prompt("Ingresa un numero"));

    /*Pide al usuario que ingrese 5 calificaciones 
    (usando promt() dentro de un cilco),
    guardalas en un arreglo y al final muestra: 
    1.- Todas las calificaciones
    2.- El Promedio
    3.- si el estudiante aprobo(>=6) o no*/

    function Ejercicio2(){
        let calificaciones = [];
        let acumulador = 0;
        let aprobar;

        for(let i=1; i <=5; i++){
            let calificacion = parseInt(prompt("Ingrese su calificacion: "));
            acumulador = acumulador + calificacion;
            calificaciones.push(calificacion);
        }
        acumulador = acumulador/5;

        if(acumulador >= 60){
            aprobar = "Aprobado";
        }else{
            aprobar = "Reprobado";
        }

        console.log(calificaciones);
        console.log(acumulador);
        console.log(aprobar);

    }
    
   //Ejercicio2();

/*Genera 20 numeros aleatorios entre 1 y 100,
Guardalos en un arreglo y 
muestra cuantos son pares y cuantos son impares*/

function Ejercicio3(){
    let numeros = [];
    let par = 0;
    let impar = 0;
    for(let i=1; i <=20; i++){
        numeros.push(parseInt(Math.random()*100)+1);

        
    }

    for(let i=1; i <= numeros.length; i++){
        if(numeros[i]%2 == 0){
            par++;
        }else{
            impar++;
        }
    }


    console.log(numeros);
    console.log("Total de numeros pares: "+ par);
    console.log("Total de numeros impares: "+ impar);
}

//Ejercicio3();

/*Ejercicio 4: Crea un programa que permita ingresar informacion 
de varios empleados usando prompt() 
(Preguntar al usuario si desea 
guardar otro empleado al terminar un registro) 
y guarde cada valor empleado como un objeto con 
propiedades: nombre, edad y saliario
1.- Al finalizar, muestra cuantos empleados se registraron
2.- Calcula el salario promedio
3.- Muestra los nombres de los empleados mayores de 30 años*/


function Ejercicio4(){
let continuar = true;


while(continuar){
   let nombre = prompt("Nombre");
   let edad = prompt("edad")
   let salario = parseInt(prompt("Salario"));

   

let empleados = {
    nombre,
    edad,
    salario,
}


let respuesta = prompt("Desea ingresar un empleado mas? (si/no)");
if(respuesta == "no"){
    continuar = false;
    console.log(empleados);
}

}

}

Ejercicio4();

/*Simula un sistema que calcule la comision de ventas, 
pide al usuario el nombre del vendedor, monto de venta y calcula su comision:
*si vendio menos de $10,000 = 10%
*si vendio $10,000 o mas = 15%

1.- guarda cada venta como un objeto en un arreglo
2.- permite arreglar miltiples ventas (hasta que se ingrese "salir").
3.- Al final, muestra el totoal de ventas y la comision total pagada*/

function Ejercicio5(){

}