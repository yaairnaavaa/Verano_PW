function calificacion() {
    let calificacion = parseInt(prompt("Ingrese su calificacion (0-100)"));
    console.log("Calificacion: " + calificacion);

    if (calificacion < 70) {
        console.log("Vuelve a intentar, el siguiente semestre <3");
    } else if (calificacion < 80) {
        console.log("No estuvo tan mal si pasaste");
    } else if (calificacion < 90) {
        console.log("Ya casi te acercas a las grandes ligas");
    } else {
        console.log("Golazooooooooooo, Maradona a tu lado queda pndejo");
    }
}

function diaSemana() {
    let dia = prompt("Ingrese el nombre de un dia de la semana").toLowerCase();
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
            console.log("No es un dia de la semana valido");
    }
}

function TablaMultiplicar() {
  for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
  }
}

function saludar() {
    let nombres = ["Jose", "Maria", "Pedro", "Ana"];
    for (let i = 0; i < nombres.length; i++) {
        console.log(`Hola, ${nombres[i]}`);
    }
}

function map(){
    let nombres = ["Jose", "Maria", "Pedro", "Ana"];
    const saludos = nombres.map(nombre => {
        return `Hola, ${nombre}`;
    });
    console.log(saludos);
}

function filter() {
    let numeros = [5,10,15,20,25,30];
    const mayoresQue10 = numeros.filter(num => num > 10);
    console.log(mayoresQue10);
}

function reduce() {
    let numeros = [5,10,15,20,25,30];
    console.log(numeros);
    const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
    console.log(suma);
}

function forEach() {
    let nombres = ["Jose", "Maria", "Pedro", "Ana"];
    console.log(nombres);
    nombres.forEach(name => {
        console.log(`Hola, ${name}`);
    });
}

function objeto(){
    let persona = {
        nombre: "Jose",
        edad: 23,
        profesion: "Desarrollador",
        ciudad: "Tepic",
        pais: "Mexico"
    };
    console.log(persona);
}

function menu() {
    let opcion;
    do {
        opcion = prompt(
            "Menu:\n1. Calificacion\n2. Dia de la semana\n3. Salir\nIngrese una opcion:"
        );
        switch (opcion) {
            case "1":
                calificacion();
                break;
            case "2":
                diaSemana();
                break;
            case "3":
                console.log("Saliendo...");
                break;
            default:
                console.log("Opcion no valida");
        }
    } while (opcion !== "3");
}

menu();