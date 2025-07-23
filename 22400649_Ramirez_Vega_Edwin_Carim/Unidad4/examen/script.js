function ej1(){
    do{
        var num = parseInt(prompt("Ingresar un numero del 1 al 10"));
    }while(num < 1 || num > 10)

    for(let i = 1; i<=10; i++){
        var n2 = num * i;
        console.log(num + " * " + i + " = " + n2);
    }
}


//Pide al usuario que ingrese 5 calificaciones
//usando promt() dentro un ciclo
//guardalas en un arreglo y al final mestra
//todas las calificaciones 
//el promedio
//si el estudiante aprobo (>=6) o no
function ej2(){
    var calif = [];
    var total = 0;
    for(let i=0; i<5; i++){
        do{
            calif[i]= parseInt(prompt("Ingresar calificacion (0 - 10) ("+(i+1)+")"));
        }while(calif[i]<0 || calif[i]>10);

        total = total + calif[i];
        console.log("Calificacion " + (i+1) + ": " + calif[i]);
    }
    var promedio = total/5
    console.log("Promedio final: " + promedio);
    if(promedio >= 6){
        console.log("El estudiante tiene calificacion aprobatoria");
    }else{
        console.log("El estudiante no tiene calificacion aprobatoria");
    }
}

//Genera 20 numeros aleatorios entre 1 y 100, guardalos en 
//un arreglo y muestra cuantos son pares y cuantos impares
function ej3(){
    var nums = [];
    var pares = [""];
    var impares = [""];
    var cantpar = 0;
    var cantimpar = 0;
    for(let i=0; i<20; i++){
        nums[i]=Math.floor(Math.random()*100)+1;
        console.log(nums[i]);
        if(nums[i]%2 == 0){
            pares = pares + nums[i] + ", ";
            cantpar++;
        }else{
            impares = impares + nums[i] + ", ";
            cantimpar++;
        }
    }

    console.log("Total de numeros pares: " + cantpar);
    console.log("Pares: " + pares);
    console.log("Total de numeros impares: " + cantimpar);
    console.log("Impares: " + impares);
}

//Crea un programa que permita ingresar informacion de 
//varios empleados usando prompt() (preguntar al usuario
//si desea guardar otro empleado al terminar el registro)
//y guarde cada empleado como un objeto con propiedades:
//nombre, edad y salario

//al finalizar, muestra
//cuantos empleados se registraron
//calcula el salario promedio
//muestra los nombres de los empleados mayores de 30 a;os

function ej4(){
    var empleados = [];
    var i = 0;
    var salarioTotal = 0;
    do{
        empleados[i] = {
            nombre: prompt("Ingresar nombre: (" + (i+1) + ")"),
            edad: parseInt(prompt("Ingresar edad: (" + (i+1) + ")")),
            salario: parseInt(prompt("Ingresar salario: (" + (i+1) + ")"))
        }

        do{
            var more = prompt("Desea ingresar otro empleado (Si / No): ").toLowerCase();
        }while(more !== "si" && more !== "no")
        
        salarioTotal = salarioTotal + empleados[i].salario;
        i++

    }while(more == "si");

    var mayor30 = empleados.filter(n => n.edad > 30);

    console.log("Total de empleados registrados: " + i);
    console.log("Salario promedio: " + (salarioTotal / i));
    console.log("Empleados con edad mayor a 30: ");
    for(let i=0; i<(mayor30.length); i++){
        console.log(mayor30[i].nombre);
    }
    //console.log(mayor30);
}

//simula un sistema que calcule la comision de ventas.
//pide al usuario el nombre del vendedor, monto de venta
//y calcula su comision
//si vendio menos de 10,000 = 10%
//si vendio 10,000 o mas = 15%

//guarda cada venta como un objeto en un arreglo
//permite ingresar multiples ventas(hasta que se ingrese salir)
//al final muestra el total de ventas y la comision total pagada

function ej5(){
    var ventas = [];
    var i =0;
    var totalCom = 0;
    do{
        ventas[i] = {
            nombre: prompt("Ingresar el nombre: ("+(i+1)+")"),
            monto: parseInt(prompt("Ingresar el monto de venta: ("+(i+1)+")")),
            comision: 0
        }

        if(ventas[i].monto < 10000){
            ventas[i].comision = ventas[i].monto * 0.10;
        }else{
            ventas[i].comision = ventas[i].monto * 0.15;
        }
        totalCom = totalCom + ventas[i].comision;

        var more = prompt("¿Desea salir?".toLowerCase());

        i++;
    }while(more!=="salir");

    console.log("Total de ventas: " + i);
    console.log("Total de comision pagada: " + totalCom);
}

ej2();

