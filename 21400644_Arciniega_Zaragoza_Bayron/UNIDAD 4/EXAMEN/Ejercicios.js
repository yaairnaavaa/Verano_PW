
//Ejercicio 1
//crea un programa que pida al usuario un numero del 1 al 10 mediante prompt() y
// muestre su tabla de multiplicar del 1 al 10 en consola


function Tabla() {
    let numero = parseInt(prompt("di un numero del 1 al 10"));

    if (numero >= 1 && numero <= 10) {
        console.log("Tabla del " + numero);
        for (let i = 1; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + (numero * i));
        }
    }
}

//Tabla(); 

//Ejercicio 2
/*
Pide al usuario que ingrese 5 calificaciones (usando prompt() dentro de un ciclo),
guardalas en un arreglo y al final muestra:
1. todas las calificaciones
2. el promedio
3. si el estudiante aprobo(>=6) o no
*/

function calificaciones() {
    let calificaciones = [];
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        let cal = parseFloat(prompt("Ingresa la calificación" + (i + 1)));
        calificaciones.push(cal);
        suma += cal;
    }
    let promedio = suma / 5;
    console.log("Calificaciones", calificaciones);
    console.log("Promedio", promedio.toFixed(2));
    if (promedio >= 6) {
        console.log("aprobo.");
    } else {
        console.log("no aprobo");
    }
}

//calificaciones(); 


//Ejercicio 3
/*
Genera 20 numeros aleatorios entre 1 y 100, guardalos en un arreglo y muestra
cuantos son pares y cuantos impares
*/

function Aleatorios() {
    let numeros = [];           
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 20; i++) {
        let num = Math.floor(Math.random() * 100) + 1; 
        numeros.push(num);
    }
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log("Generados", numeros);
    console.log("pares", pares);
    console.log(" impares", impares);
}
//Aleatorios();

//Ejercicio 4
/*
crea un programa que permita ingresar informacion de varios empleados
usando prompt()(preguntar al usuario si desea guardar otro empleado al terminar un registro) y
guarde cada empleado como un objeto con propiedades nombre, edad y salario.
1. al finalizar, muestra cuantos empleados se registraron.
2. calcula el salario promedio.
3. muestra los nombres de los empleados mayores de 30 años
*/

function Empresa() {
    let empleados = [];
    let continuar = true;

    while (continuar) {
        let nombre = prompt("Nombre del empleado");
        let edad = parseInt(prompt("Edad del empleado"));
        let salario = parseFloat(prompt("Salario del empleado"));

        empleados.push({
            nombre: nombre,
            edad: edad,
            salario: salario
        });

        let seguir = prompt("¿Deseas registrar otro empleado? (si/no)");
                        if (seguir.toLowerCase() !== "si") {
                                        continuar = false;
        }
    }

    console.log("empleados registrados", empleados.length);
    let sumaSalarios = 0;
        for (let i = 0; i < empleados.length; i++) {
                        sumaSalarios += empleados[i].salario;
    }
    let promedio = sumaSalarios / empleados.length;
                    console.log(" Salario promedio " + promedio.toFixed(2));

    console.log(" mayores de 30 años");
             for (let i = 0; i < empleados.length; i++) {
                        if (empleados[i].edad > 30) {
                                 console.log(empleados[i].nombre);
        }
    }
}
Empresa(); 

//Ejercicio 5
/*
simula un sistema que calcule la comision de ventas.
pide al usuario el nombre del vendedor, monto de venta y calcula
su comision:

si vendio menos de $10,000 = 10%
si vendio $10,000 o mas = 15%


1.guarda cada venta como un objeto en un arreglo
2.permite ingresar multiples ventas (hasta que se ingrese salir).
3.al final, muestra el total de ventas y la comision total pagada.

*/

