/*--------------- Actividades ----------------*/

//diaSemana();
//calificaion();
//actividad1();
//actividad2()
//actividad3()
//actividad4()
//actividad5()


/* ------------------------------------------ */

function calificaion() {

    let calificiacion = parseInt(prompt("Ingresa tu calificaion (0-100)"))
    console.log("Calificacion: " + calificiacion)


    if (calificiacion < 70) {
        console.log("reprobado")
    } else if (calificiacion < 80) {
        console.log("Suficiente")
    } else if (calificiacion < 90) {
        console.log("Notable")
    } else if (calificiacion < 100) {
        console.log("Muy bien")
    } else {
        console.log("perfecto")
    }
}



function diaSemana() {
    let dia = prompt("Ingresa dia".toLowerCase);
    switch (dia) {
        case "Lunes":
            console.log(1);
            break;
        case "martes":
            console.log(2)
            break;
        case "miercoles":
            console.log(3)
            break;
        case "jueves":
            console.log(4)
            break;
        case "viernes":
            console.log(5)
            break;
        case "sabado":
            console.log(6)
            break;
        case "domingo":
            console.log(7)
            break;
        default:
            console.log("dia invalido")
    }
}


function actividad1() {
    let num1 = Math.floor(Math.random() * 100)
    let num2 = Math.floor(Math.random() * 100)

    console.log(num1)
    console.log(num2)

    if (num1 > num2) {
        console.log(num1 + " es mayor a " + num2)
    } else if (num1 < num2) {
        console.log(num2 + " es mayor a " + num1)
    } else {
        console.log("Son iguales")
    }

}




function actividad2() {
    let ventas;

    do {
        ventas = prompt("Introduce el total de ventas (entre $5000 y $30000):");
        ventas = parseFloat(ventas);
    } while (isNaN(ventas) || ventas < 5000 || ventas > 30000);

    if (ventas < 10000) {
        console.log("tu comision sera de " + ventas * .1);
    } else {
        console.log("tu comision sera de " + ventas * .16)
    }
}


function actividad3() {
    let numR = Math.floor(Math.random() * 10 + 1)

    for (var i = 1; i < 11; i++) {
        console.log(numR + "*" + i + " =" + numR * i)
    }
}


function actividad4() {
    let matriz = [];
    let impar = 0;
    let par = 0;

    for (let i = 0; i < 10; i++) {
        let numero;
        do {
            numero = parseInt(prompt("Introduce un número entre el 1-100"));
        } while (isNaN(numero) || numero < 1 || numero > 100);

        matriz.push(numero);
    }

    matriz.forEach(num => {
        if (num % 2 === 0) {
            par++;
        } else {
            impar++;
        }
    });

    console.log("son " + par + " pares")
    console.log("son " + impar + " impares")

}



function actividad5() {
    for (let i = 1; i > 0; i++) {
        let numero = Math.floor(Math.random() * 6);
        console.log(numero);
        if (numero === 0) {
            break;
        }
    }
}




function potencia(base, pow) {
    let resul = 1;
    for (i = 1; i <= pow; i++) {
        resul = (resul * base);
    }
    return resul;
}

//console.log(potencia(4,2))



function cienNumeros() {
    let array = []
    for (i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * 100)

    }
    console.log(array.toString() + " --- el mayor es " + Math.max(...array));

}

//cienNumeros()

function objectCine() {
    let pelicula = {
        titulo: "Un peso",
        director: "benito antonio martinez ocasio",
        lazamiento: 2019,
        protagonista: "José Álvaro Osorio Balvin",
        Taquilla: 707963,
    };
    console.log(pelicula);
    delete pelicula.protagonista;
    console.log(pelicula);
    pelicula.productora = "MetroBoomin";
    console.log(pelicula);
}

//objectCine()


function simuVentas() {
    let ventas = [];
    let ingreso;

    while ((ingreso = prompt("Ingresa Vendedor, producto, cantidad, precio todo separado en comas (o escribe 'salir' para terminar):")) !== 'salir') {
        let datos = ingreso.split(',');
        ventas.push({
            vendedor: datos[0].trim(),
            producto: datos[1].trim(),
            cantidad: parseInt(datos[2].trim()),
            precio: parseFloat(datos[3].trim())
        });
    }

    let maxIngreso = ventas.reduce((max, venta) => {
        let ingresoActual = venta.cantidad * venta.precio;
        return ingresoActual > max ? ingresoActual : max;
    }, 0);
   

    
    console.log("El ingreso  es: $" + maxIngreso);

}


simuVentas()
