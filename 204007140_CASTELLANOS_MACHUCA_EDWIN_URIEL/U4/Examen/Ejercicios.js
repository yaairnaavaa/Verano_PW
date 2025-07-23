//Crea un programa que pida al usuario un numero del 1-10 mediante un prompt()
//Y muestre su tabla de multiplicar del 1 al 10 en consola 
function e1() {
    let numero;
    do {
        numero = prompt("Ingresa un numero del 1-10");
    } while (isNaN(numero) || numero <= 0 || numero > 10);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
//Promedio de calificaciones
//Pide al usuario que ingrese 5 calificaciones (usando prompt() dentro de un ciclo)
// guardalas en un arreglo y al final muestra
//todas las calificaciones, el promedio, si el estudiante aprobo >= 6 o no
function e2() {
    const calificaciones = [];
    for (let i = 0; i < 5; i++) {
        do {
            calificaciones[i] = parseInt(prompt(`Ingresa la calicacion ${i + 1} (0-10):`));
        } while (isNaN(calificaciones[i]) || calificaciones[i] < 0 || calificaciones[i] > 10);
    }
    console.log("Calificaciones:", calificaciones);
    console.log("El promedio del grupo es: "+calificaciones.reduce((arg, n) => arg + n, 0) / calificaciones.length);
    console.log(calificaciones.map(n=>{
        if(n >= 6) {
        return "Aprobado";
        }else {
        return "Reprobado";
        }
    }));
}
//Contar pares e impares
//Genera 20 numeros aleatorios entre 1 y 100
//guardalos en un arreglo y muestra cuantos son pares y cuantos impares
function e3() {
    const numeros = [];
    for(let i=0;i<20;i++){
        numeros[i] = Math.floor(Math.random() * 100) + 1;
    }
    console.log("Numeros generados:", numeros);
    console.log(numeros.map(n=>{
        if(n % 2 === 0) {
        return "Par";
        }else {
        return "Impar";
        }
    }));

}
//Registro empleados
//Crea un programa que permita ingresar informacion
//de varios empleados usando prompt() preguntar al usuario
//si desea huardar otro empleado al terminal un registro y guarde cada empleado como un objeto con propiedades
//nombre,edad y salario
//1.Al finalizar mostrar cuantos empleados se registraron
//2.calcula el salario promedio
//3.Muestra los nombres de los empleados mayores a 30 años
function e4() {
    const empleados =[]

    let numero;
    do{
        numero = parseInt(prompt("Ingresa la cantidad de empleados a registrar"));
    }while(numero <=0 || isNaN(numero) || numero > 100);
    
    const nombres =[];
    const edades = [];
    const salarios = [];

    for(let i=0;i<numero;i++){

        let nombre= prompt(`Ingresa el nombre del empleado ${i+1}`);
        let edad = parseInt(prompt(`Ingresa la edad del empleado ${i+1}`));
        let salario =parseFloat(prompt(`Ingresa el salario del empleado ${i+1}`));
        nombres[i] = nombre;
        edades[i] = edad;
        salarios[i] = salario;
    }
    let nombre;
    let edad;
    let salario;
    do{
        var continuar = prompt("¿Deseas guardar otro empleado? (si/no)").toLowerCase();
        if(continuar === "si") {

            nombre = prompt("Ingresa el nombre del empleado");
            edad = parseInt(prompt("Ingresa la edad del empleado"));
            salario = parseFloat(prompt("Ingresa el salario del empleado"));
            nombres.push(nombre);
            edades.push(edad);
            salarios.push(salario);
            
        } else if(continuar === "no") {
            console.log("Registro finalizado.");
            break;
        } else {
            console.log("Respuesta no valida, por favor ingresa 'si' o 'no'.");

        }
    }while(continuar !== "no");
    console.log("Empleados registrados:", nombres.length);
    console.log("Salario promedio:", salarios.reduce((total, salario) => total + salario, 0) / salarios.length);
    console.log("Empleados mayores de 30 años:", nombres.filter((nombre, index) => edades[index] > 30).join(", "));

}
/*Calculadora de comisiones
Simula un sistema que calcule la comusion de ventas.
Pide al usuario el nombre del vendedor,monto de venta
y calcula su comision:
Si vendo menos de 10,000=10%
Si vendo 10,000 o mas =15%

1.-Guarda cada venta como un objeto en un arreglo
2..- Permite ingresar multiples ventas (hasta que se ingrese "Salir")
3.-Al final muestra el total de ventas y comiion total pagada.*/
function e5(){
    const ventas = [];
    let totalVentas = 0;
    let comisionTotal = 0;

    while (true) {
        const nombre = prompt("Ingresa el nombre del vendedor (o 'Salir' para terminar):");
        if (nombre.toLowerCase() === "salir") {
            break;
        }
        const montoVenta = parseFloat(prompt("Ingresa el monto de la venta:"));
        if (isNaN(montoVenta) || montoVenta < 0) {
            console.log("Monto de venta no válido. Inténtalo de nuevo.");
            continue;
        }

        const comision = montoVenta < 10000 ? montoVenta * 0.10 : montoVenta * 0.15;
        ventas.push({ nombre, montoVenta, comision });
        totalVentas += montoVenta;
        comisionTotal += comision;
    }

    console.log("Ventas registradas:", ventas);
    console.log("Total de ventas:", totalVentas);
    console.log("Comisión total pagada:", comisionTotal);

}
