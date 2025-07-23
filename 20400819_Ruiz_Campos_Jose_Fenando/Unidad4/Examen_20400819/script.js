//Examen de la Unidad 4 - Ejercicio 1 - 20400819 - Ruiz Campos Jose Fernando

function Ejercicio1_Examen() {
  numero = parseInt(
    prompt(
      "Ingrese un número del 1 al 10 para calcular su tabla de multiplicar:"
    )
  );
  if (numero > 1 && numero < 10) {
    for (let i = 1; i <= 10; i++) {
      resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  } else {
    console.log(
      "Número fuera de rango. Por favor, ingrese un número del 1 al 10."
    );
  }
}

function Ejercicio2_Examen() {
  // Pide al usuario que ingrese 5 calificaciones (usando prompt(), dentro de un ciclo).
  // guardalas en un arreglo y al final muestra: 1. Todas las calificaciones. 2. Promedio. 3.SI el estudiante aprobo >=6 o no.
  let calificaciones = [];
  let suma = 0;
  for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt("Ingrese la calificacion:"));
    calificaciones.push(calificacion);
    suma += calificacion;
  }
  let promedio = suma / calificaciones.length;
  console.log("Todas las calificaciones: " + calificaciones.join(", "));
  console.log("Promedio: " + promedio);
  if (promedio >= 6) {
    console.log("El estudiante aprobó.");
  } else {
    console.log("El estudiante no aprobó.");
  }
}

function Ejercicio3_Examen() {
  //Genera 20 numeros aleatorios entre 1 y 100, guardalos en un arreglo y muestra cuantos son pares y cuantos son impares.
  let numeros = [];
  let pares = 0;
  let impares = 0;
  let numeroAleatorio;
  for (let i = 0; i < 20; i++) {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(numeroAleatorio);
    if (numeroAleatorio % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  console.log("Números generados: " + numeros.join(", "));
  console.log("Cantidad de números pares: " + pares);
  console.log("Cantidad de números impares: " + impares);
}

function Ejercicio4_Examen() {
  // Crea un programa que permita ingresar información de varios empleados usando prompt().
  // Preguntar al usuario si desea guardar otro empleado al terminar un registro y guardar cada empleado como un objeto con propiedades:
  // nombre, edad, salario.
  let empleados = [];
  let continuar = true; // variable booleana para el ciclo while
  while (continuar) {
    let nombre = prompt("Ingrese el nombre del empleado:");
    let edad = parseInt(prompt("Ingrese la edad del empleado:"));
    let salario = parseFloat(prompt("Ingrese el salario del empleado:"));
    empleados.push({ nombre, edad, salario });
    continuar = confirm("¿Desea guardar otro empleado?");
  }
  let NoEmpleados = empleados.length;
  console.log("Número de empleados: " + NoEmpleados);
  let salarioPromedio =
    empleados.reduce((i, empleado) => i + empleado.salario, 0) / NoEmpleados;
  console.log("Salario promedio: " + salarioPromedio);
  let empleadosMayores = [];
  empleadosMayores.push(empleados.filter((empleado) => empleado.edad > 30));
  console.log(
    "Empleados mayores de 30 años:" +
      empleadosMayores.map((empleado) => empleado.nombre).join(", ")
  );
}

function Ejercicio5_Examen() {
  // Simula un sistema que calcule la comision de ventas.
  // Pide al usuario el nombre del vendedor, monto de venta y calcula su comision:
  // - Si vendio menos de $10,000 = 10%
  // - Si vendio $10,000 o mas = 15%
  // 1-. Guarda cada venta como un objeto en un arreglo.
  // 2-. Permite ingresar multiples ventas (hasta que se ingrese "salir").
  // 3-. Al final, muestra el total de ventas y la comision total pagada general.
  let ventas = [];
  let comision_10 = 0.1;
  let comision_15 = 0.15;

  let continuar_vendedor = true;
  while (continuar_vendedor) {
    let nombre = prompt("Ingrese el nombre del vendedor:");
    let continuar = true;
    while (continuar) {
      let monto_venta = parseFloat(prompt("Ingrese el monto de la venta:"));
      let comision = 0;
      if (monto_venta < 10000) {
        comision = monto_venta * comision_10;
      } else {
        comision = monto_venta * comision_15;
      }
      ventas.push({ nombre, monto_venta, comision });
      continuar = confirm("¿Desea ingresar otra venta para este vendedor?");
    }
    continuar_vendedor = confirm("¿Desea ingresar ventas de otro vendedor?");
  }
  let total_ventas = ventas.reduce((i, venta) => i + venta.monto_venta, 0);
  let total_comisiones = ventas.reduce((i, venta) => i + venta.comision, 0);
  console.log("Total de ventas: " + total_ventas);
  console.log("Total de comisiones: " + total_comisiones);
}

Ejercicio5_Examen();
