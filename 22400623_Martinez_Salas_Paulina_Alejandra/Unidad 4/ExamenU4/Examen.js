//Examen Unidad 4

/*1.Crear un programa que pida al usuario un 
número del 1 al 10 mediante prompt() y muestre 
su tabla de multiplicar del 1 al 10 en consola*/

function Ejercicio1() {
    let numero = parseInt(prompt("Ingrese un número del 1 al 10:"));

    if (numero < 1 || numero > 10) { //Aquí valido 
        // que esté en el rango pedido
        console.log("Número inválido. Por favor, ingrese un número entre 1 y 10.");
        return;
    }

    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

/*Pide al usuario que ingrese 5 calificaciones
usando prompt() dentro de un ciclo, guárdalas en
un arreglo y al final muestra
1. Todas las calificaciones
2. El promedio
3. Si el estudiante aprobó (>=6) o no*/
function Ejercicio2() {
    let calificaciones = [];
    for (let i = 0; i < 5; i++) {
        let calificacion = parseFloat(prompt(`Ingrese la calificación ${i + 1}:`));
        if (calificacion < 0 || calificacion > 10) {
            console.log("Calificación inválida. Debe ser un número entre 0 y 10.");
            i--;
            continue; //sirve para repetir el console.log
            // y no se incremente el iterador (i) 
            //hasta que se ingrese una calificación válida
        }
        calificaciones.push(calificacion); //El push los
        //agrega al arreglo
    }
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    let promedio = suma / calificaciones.length;

    //Calificaciones y el Promedio
    console.log("calificaciones:", calificaciones);
    console.log("Promedio:", promedio);

    //validar si aprobó o no
    if (promedio >= 6) {
        console.log("Promedio mayor a 6. Aprobó.");
    } else {
        console.log("Promedio menor a 6. Reprobó.")
    }
}

/*3.Genera 20 números aleatorios entre 1 y 100,
guárdalos en un arreglo y muestra cuántos son
pares y cuántos impares*/
function Ejercicio3() {
    let numeros = [];
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 20; i++) {
        let numero = Math.floor(Math.random() * 100) + 1; // Genera un número entre 1 y 100
        numeros.push(numero);

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log("Numeros: ", numeros);
    console.log("Total de números PARES generados: ", pares);
    console.log("Total de números IMPARES generados: ", impares);
}

/*4. Crea un programa que permita ingresar información de
varios empleados usando prompt() preguntar al usuario 
si desea guardar otro empleado al terminar un registro
 y guarde cada empleado como un objeto con propiedades:
 nombre, edad y salario.
 
 1. Al finalizar, muestra cuántos empleados se registraron.
 2. Calcula el salario promedio.
 3. Muesta los nombres de los empleados mayores de 30 años.*/

function Ejercicio4() {
    let empleados = [];
    let continuar = true;

    while (continuar) {
        let nombre = prompt("Ingrese el nombre del empleado:");
        let edad = parseInt(prompt("Ingrese la edad del empleado:"));
        let salario = parseFloat(prompt("Ingrese el salario del empleado:"));

        // válido que si ingresen el nombre, y que el salario y la edad sean números
        if (!nombre || isNaN(edad) || isNaN(salario)) {
            console.log("Datos inválidos. Intente nuevamente.");
            continue;
        }
        let empleado = { nombre, edad, salario };
        empleados.push(empleado);

        continuar = confirm("¿Desea ingresar otro empleado?");
    }
    //Empleados registrados
    console.log(`Total de empleados registrados: ${empleados.length}`);

    if (empleados.length > 0) {
        let totalSalario = 0;
        let empleadosMayores30 = [];

        for (let empleado of empleados) {
            totalSalario += empleado.salario;
            if (empleado.edad > 30) {
                empleadosMayores30.push(empleado.nombre);
            }
        }

        //Calcular el salario promedio
        let salarioPromedio = totalSalario / empleados.length;
        console.log("Salario promedio", salarioPromedio);
        //Mostrar empleados mayores de 30 años
        console.log("Empleados mayores de 30 años: ", empleadosMayores30, ", ");
    }
}


/*5. Simula un sistema que calcule la comisión de ventas.
Pide al usuario el nombre del vendedor, monto de venta y 
calcula su comisión:

Si vendió menos de $10,000 = 10%
Si vendió $10,000 o más =15%

1. Guardar cada venta como un objeto en un arreglo.
2. Permite ingresar múltiples ventas (hasta que se 
ingrese "salir").
3. Al final, muestra el total de ventas y comisión 
total pagada.
*/

function Ejercicio5() {

    let ventas = [];
    let continuar = true;

    while (continuar) {
        let nombreVendedor = prompt("Ingrese el nombre del vendedor:");
        let montoVenta = parseFloat(prompt("Ingrese el monto de la venta:"));

        if (!nombreVendedor || isNaN(montoVenta)) {
            console.log("Datos inválidos. Intente nuevamente.");
            continue;
        }

        let comision;
        if (montoVenta < 10000) {
            comision = montoVenta * 0.10;
        } else {
            comision = montoVenta * 0.15;
        }
        let venta = { nombreVendedor, montoVenta, comision };
        ventas.push(venta);

        continuar = confirm("¿Desea ingresar otra venta?");
    }

    let totalVentas = 0;
    let totalComisiones = 0;

    for (let venta of ventas) {
        totalVentas += venta.montoVenta;
        totalComisiones += venta.comision;
    }

    console.log("Total de ventas: " +totalVentas);
    console.log("Comisión total pagada: "+totalComisiones);
}

//Llamada a funciones
//Ejercicio1();
//Ejercicio2();
//Ejercicio3();
//Ejercicio4();
Ejercicio5();