// EJERCICIO 1: Tabla de multiplicar
//Crea un programa que pida al usuario un número del
//1 al 10 mediante prompt() y muestre su tabla de
//multiplicar del 1 al 10 en consola.
function ejercicio1() {
    let num;

    do {
        num = parseInt(prompt("Ingresa un numero del 1 al 10, para crear su tabla de multiplicar"));
    } while (num < 1 || num > 10);

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`)
    }
}

// EJERCICIO 2: Promedio de calificaciones
//Pide al usuario que ingrese 5 calificaciones
//(usando prompt() dentro de un ciclo), guardalas en
//un arreglo y al final muestra:
// 1.- todas las calificaciones
// 2.- el promedio
// 3.- si el estudiante aprobó (>=6) o no
function ejercicio2() {
    let calificaciones = [];
    let suma = 0;

    for (let i = 0; i < 5; i++) {
        do {
            calificaciones[i] = parseInt(prompt(`Ingresa la calificación #${i + 1} (1 al 10)`));
        } while (calificaciones < 1 || calificaciones > 10);

        suma += calificaciones[i];
    }

    console.log(`Las calificaciones ingresadas fueron: ${calificaciones}`);
    let promedio = suma / 5;
    console.log(`El promedio es: ${promedio}`);

    if (promedio >= 6) {
        console.log("Por lo tanto APROBO");
    } else {
        console.log("Por lo tanto NO APROBO");
    }
}

// EJERCICIO 3: Contar pares e impares
//Genera 20 numeros aleatorios entre 1 y 100,
//guardalos en un arreglo y muestra cuantos son pares y
//cuantos impares
function ejercicio3() {
    let random = [];
    let par = 0;
    let impar = 0;
    let max = 100;
    let min = 1;

    for (let i = 0; i < 20; i++) {
        random[i] = Math.floor(Math.random() * (max - min + 1)) + min;

        if (random[i] % 2 === 0){
            par++;
        } else {
            impar++;
        }
    }

    console.log(random);
    console.log(`Son ${par} números PAR y son ${impar} números IMPAR`);
}


// EJERCICIO 4: Registro de empleados
//Crea un programa que permita ingresar informacion de
//varios empleados usando prompt() (preguntar al usuario
//si desea guardar otro empleado al terminar el registro)
//y guarde cada empleado como un objeto con propiedades:
//nombre, edad y salario.
// 1.- al finalizar muestre cuantos empleados se
// registraron
// 2.- calcula el salario promedio
// 3.- muestra los nombres de los empleados mayores
// de 30 años
function ejercicio4() {
    let comp = "no"
    let empleados = [];
    let empleado = {
        Nombre: "",
        Edad: 0,
        Salario: 0
    };
    let i = 0; 
    let salario = 0;
    let promedio = 0;
    let mayores = [];

    do {
        empleado.Nombre = prompt(`Ingresa el nombre del empleado #${i+1}:`);
        empleado.Edad = parseInt(prompt(`Ingresa la edad del empleado #${i+1}:`));
        empleado.Salario = parseFloat(prompt(`Ingresa el salario del empleado #${i+1}:`));
        salario += empleado.Salario;

        if (empleado.Edad > 30) {
            mayores[i] = empleado.Nombre;
        }

        empleados[i] = empleado;
        i++;
        comp = prompt("desea ingresar otro usuario? (si ó no)");
    } while (comp === "si" || comp === "Si" || comp === "SI" || comp === "sI");

    console.log(`Se registraron: ${i} empleados`);
    promedio = salario / i;
    console.log(`El salario promedio es de: $${promedio}`);
    console.log(`Los emplados mayores de 30 años son: ${mayores}`);
}

// EJERCICIO 5: Calculadora de comisiones
//Simula un sistema que calcule la comision de ventas.
//Pide al usuario el nombre del vendedor, monto de venta
//y calcula su comisión:
// * Si vendio menos de $10,000 = 10%
// * Si vendio $10,000 o mas = 15%
// 1.- Guarda cada venta como un objeto en un arreglo
// 2.- permite ingresar multiples ventas (hasta ingresar "salir")
// 3.- al final muestra el total de ventas y la comision total pagada
function ejercicio5() {
    let comp = "no"
    let ventas = [];
    let venta = {
        Vendedor: "",
        MontoVenta: 0,
        Comision: 0
    };
    let i = 0; 
    let monto = 0;
    let comisiones = 0;

    do {
        venta.Vendedor = prompt(`Ingresa el nombre del empleado que realizo la venta #${i+1}:`);
        venta.MontoVenta = parseFloat(prompt(`Ingresa el monto de la venta #${i+1}:`));
        
        if (venta.MontoVenta >= 10000) {
            venta.Comision = venta.MontoVenta * 0.15;
        } else {
            venta.Comision = venta.MontoVenta * 0.10;
        }

        comisiones += venta.Comision;

        ventas[i] = venta;
        //console.log(venta);
        i++;
        comp = prompt("Desea ingresar otra venta? (si ó no)");
    } while (comp === "si" || comp === "Si" || comp === "SI" || comp === "sI");

    console.log(`Se registraron: ${i} ventas`);
    console.log(`El total de comisiones pagadas es de: $${comisiones}`);
}


//ejercicio1();
//ejercicio2();
//ejercicio3();
//ejercicio4();
//ejercicio5();