console.log("---Clase 1");
/*
console.log("Hola Mundo!");

//Declaración de variables.
var nombre1 = "Kevin"; //Cambiando valor de la variable y volverla a declarar.
console.log(nombre1);
nombre1 = "Kevin Amezcua";
console.log(nombre1);

let nombre2 = "Elias"; //Asignar un valor pero sin volver a declarar.
console.log(nombre2);
nombre2 = "Elias Amezcua";
console.log(nombre2);

if(true) {
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}

function saludo1(nombre) {
    console.log("Hola, Saludo 1 " + nombre);
}

const saludo2 = function(nombre) {
    console.log("Hola, Saludo 2 "  + nombre);
}

saludo1(nombre1);
saludo2(nombre2);

const suma = (a,b) => {
    let s = a + b
    console.log("suma: " + s);
}

suma(1,7);
*/
console.log("");
console.log("---Clase 2");

/*let numero = prompt("Ingresa un numero: ");
let resultado = parseInt(numero) + 5;
alert("Resultado: " + resultado);

let numeroFloat = "2.5"
console.log(numeroFloat)
console.log(parseFloat(numeroFloat))*/



function calif() {
    let calificacion = parseInt(prompt("Ingresa tu Calificación (0-100): "))

    if (calificacion < 70) {
        console.log("Reprobado");
    } else if (calificacion < 80) {
        console.log("Suficiente");
    } else if (calificacion < 90) {
        console.log("Notable");
    } else {
        console.log("Excelente");
    }

    console.log("Calificación: " + calificacion)
}

//calif();

function diaSemana() {
    let dia = prompt("Ingresa dia: ").toLowerCase();
    switch(dia) {
        case "lunes":
            console.log("Dia 1")
            break;
        case "martes":
            console.log("Dia 2")
            break;    
        case "miercoles":
            console.log("Dia 3")
            break;   
        case "jueves":
            console.log("Dia 4")
            break;  
        case "viernes":
            console.log("Dia 5")
            break;  
        case "sabado":
            console.log("Dia 6")
            break;  
        case "domingo":
            console.log("Dia 7")
            break;   
        default:
            console.log("Error, dia no valido.")  
            break;
    }
}

//diaSemana();

console.log("");
console.log("---Clase 3");

function tablaMultiplicar(n) {
    for(let i=1; i<=10; i++) {
        console.log(`${n} X ${i} = ${n*i}`);
    }
}

console.log("---");
tablaMultiplicar(3);

function saludar() {
    let nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];
    console.log(nombres);

    for(let i=0; i<nombres.length; i++) {
        console.log(`Hola, ${nombres[i]}`);
    }
}

console.log("---");
saludar(); 

function map() {
    const numeros = [1,2,3,4,5];
    console.log(numeros);

    const dobles = numeros.map(n => {
        if(n % 2 == 0) {
            return "Par";
        } 
        return "Impar"; 
    });
    console.log(dobles);
}

console.log("---");
map();

function mapString() {
    const nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];
    console.log(nombres);

    const pares = nombres.map(name => {
        return name+= " algo"; 
    });
    console.log(pares);
}

console.log("---");
mapString();

function filter() {
    const numeros = [5,10,15,20];
    console.log(numeros);

    const mayoresQue10 = numeros.filter(n => n > 10);
    console.log(mayoresQue10);
}

console.log("---");
filter();

function reduce() {
    const numeros = [1,2,3,4];
    console.log(numeros);

    const suma = numeros.reduce((acumulador, n) => 
        acumulador + n,0
    );
    console.log(suma)
}

console.log("---");
reduce();

function forEach() {
    const nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];
    console.log(nombres);

    nombres.forEach(name => console.log("Hola " + name));
}

console.log("---");
forEach();

function objeto() {
    let persona = {
        nombre: "Kevin",
        edad: 21,
        ciudad: "Tepic",
        imprimirNombre: function() {
            console.log("Nombre: " + this.nombre);
        }
    }

    console.log(persona);

    persona.carrera = "ISC";
    console.log(persona);

    delete persona.ciudad;
    console.log(persona);

    persona.imprimirNombre();
}

console.log("---");
objeto();