function calificacion(){
    let calif = parseInt(prompt("Ingresa tu calificación (0-100)"));

    console.log(calif);

    if(calif < 70){
        console.log("Reprobaste");
    }else if(calif < 80){
        console.log("Suficiente");
    }else if(calif < 90){
        console.log("Notable");
    }else{
        console.log("Excelente");
    }    
}

function diaSemana(){
    let dia = parseInt(prompt("Ingresa el numero del dia de la semana (1-7)"));

    console.log(dia);

    switch(dia){
        case 1: console.log("Domingo"); break;

        case 2: console.log("Lunes"); break;

        case 3: console.log("Martes"); break;

        case 4: console.log("Miercoles"); break;

        case 5: console.log("Jueves"); break;

        case 6: console.log("Viernes"); break;

        case 7: console.log("Sabado"); break;

        default: console.log("Ingresar un valor valido (1-7)");
    }
}

function diaSemana2(){
    let dia = prompt("Ingresa el nombre del dia").toLowerCase();

    console.log(dia);

    switch(dia){
        case "domingo": console.log(1); break;

        case "lunes": console.log(2); break;

        case "martes": console.log(3); break;

        case "miercoles": console.log(4); break;

        case "jueves": console.log(5); break;

        case "viernes": console.log(6); break;

        case "sabado": console.log(7); break;

        default: console.log("Ingresar un nombre de dia valido");
    }
}

function ejercicio2_1(){
    let num1 = Math.floor(Math.random() * 100) + 1;

    let num2 = Math.floor(Math.random() * 100) + 1;

    console.log("Numero 1: " + num1);
    console.log("Numero 2: " + num2);

    if(num1 > num2){
        console.log("El numero 1 (" + num1 + ") es mayor que el numero 2 (" + num2 + ")");
    }else if(num2 > num1){
        console.log("El numero 2 (" + num2 + ") es mayor que el numero 1 (" + num1 + ")");
    }else{
        console.log("Ambos numeros son iguales")
    }
}

function ejercicio2_2(){
    do{
        var num = parseInt(prompt("Ingresa un valor (5,000 - 30,000"));
    }while(num < 5000 || num > 30000)

    if(num < 10000){
        let com = num * 0.1;
        console.log("La comision para este empleado sera del 10%, para un total de: " + com);
    }else{
        let com = num * 0.15;
        console.log("La comision para este empleado sera del 15%, para un total de: " + com);
    }
}

function ejercicio2_3(){
    let num = Math.floor(Math.random() * 9) + 2;
    console.log(num);

    switch(num){
        case 2: console.log("2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20"); break;

        case 3: console.log("3 | 6 | 9 | 12 | 15 | 18 | 21 | 24 | 27 | 30"); break;

        case 4: console.log("4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40"); break;

        case 5: console.log("5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50"); break;

        case 6: console.log("6 | 12 | 18 | 24 | 30 | 36 | 42 | 48 | 54 | 60"); break;

        case 7: console.log("7 | 14 | 21 | 28 | 35 | 42 | 49 | 56 | 63 | 70"); break;

        case 8: console.log("8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80"); break;

        case 9: console.log("9 | 18 | 27 | 36 | 45 | 54 | 63 | 72 | 81 | 90"); break;

        case 10: console.log("10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100"); break;
    }
}

function ejercicio2_4(){
    let pares = "";
    let impares = "";
    var num = 0;
    
    for(let i = 1; i <= 10; i++){
        num = Math.floor(Math.random() * 100) + 1;
        console.log(num);

        if((num % 2) == 0){
            pares = (pares + num + ", ");
        }else{
            impares = (impares + num + ", ");
        }
    }

    console.log("Pares: " + pares);
    console.log("Impares: " + impares);
}

function ejercicio2_5(){
    let num = 0;
    let cont = 1;

    do{
        num = Math.floor(Math.random() * 6);       
        console.log("Numero " + cont + ": " + num); 
        cont++;
    }while(num !== 0)
}

function tablaMultiplicar(n){
    for(let i = 1; i <= 10; i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}

function saludar(){
    let nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];
    console.log(nombres);

    for(let i = 0; i < nombres.length; i++){
        console.log(`Hola, ${nombres[i]}`);
    }
}

function map(){
    const numeros = [1, 2, 3, 4, 5];
    const dobles = numeros.map(n => n*2);
    const par = numeros.map(n => {
        if(n % 2 == 0){
            return "Par";
        } 
        return "Impar";
    });

    console.log(numeros);
    console.log(par);
    console.log(dobles);
}

function filter(){
    const numeros = [5, 10, 15, 20];
    const mayorque10 = numeros.filter(n => n > 10);

    console.log(numeros);
    console.log(mayorque10);
}

function reduce(){
    const numeros = [1, 2, 3, 4];
    const suma = numeros.reduce((acumulador, n) => 
        (acumulador+n), 0
    );

    console.log(numeros);
    console.log(suma);
}

function forEach(){
    let nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];
    console.log(nombres);

    let n2 = nombres.forEach(name => console.log("Hola " + name));
}

function objeto(){
    let persona = {
        nombre: "Carim",
        edad: "21",
        ciudad: "Tepic",
        imprimirNombre: function() {
            console.log("Nombre: " + this.nombre)
        }
    }

    console.log(persona);
    
    persona.carrera = "ISC";

    console.log(persona);

    delete persona.ciudad;

    console.log(persona);

    persona.imprimirNombre();
}


objeto();