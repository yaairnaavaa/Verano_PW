//declaración de variables
var nombre = "Bayron";
console.log(nombre);

let nombre2 = "Arciniega";
console.log(nombre2);   

function saludo1() {
    console.log("Hola, saludo 1");
}

const saludo2 = function() {
    console.log("Hola, saludo 2");
}
saludo1();
saludo2();  

const suma = (a, b) => {
    let s = a + b;
    console.log("La suma es: " + s);
}
suma(5, 10 );

