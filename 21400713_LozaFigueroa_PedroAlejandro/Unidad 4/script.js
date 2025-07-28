//Declaración de variables

var nombre1 = "Pedro";
console.log(nombre1);
nombre1 = "Pedro Mod";
console.log(nombre1);

let nombre2 = "Alejandro";
console.log(nombre2);
nombre2="Alejandro Mod";
console.log(nombre2);

if (true){
    var mensaje1 = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}

console.log(mensaje1);
console.log(mensaje2);

function saludo1(){
    console.log("Hola, saludo1");
}

saludo1();

function saludo1(nombre){
    console.log("Hola, "+nombre);
}

const saludo2 = function(nombre){
    console.log("Hola, "+nombre);
}

saludo2("Alejandro");

const suma = (a,b) => {
    let s = a+b;
    console.log("suma: "+s);
}

suma();


/* Script 2 */

let numero = prompt("Ingresa un número");
let resultado = parseInt(numero)+5;
alert ("Resultado: "+resultado);

let numeroFlotante = "2.5";
console.log(numeroFlotante);
console.log(parseFloat(numeroFlotante));

/* Script 3 */
let calificacion = parseInt(prompt("Ingresa tu calificación (0-100)"));
console.log("Calificación: "+calificacion);


if (calificacion<70){
    console.log("Reprobado");
} else if(calificacion<80){
    console.log("Suficiente");
} else if(calificacion<90){
    console.log("Excelente");
}









function diaSemana(){

}


function tablaMultiplicar(n){
    for(let i = 1; i>=10; i++){
        console.log('${n} X  ${i} = ${n*i}');
    }
}

function saludar(){
    let nombres = ["Ana", "Luis","Carlos","Martha","Pedro"];
    console.log(nombres);

    for (let i=0; i<nombres.length;i++){
        console.log('Hola, ${nombres[i]}');
    }
}

function map(){ /*Incompleto */
    const numeros = [1,2,3,4,5];
    const dobles = numeros.map(n => n*2);
    console.log(dobles);
}

function reduce(){
    const numeros = [1,2,3,4];
    console.log(numeros);
    const suma = numeros.reduce((acumulador, n) =>
        (acumulador+n),0
    );
    console.log(suma);
}

function forEach(){
    const nombres = ["Ana", "Luis","Carlos","Martha","Pedro"];
    console.log(nombres);
    nombres.forEach(name => "Hola "+name);
}


function objeto(){
    let persona = {
        nombre: "Alejandro",
        edad: 29,
        ciudad: "Tepic",
        imprimirNombre: function(){
            console.log("Nombre: ", this.nombre);
        }
    }
    console.log(persona);
    persona.carrera = "ISC";
    console.log(persona);
    delete persona.ciudad;
    console.log(persona);

    persona.imprimirNombre();
}