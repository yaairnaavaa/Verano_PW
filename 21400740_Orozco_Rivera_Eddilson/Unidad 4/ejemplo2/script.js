/*
let nombre = prompt("Ingresa tu nombre");
console.log("Nombre: "+ nombre);
alert("Nombre: " +nombre);
*/

/*
let numero = prompt("Ingresa un numero");
let resultado = parseInt(numero)+5;
alert("Resultado: " +resultado);
*/

/*
let numeroFlotante ="2.5";
console.log(numeroFlotante);
console.log(parseFloat(numeroFlotante));
*/

function calificacion(){

    let calificacion = parseInt(prompt("Ingresa tu calificacion (0-100): "));
    console.log("Calificacion: " +calificacion);
    

    if(calificacion < 70){
        console.log("Reprobado");
    } else if(calificacion < 80){
        console.log("Suficiente");
    }else if(calificacion < 90){
        console.log("Notable");
    } else {
        console.log("Excelente");
    }
}

//calificacion();
function diaSemana(){
    let dia = prompt("ingrese dia").toLowerCase();
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
            console.log(6);
            break;
        case "domingo":
            console.log(7);
            break;
        default:
            console.log("Dia invalido");
    }
}

//diaSemana();

/*

*/

function tablaMultiplicar(n){
    for(let i = 1;i <= 10;i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}

//tablaMultiplicar(2);

function saludar(){
    let nombres = ["Ana","Luis","Carlos","Marta","Pedro"];
    console.log(nombres);

    for(let i =0 ; i < nombres.length; i++){
        console.log(`Hola, ${nombres[i]}`);
    }
}

//saludar();

function map(){
    const numeros = [1,2,3,4,5];
  

    const pares = numeros.map(n => {  
    if(n%2 == 0){
        return "Par";
    }
    return "Impar";
    });
    console.log(pares);
}

//map();

function filter(){
    const numeros = [14,23,5,3,10];
    console.log(numeros);
    const mayoresQue10 = numeros.filter(n => n > 10);
    console.log(mayoresQue10);
}

//filter();

function reduce(){
    const numeros = [1,2,3,4,5];
    console.log(numeros);

    const suma = numeros.reduce((acumulador, n) => 
        (acumulador + n),0
    );
    console.log(suma);
}

//reduce();

function forEach(){   
    const nombres = ["Ana","Luis","Carlos","Marta","Pedro"];
    console.log(nombres);
    nombres.forEach(name => console.log("Hola " + name));
}

//forEach();

function objeto(){
    let persona = {
        nombre: "Eddilson",
        edad: 22,
        ciudad: "Tuxpan",
        imprimirNombre: function() {
            console.log("Nombre: "+ this.nombre);
        }
    }
    
    console.log(persona);

    persona.carrera = "ISC";
    console.log(persona);

    delete persona.ciudad;
    console.log(persona);

    persona.imprimirNombre();
}

objeto();