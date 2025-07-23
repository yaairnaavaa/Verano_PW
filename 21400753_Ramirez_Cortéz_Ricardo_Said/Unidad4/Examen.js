//Ejercicio1
//Crea un programa que pida al usuario un número del 1 al 10 mediante prompt() y muestre su tabla de multiplicar
//del 1 al 10 en consola

function multiplicar(){
    let numero = parseInt(prompt("Ingresar numero"));
    if (numero >= 1 && numero <= 10) {
        console.log("Tabla de multiplicar del numero " + numero);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        } else {
        console.log("Ingresar un número del 1 al 10.");
    }
}

//multiplicar();

//Ejercicio 2
/*Pide al usuario que ingrese 5 calificaciones (usando prompt() dentro de un ciclo),
guárdalas en un arreglo y al final muestra:
1.-Todas las calificaciones
2.-El promedio
3.-Si el estudiante aprobó (>=6) o no*/

function calificaciones() {
    let calificaciones = [];
    let suma = 0;

    for (let i = 0; i < 5; i++) {
        let calif = parseFloat(prompt(`Ingresa la calificación ${i + 1}:`));
        calificaciones.push(calif);
        suma += calif;
    }

    console.log("Todas las calificaciones:", calificaciones);
    let promedio = suma / calificaciones.length;
    console.log("Promedio:", promedio.toFixed(2));

    if (promedio >= 6) {
        console.log("El estudiante aprobó.");
    } else {
        console.log("El estudiante no aprobó.");
    }
}
//calificaciones();

//Ejercicio 3
/*Genera 20 números aleatorios entre 1 y 100, guárdalos en un arreglo y muestra cuántos
son pares y cuántos impares*/

function aleatorios(){
    let numerosAleatorios = [];
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 20; i++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        numerosAleatorios.push(numero);
        if (numero% 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log("Números generados:", numerosAleatorios);
    console.log("Cantidad de pares:", pares);
    console.log("Cantidad de impares:", impares);
}

//aleatorios();

//Ejercicio 4
/*Crea un programa que permita ingresar información de varios empleados usando prompt() (preguntar al usuario si desea guardar
otro empleado al terminar un registro) y guarde cada empleado como un objeto con propiedades: nombre, edad y salario
1.-Al finalizar muestra cuántos empleados se registraron.
2.-Calcula el salario promedio.
3.-Muestra los nombres de los empleados mayores de 30 años*/

function empleados(){
    let empleados = [];
    let seguir = true;

    while(seguir){
        let nombre = prompt("Ingresar nombre:");
        let edad = parseInt(prompt("Ingresar edad:"));
        let salario = parseFloat(prompt("Ingresar Salario:"));

        empleados.push({nombre, edad, salario});

        let seguirIngreso = prompt("¿Seguir con el ingreso de empleados?").toLowerCase();
        if(seguirIngreso == "si"){
            seguirIngreso = false;
        }
    }

    console.log("Empleados Registrados: " + empleados);

    let sumaSalarios = empleados.reduce((acc, emp) => acc + emp.salario, 0);
    let promedioSalario = empleados.length ? (sumaSalarios / empleados.length) : 0;
    console.log("Salario promedio:", promedioSalario.toFixed(2));

    let mayores30 = empleados.filter(emp => emp.edad > 30).map(emp => emp.nombre);
    console.log("Empleados mayores de 30 años:", mayores30.length ? mayores30.join(", ") : "Ninguno");
}

empleados();

//Ejercicio 5
/*Simula un sistema que calcule la comisión de ventas. 
Pide al usuario el nombre del vendedor, monto de venta y comisión:
Si vendió menos de $10000 =  10%
Si vendió $10000 o más = 15%
1.-Guarda cada venta como un objeto en un arreglo.
2.-Permite ingresar múltiples ventas (hasta que se ingrese "salir").
3.-Al final, muestra el total de ventas y la comisión total pagada.
*/
