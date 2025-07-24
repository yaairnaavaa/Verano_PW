console.log("Hola Mundo!");

//Declaracion de Variables

var nombre1 = "Gilmar Steven Gallaga Montero";
console.log(nombre1);
nombre1 = "Steven Mod";
console.log(nombre1);


let nombre2 = "Gilmar Steven Gallaga Montero";
console.log(nombre2);
nombre2 = "Gilmar Mod";
console.log(nombre2);


if(true){
    var mensaje1 = "Mensaje1";
    let mensaje2 = "Mensaje2";
    console.log(mensaje1);
    console.log(mensaje2);
}
console.log(mensaje1);


function saludo1(nombre1){
    console.log("Hola, "+nombre1);
}

const saludo2 = function(nombre2) {
    console.log("Hola, "+nombre2);
}

saludo1("Stevenb");
saludo2("Gilmarsds");


const suma = (a,b) => {
    let s = a+b;
    console.log("suma: "+s);
}

suma(5,2);


let numero = prompt("Ingresa un numero");
let Resultado = parseInt(numero)+5;
alert("Resultado: " + Resultado);

let numeroFlotante = "2.5";
console.log(numeroFlotante);
console.log(parseFloat(numeroFlotante));

function calificacion(){

    let calificacion = parseInt(prompt("Ingresa tu calificacion (0-100)"));
    console.log("Calificacion: " + calificacion);

    if(calificacion < 70){
        console.log("Reprobado");
    } else if (calificacion < 80) {
        console.log("Suficiente");
    } else if (calificacion < 90) {
        console.log("Notable");
    } else {
        console.log("Excelente");
    }

} 
calificacion();


function diaSemana(){
    //let dia = parseInt(prompt("Ingrese dia"));
    let dia = prompt("Ingrese dia").toLowerCase();
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
        case "sabados":
           console.log(6);
        break;
        case "domingos":
           console.log(7);
        break;
        default: 
            console.log("Dia Invalido");
    }
}

diaSemana();

function TablaMultiplicar(n){
    for(let i = 1; i <= 10; i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
TablaMultiplicar();

function Saludar(){
    let nombres = ["Ana", "Luis", "Carlos","Marta", "Pedro"];
    console.log(nombres);

    for(let i = 0; i < nombres.length; i++){
        console.log(`Hola, ${nombres[i]}`);
    }
}
Saludar();



function map(){
    const Numeros = [1,2,3,4,5];
    console.log(Numeros);
    const Dobles = Numeros.map(n => n*2);
    console.log(Dobles);
}
map();


function mapS(){
    const Nomb = ["Ana", "Luis", "Carlos","Marta", "Pedro"];
    console.log(Nomb);
    const Dobles = Nomb.map(n => {
        return n+"Algo"
    });
    console.log(Dobles);
}
mapS();


function filter(){
    const numeros = [5,10,15,20,25];
    const mayoresQue10 = numeros.filter(n => n > 10);
    console.log(mayoresQue10);
};
filter();

function reduce(){
    const numeros =  [1,2,3,4];
    console.log(numeros);
    const suma = numeros.reduce((acumulador, n) => 
        (acumulador+n),0
    );
    console.log(suma);
}
reduce();


function forEach(){
    const nombres = ["Ana", "Luis", "Carlos","Marta", "Pedro"];
    console.log(nombres);
    nombres.forEach(name => console.log("Hola " + name));
}
forEach();


function Objeto(){
    let Persona = {
        nombres: "Gilmar",
        edad: 21,
        ciudad: "Tepic",
        ImprimirNombre: function(){
            console.log("Nombre: ", this.nombres);
        }
    }
    console.log(Persona);
    Persona.Carrera = "ISC";
    console.log(Persona);
    
    delete Persona.ciudad;
    console.log(Persona);

    Persona.ImprimirNombre();
}
Objeto();