/*
Examen U4 - Amezcua Kevin Elias.

Ejercicio 1: Tabla de multiplicar.

Crea un programa que pida al usuario un número del 1 al 10
mediante prompt() y muestre su tabla de multiplicar del 1
al 10 en consola.
*/

function ejercicio1() {
    let num;

    do {
        num = prompt("Ingrese un número (1-10): ");
    } while(num < 1 || num > 10);

    for(let i=1; i<=10; i++) {
        console.log(num + " X " + i + " = " + (i*num))
    }
}

/*
Ejercicio 2.

Pide al usuario que ingrese 5 calificaciones (usando prompt()
dentro de un ciclo), guáradalas en un arreglo y al final muestra:
1- Todas las calificaciones
2- El promedio
3- Si el estudiante aprobó (>=6) o no
*/

function ejercicio2() {
    let calif = 0, suma = 0, promedio = 0;
    let arrayCalif = [];

    for(let i=1; i<=5; i++) {
        calif = parseInt(prompt("Ingrese la calificación " + i));
        arrayCalif[i] = calif;
        
        suma += calif;
    }

    promedio =  suma / 5;

    console.log("Calificaciones: " + arrayCalif);
    console.log("Promedio: " + promedio);
    
    if(promedio >= 6) {
        console.log("Aprobado.");
    } else {
        console.log("Reprobado.")
    }
}

/*
Ejercicio 3: Contar pares e impares.

Genera 20 números aleatorios entre 1 y 100, guárdalos en un arreglo
y muestra cuántos son pares y cuántos impares.
*/

function ejercicio3() {
    let arrayNum = [];
    let par = 0, impar = 0;

    for(let i=0; i<20; i++) {
        num = Math.round(Math.random() * 100);
        arrayNum[i] = num;

        if(arrayNum[i] % 2 == 0) {
            par++;
        } else {
            impar++;
        }
    }

    console.log("Números Aleatorios Generados: ");
    console.log(arrayNum)

    console.log("Cant. Pares: " + par);
    console.log("Cant. Impares: " + impar);
}

/*
Ejercicio 4: Registro de empleados.

Crea un programa que permita ingresar información de varios empleados
usando prompt() (preguntar al usuario si desea guardar otro empleado
al terminar un registro) y guarde cada empleado como un objeto con
propiedades: nombre, edad y salario.

1- Al finalizar, muestra cuántos empleados se registraron.
2- Calcula el salario promedio.
3- Muestra los nombres de los empleados mayores de 30 años.
*/

function ejercicio4() {
    let nombre, edad, salario;
    let arrayEmpleado = [];

    do {
        nombre = prompt("Ingrese su Nombre: ");
        edad = parseInt(prompt("Ingrese su Edad: "));
        salario = parseFloat(prompt("Ingrese su Salario: "));
        
        let objEmpleado = {
            nombre: nombre,
            edad: edad,
            salario: salario
        }

        arrayEmpleado.push(objEmpleado);
        console.log(objEmpleado);

        op = prompt("¿Desea Guardar otro Empleado? s/n").toLowerCase();
    } while(op != "n" && op != "no");

    let sumaProm = arrayEmpleado.reduce((prom, n) => prom + n.salario);
    let salarioProm = sumaProm / arrayEmpleado.length;

    console.log("Cantidad de Empleados Registrados: " + arrayEmpleado.length);
    console.log("Salario Promedio: " + salarioProm);
    console.log("Nombres de Empleados Mayores de 30 años: ");
}

/*
Ejercicio 5: Calculadora de comisiones.

Simula un sistema que calcule la comisión de ventas.
Pide al usuario el nombre del vendedor, monto de venta y calcula su comisión.

*Si vendió menos de $10,000 = %10
*Si vendió $10,000 o más = 15$

1- Guarda cada venta como un objeto en un arreglo.
2- Permite ingresar múltiples ventas (hasta que se ingrese "salir").
3- Al final, muestra el total de ventas y la comisión total pagada.
*/

function ejercicio5() {
    let op, nombre, monto, comision = 0;
    let ventas = [];

    do {
        nombre = prompt("Ingrese nombre de Vendedor: ");
        monto = parseFloat(prompt("Ingrese Monto de Venta: "));
        
        if(monto < 10000) {
            comision = monto * 0.10;
        } else {
            comision = monto * 0.15;
        }

        let objVenta = {
            nombre: nombre,
            monto: monto,
            comision: comision
        }

        ventas.push(objVenta);
        console.log(objVenta);

        op = prompt("¿Desea Salir?").toLowerCase();
    } while(op != "salir");

    let totalVentas = ventas.reduce((sum, n) => 
        sum + n.monto, 0);

    let comisionTotal = ventas.reduce((sum, n) => 
        sum + n.comision, 0);

    console.log("Total de Ventas: " + totalVentas);
    console.log("Comisión total Pagada: " + comisionTotal);
}

//ejercicio1();
//ejercicio2();
//ejercicio3();
ejercicio4();
//ejercicio5();