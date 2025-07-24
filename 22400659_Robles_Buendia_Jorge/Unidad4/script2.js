/*let nombre =prompt("ingresa tu nombre");
console.log("nombre"+nombre);


alert("Nombre "+ nombre)*/

/*
let numero =prompt("ingresa tu numero");
let resultado =parseInt(numero)+5;
alert("resultado "+ resultado)

let nuemeroflot = "12.4";
console.log(parseFloat(nuemeroflot))*/





/*

function calificacion(){
    let calificacion = parseInt(prompt("Ingresa tu caluficacion de 0 a 100"))

    if(calificacion>=70){
        console.log("si paso");
    }else{
        console.log("NOOO paso");

    }
    console.log(calificacion);

}

calificacion();  */
function diaSemana(){
    let dia = prompt("ingrese dia").toLowerCase();
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
        case "juevez":
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
        default:
            console.log("invalido")
    }
}



function tablaMultiplicar (n){
    for (let index = i; index <=10; index++) {
         console.log(`${n} x ${i} = ${n*i}`);
        
    }
}


function saludar(){
    let nombres = ["ana","luis","manuel"];
    for (let index = 0; index < nombres.length; index++) {
        document.writeln("holaa  "+nombres[index]);
        
    }
}

function map(){
    let numero=[1,2,3,4,5,6];
    document.writeln(numero)
    const dobles=numero.map(n => n*2);
    document.writeln(dobles)
}

function filtrer(){
    const numeros=[1,2,3,4,5,6,50,546,78,15,49];
    console.log(numero)
    const mayoresQue=numeros.filter(n =>n>10);
    console.log(mayoresQue)
}

function reduce(){
    const numeros=[1,2,3,4,5,6,50,546,78,15,49];
    console.log(numero)
    const suma=numeros.reduce((acumulador, n)=>{
         acumulador+n,0
    } );
    console.log(suma)
}

function foreach(){
    let nombres = ["ana","luis","manuel"];
    console.log(nombre)
    nombres.forEach(name =>"holaa "+name);
}


function objeto(){
    let persona = {
        nombre:"jorge",
        edad: 20,
        ciudad:"tepic",

        imprimirNonbre: function(){
            console.log("nombre "+this.nombre)
        }
    }
    console.log(objeto);
    persona.carrera="ISC"
    console.log (persona)

    delete persona.ciudad;
}









