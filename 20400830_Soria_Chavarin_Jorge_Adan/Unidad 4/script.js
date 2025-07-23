/*
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

    let nombrea = prompt("Ingresa tu nombre");
    console.log("Nombre:"+nombrea)

alert("Nombre"+nombrea)

    let numero = prompt("Ingresa un numero");
    let Resultado = parseInt(numero)+5;
    alert("Resultado"+Resultado)

    let numeroFlotante = "2.5"
    console.log(numeroFlotante)
    console.log(parseFloat(numeroFlotante));
*/
 /*   
    function calificacion(){
         let calificacion = parseInt(prompt("Ingresa tu calificacion"));
    console.log("Calificacion: "+calificacion);
        if(calificacion < 70){
        console.log("Reprobado");
    } else if (calificacion < 80 ){
        console.log("sufuciente");
    } else if(calificacion < 90){
        console.log("Notable");
    }else if (calificacion < 100)
    {
        console.log("Excelente");
    }
    }

    calificacion();
*/
  /*  function diaSemana(){
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
            case "sabado":
                console.log(6);
                break;
            case "domingo":
                console.log(7);
                break;
            default :
            console.log("Dia invalido");
        }
    }
    
    diaSemana();

    */

function tablaMultiplicar(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}

function saludar(){
    let nombres = ["Ana","Luis","Carlos","Martha","Pedro"];
    console.log(nombres);

    for(let i=0;i<nombres.length;i++){
        console.log(`hola, ${nombres[i]}`);
    }
}

function map(){
    const numeros = [1,2,3,4,5];
    console.log(numeros);
    const doble = numeros.map()
    
    if(n%2 == 0){
        return "par";
    };
    return "impar";
    console.log(doble);
}
    
function filter(){
    const numero = [5,10,15,20];
    console.log(numero);
    const mayoresque10 = numero.filter(n=> n >10)
    console.log(mayoresque10);
}

function reduce(){
    const numeros = [1,2,3,4];
    console.log(numeros);
    const suma = numero.reduce((acumulador, n) =>
        (acumulador+n),0);
    console.log(suma);
}

function forEach(){
     const nombres = ["Ana","Luis","Carlos","Martha","Pedro"];
    console.log(nombres);
    nombres.forEach(name => console.log("Hola,"+name));

}

function objeto(){
    let persona = {
        nombre: "Adan",edad: 29,Ciudad:"Tepic",imprimirNombre: function(){
            console.log("Nombre:"+ this.nombre)
        }
    }
    console.log(persona);

    persona.carrera = "ISC";
    console.log(persona);
    delete persona.Ciudad;
    console.log(persona);
    persona.imprimirNombre();
}
//tablaMultiplicar(7);
//saludar();
//map();
//reduce();
//forEach();
objeto();
