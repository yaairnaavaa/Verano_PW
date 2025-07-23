function calificacion(){
    let calificacion = parseInt(prompt("Ingresa tu calificación: (0-100)"));
    console.log("Calificacion: " + calificacion);

    if(calificacion <70){
        console.log("Reprobado por wey");
    }else if(calificacion <80){
        console.log("Suficiente pero te falta");
    }else if(calificacion<90){
        console.log("Notable");
    }else{
        console.log("Excelente pa");
    }
}

//calificacion();

function diaSemana(){
    let dia = prompt("Ingrese día").toLowerCase();
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
        case  "viernes":
            console.log(5);
            break;   
        case "sabado":
            console.log(6);
            break;       
        case "domingo":
            console.log(7);
            break;
            
        default:
            console.log("Dia Invalido");   
    }
}
//diaSemana();

function tablaMultiplicar(n){
    for(let i = 1; i <= 10; i++){
        console.log(`${n} X ${i} = ${n*1}`);

    }
}
//tablaMultiplicar(7);

function saludar(){
    let nombres = ["Ana", "Luis", "Carlos","Marta","Pedro"];
    console.log(nombres);

    for(let i= 0; i<nombres.length; i++){
        console.log(`Hola, ${nombres[i]}`);
    }
}

//saludar();

function map(){
    const numeros = [1,2,3,4,5];
    console.log(numeros);
    const dobles = numeros.map(n => n*2);
    console.log(dobles);
}

//map();

function filter(){
    const numeros = [5,10,15,20];
    const mayoresQue10 = numeros.filter(n => n > 10);
    console.log(mayoresQue10);
}


function reduce(){
    const numeros = [1,2,3,4];
    console.log(numeros);
    const suma = numeros.reduce((acumulador, n) => {
        (acumulador+n),0
    });
    console.log(suma);
}
//reduce();

function objeto(){
    let persona = {
        nombre: "Daniel",
        edad: 20,
        ciudad: "Tepic"
    }
    console.log(persona);

    persona.carrera = "ISC";
    console.log(persona);

    delete persona.ciudad;
    console.log(persona);

}