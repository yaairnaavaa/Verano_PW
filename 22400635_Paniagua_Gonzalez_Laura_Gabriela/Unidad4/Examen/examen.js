//Laura Gabriela Paniagua Gonzalez
/*
Crea un programa que pida al usuario un numero del 1 al 10 mediante prompt
y muestre su tabla de multiplicar del 1 al 10 en consola
 */

   
function map() {
    let numero = prompt("Ingresa un numero del 1 al 10");
    numero = parseInt(numero);
    const tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(tabla);

    let mult = tabla.map(n => n * numero);
    console.log(mult);
}

map();

/*
Ejercicio 2 Promedio de calificaciones

Pide al usuario que ingrese 5 calificaciones usando prompt dentro de un ciclo, guardalos en un arreglo y al final muestra 
1-. Todas las calificaciones
2-. El promedio
3-. Si el estudiante aprobo >= 6 o no
*/


function promedio(){
    let calificacion = [];
    let suma = 0;
    let promedio = 0;
        for (i=0; i< 5; i++){
        let calif = prompt("Ingresa 5 calificaciones (del 0 al 10)");
        calificacion.push(parseInt(calif));
        suma += calificacion[i];
    }
    promedio = suma / calificacion.length;
    console.log(`El promedio es: ${promedio}`);
    if (promedio >= 6) {
        console.log("El estudiante aprobo");
    } else {
        console.log("El estudiante no aprobo");
    }
}

promedio();

/*
Contar pares a impares

Genera 20 numeros aleatorios entre 1 y 100, guardalos en un arreglo y muestra cuantos son pares y cuantos impares
*/

function contarParesImpares() {
    let numeros = [];
    for (let i = 0; i < 20; i++) {
        let numeros = Math.floor(Math.random() * 100) + 1;
        if (numeros % 2 === 0) {
            console.log(`${numeros} es par`);
        } else {
            console.log(`${numeros} es impar`);
        }

    }

}

contarParesImpares();


/* 
Registro de empleados

Crea un programa que permita ingresar informacion de varios empleados usando prompt(). 
Preguntar al usuario si desea guardar otro empleado al terminar un registro y guarda cada empleado como un objeto con propiedades nombre edad y salario.

1/. Al finalizar, muestra cuantos empleados se registraron
2/. Calcular el salario promedio
3/. Muestra los nombres de los empleados mayores de 30 años
*/
function registroEmpleados() {
    let empleados = [];
    let continuar = true;
    while (continuar) {
        let nombre = prompt("Ingresa el nombre del empleado:");
        let edad = parseInt(prompt("Ingresa la edad del empleado:"));
        let salario = parseFloat(prompt("Ingresa el salario del empleado:"));

        empleados.push({ nombre, edad, salario });

        continuar = prompt("¿Deseas registrar otro empleado (si o no)?");
            if (continuar.toLowerCase() == "si"){
                continuar = true;
            }else if (continuar.toLowerCase() == "no"){
                continuar = false;
            }
    }

    console.log(`Se han registrado ${empleados.length}.`);

    let totalSalario = empleados.reduce((acc, emp) => acc + emp.salario, 0); // Sumar todos los salarios
    let promedioSalario = totalSalario / empleados.length;
    console.log(`El salario promedio es: ${promedioSalario}`);

    console.log("Empleados mayores de 30 años:");
    empleados.forEach(emp => {
        if (emp.edad > 30) {
            console.log(emp.nombre);
        }
    });
}

registroEmpleados();


/*
Calculadora de comisiones


Simula un sistema que calcule la mision de ventas

Pide al usuario el nombre del vendedor, nombre de venta y calcule su comision

Si vendio menos de 10,000 = 10% 
Si vendio 10,000 o mas = 5%


1. Giarda cada venta como un digito en un arreglo
2. Permita ingresar multiples ventas hasta que se ingrese "salir"
3. Al final, muestra el total de ventas y la comision total pagada
*/
function registroVentas() {
    let ventas = [];


    let continuar = true;
    while (continuar) {

        let vendedor = prompt("Ingresa el nombre del vendedor:");
        let venta = prompt("Ingresa el nombre de la venta:");
        let monto = parseFloat(prompt("Ingresa el monto de la venta:"));

        let comision = 0;
        if (monto < 10000) {
            comision = monto * 0.1;
        } else if (monto >= 10000) {
            comision = monto * 0.05;
        }

        ventas.push({ vendedor, venta, monto, comision });

        continuar = prompt("¿Deseas registrar otra venta (si o salir)?");
            if (continuar.toLowerCase() == "si"){
                continuar = true;
            }else if (continuar.toLowerCase() == "salir"){
                continuar = false;
            }
    }

    console.log(`Total de ventas ${ventas.length}.`);

    let totalComision = ventas.reduce((acc, emp) => acc + emp.comision, 0); // Sumar todas las comisiones
    console.log(`La comision total es de: ${totalComision}`);

    console.log("Ventas registradas:");
    ventas.forEach(venta => {
        console.log(`Vendedor: ${venta.vendedor}, Venta: ${venta.venta}, Monto: ${venta.monto}, Comision: ${venta.comision}`);
    });
}

registroVentas();
