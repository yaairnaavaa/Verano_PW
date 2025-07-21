//Declaracion de variables

var nombre1 = "Jesus";
console.log(nombre1);
nombre1 = "Jesus Mod";
console.log(nombre1);

let nombre2 = "Antonio";
console.log(nombre2);
nombre2 = "Antonio Mod";
console.log(nombre2);

if(true){
var mensaje1="Mensaje 1";
let mensaje2="Mensaje 2";
console.log(mensaje1);
console.log(mensaje2);
}
function saludo1(nombre){
    console.log("Hola," + nombre);
}

const saludo2 = function(nombre){
console.log("Hola,"+ nombre);
}

saludo1("Jesus");
saludo2("Antonio");

const suma = (a,b) => {
   // let resultado = a + b;
   // console.log("suma: " + resultado);
    console.log("suma: " + (a + b));
}


suma(5,8);

