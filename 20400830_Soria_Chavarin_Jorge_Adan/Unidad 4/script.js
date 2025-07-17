console.log("Hola mundo");

//Declaracion de variables
var nombre = "Adan";
console.log(nombre);
nombre = "Adan Soria";
console.log(nombre);

let nombre2 = "Jorge";
console.log(nombre2);
nombre2 = "Jorge Adan";
console.log(nombre2);

if(true){
    var mensaje = "Mensaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje);
    console.log(mensaje2);
}


    function saludo1(){
        console.log("Hola "+nombre)

    }

    const saludo2 = function() {
        console.log("Hola "+nombre2)

    }

    saludo1("Adan");
    saludo2("Jorge");

    const suma = (a,b)  => {
        let s = a+b;
console.log("suma: "+s);

    }
    suma(5,2);