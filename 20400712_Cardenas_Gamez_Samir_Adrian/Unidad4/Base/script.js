console.log("hola mundo");

//Declaracion de variables

var nombre1= "Samir";
console.log(nombre1);
nombre1= "Samir mod";
console.log(nombre1);
let nombre2 ="Adrian";
console.log(nombre2);
nombre2 ="Adrian mod";
console.log(nombre2);

if(true){
    var mensaje1 ="Mensaje1";
let mensaje2= "mensaje 2";
console.log(mensaje1);
console.log(mensaje2);
}
    console.log(mensaje1);

function saludo1(nombre){
console.log("Hola, "+nombre)
}
const saludo2= function(nombre){
console.log("Hola,"+ nombre)
}
const suma =(a,b) => {
    let resultado =a+b;
    console.log("suma:"+ resultado )
}


saludo1("Thanos");
saludo2("Jag har ingen hemforsakring");
suma(5, 2);

let nombree =prompt("Ingresa tu nombre");
console.log("Hola +" +nombree);
alert("nombre:"+nombree);

let numero =prompt("Ingresa un numero");
let resultado = parseInt(numero) +5
alert("Resultado:"+resultado);
console.log(parseFloat(5.5))