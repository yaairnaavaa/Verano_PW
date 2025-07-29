
//DECLARACION DE VARIABLES

var nombre1 = "Luna"; //var permite estar cambiando el valor de la variable y volver a declararla
console.log(nombre1);
nombre1 = "Luna Mod";
console.log(nombre1);

let nombre2 = "Fernando"; //asigna un valor pero no se puede volver a declar
console.log(nombre2);
nombre2 = "fernando Mod";
console.log(nombre2)

if(true){
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}

function saludo1(nombre){
    console.log("Hola, "+nombre)
}

const saludo2 = function(nombre){
    console.log("Hola, "+nombre)
}

saludo1("Brayan");
saludo2("Fernando");

const suma = (a,b) =>{
    let s = a+b;
    console.log("suma: "+s);
}

suma(5,2);

//CLASE 17 JULIO
let numero = prompt("ingresa un numero: "); //te pide escribir
let resultado = parseInt(numero)+5;
alert("resultado: "+resultado); //regresa lo qu eescribimos

let numeroFlotante="2.5";
console.log(numeroFlotante);
console.log(parseFloat(numeroFlotante));


//programa
function calificacion(){
   let calificacion = parseInt(prompt("ingresa tu calificacion (0-100): "));
console.log(calificacion);
if(calificacion < 70){
    console.log("reprobado");
}else if (calificacion < 80){
    console.log("suficiente");
}else if (calificacion < 90){
    console.log("notable");
}else{
    console.log("excelente");
} 
}
calificacion();


function diaSemana(){
    let dia = prompt("ingresa dia:").toLowerCase();
    switch(dia){
        case "el dia es lunes":
            console.log(1);
            break;
        case "el dia es martes":
            console.log(2);
            break;
        case "el dia es miercoles":
            console.log(3);
            break;
        case "el dia es jueves":
            console.log(4);
            break;
        case "el dia es viernes":
            console.log(5);
            break;
        case "el dia es sabado":
            console.log(6);
            break;
        case "el dia es domingo":
            console.log(7);
            break;
        default:
            console.log("dia invalido");
    } 
}
diaSemana();


//clase 21/07/2025

function tablaMultiplicar(n){
    for(let i=1; 1<=10; i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
tablaMultiplicar(7);

function saludar(){
    let nombre =["Gretchel","Brayan","Elma","Sergio","Dani","Carlos"];
    console.log(nombre);

    for(let i=0; i<nombre.length; i++){
        console.log(`Hola, ${nombre[i]}`);
    }
}
saludar();

function map(){
    const numeros = [1,2,3,4,5];
    console.log(numeros);
    const dobles = numeros.map(n => n*2);
    console.log(dobles);
}
map();

function filter(){
    const numeros = [5,10,15,20];
    console.log(numeros);
    const mayoresQue10 = numeros.filter(n => n > 10);
    console.log(mayoresQue10);
}
filter();

function reduce(){
    const numeros = [1,2,3,4];
    console.log(numeros);
    const suma = numeros.reduce((acumulador, n) =>
        (acumulador+n),0
    );
    console.log(suma);
}
reduce();

function forEach(){
    const nombres = ["Gretchel","Brayan","Elma","Sergio","Dani","Carlos"];
    console.log(nombres);
    nombres.forEach(name => console.log("Hola "+name));
}
forEach();

function objeto(){
    let persona = {
        nombre: "Brayan",
        edad: "21",
        ciudad: "Tepic",
        imprimeNombre: function(){
            console.log("nombre: "+this.nombre);
        }
    }
    console.log(persona);
    persona.carrera = "ISC";
    console.log(persona);
    delete persona.ciudad;
    console.log(persona);
    persona.imprimeNombre();
}
objeto();
