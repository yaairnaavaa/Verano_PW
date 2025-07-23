//Examen Unidad 4 Ruiz Daniel 
/*1
Crea un programa que pida al usuario un número del 1 
al 10 mediante prompt() y muestre su tabla de multiplicar
del 1 al 10 en consola.
*/
function tablaMultiplicar() {
    const dato = prompt("Ingresa un número del 1 al 10:");

    const numero = parseInt(dato);

    if (numero >= 1 && numero <= 10) {
        console.log(`Tabla de Multiplicar del ${numero}`);
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }

    } else {
        console.error("Debes ingresar un número entre 1 y 10.");
    }
}

//tablaMultiplicar();

/*2
    Pide al usuario que ingrese 5 calificaciones entre el 0 y 10
    (usando prompt() dentro de un ciclo), guárdalas en un
    arreglo y al final muestra:
    Todas las calificaciones
    El promedio
    Si el estudiante aprobó (Mayor o igual a 6) o si no aprobó
*/

function calificaciones() {

    const calificaciones = [];
    const numeroDeCalificaciones = 5;

    for (let i = 0; i < numeroDeCalificaciones; i++) {
        let calificacion;

        while (true) {
            const entrada = prompt(`Ingresa la calificación #${i + 1} (de 0 a 10):`);
            calificacion = parseFloat(entrada);

            if (calificacion >= 0 && calificacion <= 10) {
                break;
            } else {
                alert("Error: Ingresa un número válido entre 0 y 10.");
            }
        }

        calificaciones.push(calificacion);
    }

    const suma = calificaciones.reduce((acumulador, actual) => acumulador + actual, 0);
    const promedio = suma / numeroDeCalificaciones;

    console.log("Resultados del Estudiante");
    console.log("Calificaciones obtenidas:", calificaciones.join(', '));
    console.log(`Promedio final: ${promedio.toFixed(2)}`);

    if (promedio >= 6) {
        console.log("Aprobado ");
    } else {
        console.log("A Repe");
    }

}

//calificaciones();
/*3
Genera 20 números aleatorios entre 1 y 100 guardalos en un arreglo
y muestra cuantos son pares y cuantos son impares
*/

function parImpar() {
    const numeros = [];
    const cantidadNumeros = 20;
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < cantidadNumeros; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(numeroAleatorio);
    }

    for (const numero of numeros) {
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log("Números generados:", numeros.join(', '));
    console.log(`\nCantidad de números pares: ${pares}`);
    console.log(`Cantidad de números impares: ${impares}`);
}
//parImpar();

/*4
Crea un programa que permita ingresar información de varios empleados
usando prompt() (preguntar al usuario si desea guardar otro empleado al
terminar un registro) y guarde cada empleado como un objeto con propiedades:
nombre, edad y salario.
Al finalizar, muestra cuántos empleados se registraron.
Calcula el salario promedio.
Muestra los nombres de los empleados mayores de 30 años.
*/

function empleados() {
    const empleados = [];
    let continuar = true;

    while (continuar) {
        const nombre = prompt("Ingresa el nombre del empleado:");
        if (nombre === null) break;

        let edad;
        while (true) {
            const entradaEdad = prompt(`Ingresa la edad de ${nombre}:`);
            edad = parseInt(entradaEdad);
            if (edad > 0 && edad <= 100) break;
            alert("Por favor, ingresa una edad válida.");
        }

        let salario;
        while (true) {
            const entradaSalario = prompt(`Ingresa el salario de ${nombre}:`);
            salario = parseFloat(entradaSalario);
            if (salario >= 0) break;
            alert("Por favor, ingresa un salario válido.");
        }

        empleados.push({ nombre, edad, salario });

        continuar = confirm("¿Deseas registrar otro empleado?");
    }

    if (empleados.length > 0) {
        console.log("\n Resumen de Empleados");

        console.log(`Total de empleados registrados: ${empleados.length}`);

        const sumaSalarios = empleados.reduce((acc, emp) => acc + emp.salario, 0);
        const salarioPromedio = sumaSalarios / empleados.length;
        console.log(`Salario promedio: $${salarioPromedio.toFixed(2)}`);

        const mayoresDe30 = empleados
            .filter(emp => emp.edad > 30)
            .map(emp => emp.nombre);

        if (mayoresDe30.length > 0) {
            console.log("Empleados mayores de 30 años:", mayoresDe30.join(', '));
        } else {
            console.log("No hay empleados mayores de 30 años.");
        }

    } else {
        console.log("No se registró ningún empleado.");
    }

}

//empleados();

/*5 Calculadora de comisiones
Simula un sistema que calcule la comisión de ventas.
Pide al usuario el nombre del vendedor, monto de venta y
calcula su comisión: 

Si se vendió menos de $10,000 = 10%
Si se vendio $10,000 o más = 15%

1.-Guarda cada venta como un objeto en un arreglo
2.-Permite ingresar múltiples ventas(hasta que se ingrese
"salir").
3.- Al final, muestra el total de ventas y la comisión total
pagada
*/

function comisiones() {
    const ventas = [];
    let continuar = true;

    while (continuar) {
        const nombreVendedor = prompt("Ingresa el nombre del vendedor (o escribe 'salir' para terminar):");

        if (nombreVendedor === null || nombreVendedor.toLowerCase() === 'salir') {
            continuar = false;
            break;
        }

        let montoVenta;
        while (true) {
            const entradaMonto = prompt(`Ingresa el monto de la venta para ${nombreVendedor}:`);
            montoVenta = parseFloat(entradaMonto);
            if (montoVenta >= 0) break;
            alert("Por favor, ingresa un monto de venta válido.");
        }

        let comision;
        if (montoVenta < 10000) {
            comision = montoVenta * 0.10;
        } else {
            comision = montoVenta * 0.15;
        }

        ventas.push({
            vendedor: nombreVendedor,
            montoVenta: montoVenta,
            comision: comision
        });

        console.log(`Venta de ${nombreVendedor} por $${montoVenta.toFixed(2)} registrada.`);
    }

    if (ventas.length > 0) {
        
        console.log(`Total de ventas registradas: ${ventas.length}`);

        const comisionTotal = ventas.reduce((acc, venta) => acc + venta.comision, 0);
        console.log(`Comisión total pagada: $${comisionTotal.toFixed(2)}`);

        console.log("\n--- Detalle de Ventas ---");
        console.table(ventas);

    } else {
        console.log("No se registró ninguna venta.");
    }
}

//comisiones();