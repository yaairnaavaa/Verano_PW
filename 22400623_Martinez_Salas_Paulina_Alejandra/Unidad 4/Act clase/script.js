function calificacion() {
    let calificacion = parseInt(prompt("Ingresa tu calificación: (0-100)"));
    console.log("Calificación: " + calificacion);
    if (calificacion < 70) {
        console.log("Reprobado por sonso");
    } else if (calificacion < 80) {
        console.log("Suficiente, pero sigues menso");
    } else if (calificacion < 90) {
        console.log("Notable, pero igual estás menso");
    } else {
        console.log("Excelente, ya no estás menso");
    }

}

//calificacion();

function diaSemana() {
    let dia = prompt("Ingrese día ").toLowerCase();
    switch (dia) {
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
            console.log("Día inválido");

    }
}

//diaSemana();

function tablaMultiplicar(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`{n} X ${i}= ${n * i}`);
    }
}

//tablaMultiplicar(5);

function saludar() {
    let nombres = ["Ana", "Luis", "Pedro", "María", "Pedro"];
    console.log(nombres);
    for (let i = 0; i < nombres.length; i++) {
        console.log(`Hola ${nombres[i]}`);
    }
}

//saludar();

function map() {
    const numeros = [1, 2, 3, 4, 5];
    console.log(numeros);
    const pares = numeros.map(n => {
        if (n % 2 === 0) {
            return "Par";
        }
        return "Impar";
    });
    console.log(pares);
}

function filter() {
    const numeros = [5,10,15,20];
    console.log(numeros);
    const mayoresQue10 = numeros.filter(n => n > 10);
    console.log(mayoresQue10);
} 


function reduce() {
    const numeros = [1, 2, 3, 4,];
    console.log(numeros);
    const suma = numeros.reduce((acumulador, n)=>
        acumulador + n, 0 );
    console.log(suma);
}

//reduce();


function forEach() {
    const nombres = ["Ana", "Luis", "Pedro", "María","Carlos"];
    console.log(nombres);
    nombres.forEach(name  => console.log("Hola" + name));
}

//forEach();

function objeto(){
    let persona = {
        nombre: "Paulina",
        edad: 21,
        ciudad: "Tepic",
        imprimirNombre: function() {
            console.log("Nombre: " + this.nombre);
        },
    }
    console.log(persona);
    persona.carrera="ISC";
    console.log(persona);
    delete persona.ciudad;
    console.log(persona);

    persona.imprimirNombre();
}

objeto();