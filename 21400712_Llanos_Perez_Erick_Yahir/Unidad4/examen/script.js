//ejercico 1 tabla de multiplicar 
//entre un nuero que este entre el 1-10
function tabla() {
    let numero = 0;
    while (numero > 10 || numero < 1) {
        numero = parseInt(prompt("Ingresa tu numero (1-10)"));
    }
    for (var i = 1; i < 11; i++) {
        console.log(numero + " * " + i + " = " + numero * i)
    }
}

//tabla()

//ejercico 2 Promedio de calificaciones 
//pide al usuario que ingrese 5 calificaciones 
//usando  promt y un dentro de un ciclo 
//guardelas en un arreglo y al final muestra 
//1- todas las calificaiones
//2- Promedio
// si el estudiante aprobo (6>=)


function Promedio() {
    let array = []
    let promedio = 0;
    let apro = 0
    let repro = 0

    for (i = 0; i < 5; i++) {
        array[i] = parseInt(prompt("Introduce 5 calificaiones vas en la " + (i + 1)));
        promedio = promedio + array[i]
        if (array[i] >= 6) {
            apro++;
        } else[
            repro++
        ]
    }
    console.log(array)
    console.log("el promedio del salon es de =" + promedio / 5)
    console.log("los aprobados son " + apro + " y los reprobados son " + repro)
}

//Promedio()

/* genera 20 numeros alaeatorias entre 1-100, guardelos en 
una array y muestra cuantos son pares y cuantos son impars*/

function pares() {
    let arreglo = []
    let pares = 0;
    let impares = 0;
    for (i = 0; i < 20; i++) {
        arreglo[i] = Math.floor(Math.random() * 100)
        if (arreglo[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(arreglo)
    console.log("los numeros pares son " + pares + " y los impares son " + impares)
}

//pares()






/*Crea un programa quee permita 
ingresa informacion de varios empleados 
usando promt preguntar si desea agregar 
otro usuario y que guarde cada empleado con 
propiedades como nombre, edad, salario

1- al finalizar debe mostrar cuantos empleados se registraron 
2- calular el salario promedio
3- muestra cuantos de los empleados es mayor a 30anios*/
function empleados() {
    let employs = []
    let registrados = 0;
    let promedioActual = 0;

    while ((ingreso = prompt("Ingresa Nombre , edad, salario todo separado en comas (o 'salir' para terminar):")) !== 'salir') {
        let datos = ingreso.split(',');
        employs.push({
            nombre: datos[0].trim(),
            edad: datos[1].trim(),
            salario: parseFloat(datos[2].trim())
        })
        registrados++;
    }
    console.log("Se registraron " + registrados + " empleados ");
}

empleados()

/*Simula un sistema que calcule la comision de vebtas, pide usuario,
 nombre del vendedor, montos de la venta y calcula su comision si
  vendio mas de 10000 = 10% si vendio mas es de 15% 
  1-guarda cada venta como un objeto en un arreglo 
  2- perite ingresar multiples ventas hasta que se ingrese "salir"
  3- al final muestre el total de ventas y la comision */

function Ventas() {
    let ventas = [];
    let ingreso;

    while ((ingreso = prompt("Ingresa Nombre del vendedor, monto, todo separado en comas (o 'salir' para terminar):")) !== 'salir') {
        let datos = ingreso.split(',');
        ventas.push({
            vendedor: datos[0].trim(),
            monto: parseInt(datos[1].trim()),
            comision: parseFloat()
        });
    }

    let = ventas.reduce((max, venta) => { }, 0);

}

//Ventas()