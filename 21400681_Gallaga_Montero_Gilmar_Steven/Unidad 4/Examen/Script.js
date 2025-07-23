//Crea un programa que pida al usuario un numero del 1 al 10 mediante prompt()
//y muestre su tabla de multiplicar del 1 al 10 en consola.

function Ejercicio1(){
    var Numero = parseInt(prompt("Ingresa un numero: "));

    if (Numero >= 1 || 10 <= Numero){
      console.log(`Tabla de multiplicar del ${Numero}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${Numero} x ${i} = ${Numero * i}`);
      }
    }else {
        console.log("Algo estuvo mal, vuelve a intentarlo");
    }


    console.log("");
    console.log("");
}
Ejercicio1();


//Pide al Usuario que ingrese 5 Calificaciones 
//(Usando prompt() dentro de un ciclo),
//guardalas en un arreglo y al final muestra:
//1.- Todas las calificaciones
//2.- El promedio
//3.- Si el estudiante aprobo (>=6) o no

function Ejercicio2() {
    let Calificaciones = [];
    let suma = 0;

    for (let i = 1; i <= 5; i++) {
        let Calificacion = parseFloat(prompt("Ingresa la calificación número " + i + ":"));
        Calificaciones.push(Calificacion);
        suma += Calificacion;
    }

    console.log("Todas las calificaciones:", Calificaciones);

    let Promedio = suma / 5;
    console.log("Promedio:", Promedio);

    if (Promedio >= 6) {
        console.log("¡Aprobó el curso");
    } else {
        console.log("Reprobó el curso");
    }


    console.log("");
    console.log("");
}

Ejercicio2();











//Genera 20 Numeros aleatorios entre 1 y 100, guardalos en un arreglo
//muestra cuantos son pares y cuantos son impares
function Ejercicio3() {
    let numeros = [];
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 20; i++) {
        let num = Math.floor(Math.random() * 100) + 1;
        numeros.push(num);
        
        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log("Números generados:", numeros);
    console.log("Cantidad de números pares:", pares);
    console.log("Cantidad de números impares:", impares);

    console.log("");
    console.log("");
}
Ejercicio3()









//Registro Empleados
//Crea un programa que permita ingresar informacion de varios empleados 
//Usando prompt() (Preguntar al usuario si desea guardar otro empleado
//al terminar un registro) y guarde cada emepleado como un objeto con 
//propiedades: nombre, edad y salario
//1.- Al finalizar, muestra cuantos empleados se registraron.
//2.- Calcula el salario promedio
//3.- Muestra los nombres de los empleados mayores de 30 años
function Ejercicio4() {
    let empleados = [];
    let continuar = true;

    while (continuar) {
        let nombreEmepleado = prompt("Ingresa el nombre del empleado: ");
        let edadEmpleado = parseInt(prompt("Ingresa la edad del empleado: "));
        let salarioEmpleado = parseFloat(prompt("Ingresa el salario del empleado: "));

        let empleado = {
            nombre: nombreEmepleado,
            edad: edadEmpleado,
            salario: salarioEmpleado
        };

        empleados.push(empleado);
        let respuesta = prompt ("Desea Agregar Otro Empleado (si/no)").toLowerCase();
        continuar = (respuesta === "sí" || respuesta === "si");
    }

    console.log("Número de empleados registrados:", empleados.length);

    let sumaSalarios = empleados.reduce((total, empleados) => total + empleados.salario, 0);
    let salarioPromedio = sumaSalarios / empleados.length;
    console.log("Salario promedio:", salarioPromedio);

    let mayores30 = empleados.filter(empleados => empleados.edad > 30).map(empleados => empleados.nombre);
    console.log("Empleados mayores de 30 años:", mayores30);

    console.log("");
    console.log("");
}
Ejercicio4();






//Simula un sistema que calcule la comision de ventas pide al usuario el
//nombre del vendedor, monto de venta y calcula su comision:
//si vendio menos de $10,000 = 10%
//si vendio $10,000 o mas = 15%
//1.- Guarda cada venta como un objeto en un arreglo.
//2.- Permite ingresar multiples ventas (hasta que se ingrese "salir").
//3.- Al final, muestra el total de ventas y la comision total pagada.
function Ejercicio5() {
    let ventas = [];

    while (true) {
        let nombre = prompt("Ingresa el nombre del vendedor (o escribe 'salir' para terminar):");
        if (nombre.toLowerCase() === "salir") break;

        let monto = parseFloat(prompt("Ingresa el monto de la venta:"));

        let comision = monto < 10000 ? monto * 0.10 : monto * 0.15;

        let venta = {
            vendedor: nombre,
            monto: monto,
            comision: comision
        };

        ventas.push(venta);
    }

    console.log("Número total de ventas registradas:", ventas.length);

    let totalVentas = ventas.reduce((total, v) => total + v.monto, 0);
    let totalComisiones = ventas.reduce((total, v) => total + v.comision, 0);

    console.log("Monto total de ventas: $" + totalVentas.toFixed(2));
    console.log("Comisión total pagada: $" + totalComisiones.toFixed(2));
}

Ejercicio5();
