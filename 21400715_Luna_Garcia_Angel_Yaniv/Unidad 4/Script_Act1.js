var mensaje1="Mensaje 1";
var mensaje2="Mensaje 2";

var nombre1 = "Yair";
console.log(nombre1);
nombre1 = "Yair Mod";
console.log(nombre1)

let nombre2 = "Irving";
console.log(nombre2);
nombre2 = "Irving Mod";
console.log(nombre2);

if(true){
    console.log(mensaje1)
    console.log(mensaje2)
}

function Saludo1(){
    console.log("Hola, saludo2")
}

const saludo2 = function() {
    console.log("Hola, Segundo Saludo");
}
Saludo1();      //Solo se pueden ejecutar tras la incialización de las funciones respectivas
saludo2();

const suma = (a,b) => {
    let s = a + b;
    console.log("suma "+5);

}

suma(5,2)