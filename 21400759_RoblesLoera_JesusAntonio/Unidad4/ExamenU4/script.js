/*EXAMEN U4*/
/* Ejercicio 1:
Crea un programa que pida al usuario un numero del 1 al 10 mediante promp() y
 muestre y muestre su tabla de multiplicar del 1 al 10 en console */
 
function TablaEjercicio1(numero) {
  if (numero >= 1 && numero <= 10) {
    console.log(`Tabla del ${numero}:`);

    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
}


let numero = parseInt(prompt("Ingresa un nUmero del 1 al 10"));
TablaEjercicio1(numero);

/*Ejercicio 2:
Pide a un usuairo que ingrese 5 calificaciones (usando prompt dentro de un ciclo) guardalas en un arreglo y muestra
 el promedio de las calificaciones en consola.
 1.Todas la calificaciones
 2.El promedio
 3.Si el estudiante aprobo o no (>=6)
*/
function CalificacionesEjercicio2() {
  let calificaciones = [];
  let suma = 0;

  for (let i=0; i < 5; i++){
    let calificacion = parseFloat(prompt(`Ingresa la calificacion ${i + 1}:`));
    calificaciones.push(calificacion);
    suma += calificacion; 
}
 let promedio = suma / calificaciones.length;
  console.log("Todas las calificaciones:", calificaciones);
  console.log("Promedio:", promedio.toFixed(2));
  if (promedio >= 6) {
    console.log("El estudiante aprobo");
  } else {
    console.log("El estudiante no aprobo,necesita sacar mas de 6");
  }
}

//CalificacionesEjercicio2();

/*Ejercicio 3:
Genera 20 numeros aleatorios entre 1 y 100,
guardalos en un arreglo y muestra cuantos son pares y 
cuantos son impares. */
function NumerosAleatoriosEjercicio3(){
    let= numeros = [];
    let pares = 0;
    let impares = 0;
    for (let i=0; i<20; i++){
        let numero = Math.floor(Math.random()*100)+1;
        numeros.push(numero);
        if (numero % 2 === 0){
            pares++;
        }
        else {
            impares++;
        }
    }
            console.log("Numeros Random Generados",numeros);
            console.log("Numeros Pares:", pares);
            console.log("Numeros Impares:", impares);
}




//NumerosAleatoriosEjercicio3();

/*Ejercicio 4:
Crea un programa que permita ingresar informacion de varios empleados usando prompt()
(preguntar al usuario si desea guardar otro empleado al terminar un registro) y guarde cada
empleado como un objeto con propiedades:nombre,edad y salario 
1.Al finalizar,muestre cuantos empleados se registraron
2.Calcula salario promedio
3.Muestras los nombres de los empleados mayores a 30 años*/

function EmpleadosEjercicio4() {
    let empleados = [];
    let guardar = true;
    while (guardar) {
        let nombre = prompt("Ingresa el nombre del empleado:");
        let edad = parseInt(prompt("Ingresa la edad del empleado:"));
        let salario = parseFloat(prompt("Ingresa el salario del empleado:"));
        empleados.push({ nombre, edad, salario });
        guardar = confirm("Quieres guardar otro empleado?");
    }
    console.log("Total de empleados registrados:", empleados.length);
    let totalSalario=0;
    let empleados30 = [];
    for (let empleado of empleados){
        totalSalario += empleado.salario;
        if (empleado.edad > 30){
            empleados30.push(empleado.nombre);
        }
    }
    let salarioPromedio = totalSalario / empleados.length;
    console.log("Salario promedio:", salarioPromedio.toFixed(2));
    console.log("Empleados Mayores a 30 años:",empleados30.length)
}



//   EmpleadosEjercicio4()




/*Ejercicio 5:
Simula un sistema que calcule la comision de ventas.Pide al usuario el nombre del vendedor,
monto de venta y calcula su comisio: 

-Si vendio menos de $10,000=10%
-Si vendio $10,000 o mas = 15%

1.Guarda cada venta como un objeto en un arreglo
2.Permite ingresar multiples ventas(hasta que se ingrese "Salir")
3.Al final,muestra el total de ventas y la comision total pagada   */

function VentasEjercicio5() {
    let ventas = [];
    while (true) {
    let salir = prompt("Escribe 'salir' para terminar o  Enter para continuar:");
        if (salir && salir.toLowerCase() === "salir") break;
        let nombre = prompt("Ingresa el nombre del vendedor:");
        let montoVenta = parseFloat(prompt("Ingresa el monto de la venta:"));
        let comision = 0;
        if (montoVenta < 10000) {
        comision = montoVenta * 0.10;
        } else {
        comision = montoVenta * 0.15;
        }
    
        ventas.push({ nombre, montoVenta, comision });
   }
    let totalVentas = 0;
    let totalComision = 0;
    for (let venta of ventas) {
        totalVentas += venta.montoVenta;
        totalComision += venta.comision;
    } 
    console.log("Ventas realizadas:", ventas.length);
    console.log("Total vendido:", totalVentas.toFixed(2));
    console.log("Comision total:", totalComision.toFixed(2));    
}


//VentasEjercicio5();


