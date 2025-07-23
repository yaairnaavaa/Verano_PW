function calificacion(){
    let calificacion = parseInt(prompt("Ingrese su calificacion (0-100)"));
    console.log("Calificacion: "+calificacion);

    if(calificacion < 70){
        console.log("Vuelve a intentar, el siguiente semestre <3")
    }else if(calificacion < 80){
        console.log("No estuvo tan mal si pasaste")
    }else if(calificacion < 90){
        console.log("Ya casi te acercas a las grandes ligas")
    }else{
        console.log("Golazooooooooooo, Maradona a tu lado queda pndejo")
    }
}
//calificacion();

function diaSemana(){
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
        default:
            console.log("Día invalido")    
    }
}

//diaSemana();

function tablaMultiplicar(n){
    for(let i = 1; i<=10; i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
//tablaMultiplicar(7)

function saludar(){
    let nombres = ["Ana","Luis","Carlos","Marta","Pedro"]
    console.log(nombres)

    for(let i=0; i< nombres.length;i++){
        console.log(`Hola, ${nombres[i]}`)
    }
}
//saludar()

/*function map(){
    const numeros = [1,2,3,4,5]
    console.log(numeros);
    const dobles = numeros.map(n => n*2);
    console.log(dobles);
}*/
/*function map(){
    const numeros = [1,2,3,4,5]
    console.log(numeros);
    const pares = numeros.map(n => {
        if(n%2 == 0){
            return "Par";
        }
        return "Impar";
    });
    console.log(pares);
}*/

function map(){
    const nombres = ["Ana","Luis","Carlos","Marta","Pedro"]
    console.log(nombres);
    const pares = nombres.map(name => {
       return name+" algo"
    });       
}
//map();

function filter(){
    const numeros = [5,10,15,20]
    console.log(numeros)
    const mayoresQue10 = numeros.filter(n => n > 10);
    console.log(mayoresQue10)
}
//filter();

function reduce(){
    const numeros = [1,2,3,4]
    console.log(numeros)
    const suma = numeros.reduce((acumulador, n) => (acumulador+n),0)
    console.log(suma)
}
//reduce()

function forEach(){
    const nombres = ["Ana","Luis","Carlos","Marta","Pedro"]
    console.log(nombres)
    nombres.forEach(name => console.log ("Hola "+name))
}
//forEach()

function objeto(){
    let persona = {
        nombre: "Yair",
        edad: 29,
        ciudad: "Tepic",
        imprimirNombre: function(){
            console.log("Nombre: "+ this.nombre)
        }
    }
    console.log(persona)
    persona.carrera = "ISC"
    console.log(persona)

    delete persona.ciudad
    console.log(persona)
    persona.imprimirNombre();
}
objeto()