/* Ejercicio 1 Crea un programa que pida a lusuario un número del 1 al 10 mediante prompt()
y muestre su tabla de multiplicar del 1 al 10 en consola*/

function ejercicio1() {
  let numero = parseInt(prompt("Ingresa un numero del 1 al 10"));
  while (numero < 1 || numero > 10) {
    numero = parseInt(prompt("Ingresa un numero del 1 al 10"));
  }
  console.log(mostrarTabla(numero));
}

function mostrarTabla(numero) {
  let mensaje = `Tabla de multiplicar del número ${numero}\n`;
  for (let i = 1; i < 11; i++) {
    mensaje = `${mensaje}${numero} * ${i} = ${numero * i}\n`;
  }
  return mensaje;
}

/* Ejercicio 2 Pide al usuario que ingrese 5 calificaciones (usando prompt() dentro de un ciclo),
guárdalas en un arreglo y a l final muestra:
1. Todas las calificaciones
2. El promedio
3. Si el estudiante aprobó (>=6) o no
 */

function ejercicio2() {
  let mensaje = ``;
  let calificaciones = [];
  let promedio = 0;
  for (let i = 0; i < 5; i++) {
    calificaciones[i] = parseFloat(prompt(`Ingresa la calificacion ${i + 1}: `));
  }

  promedio = calificaciones.reduce((sum, calif) => (sum = sum + calif), 0) / 5;

  calificaciones.forEach((calif) => {
    mensaje = `${mensaje} calificacion ${calif} ${calif >= 6 ? "paso" : "no pasó"}\n`;
  });
  mensaje = `${mensaje} Promedio: ${promedio}`;
  console.log(mensaje);
}

/*Ejercicio 3. Genera 20 numeros aleatorios entre 1 y 100, guaralos en un arreglo y muestra 
cúantos son pares y cuántos son impares */

function ejercicio3() {
  let numeros = [];
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < 20; i++) {
    numeros[i] = parseInt(Math.random() * 100 + 1);
    numeros[i] % 2 === 0 ? pares++ : impares++;
  }
  console.log(numeros);
  let mensaje = `Numeros pares: ${pares}\n Numeros impares: ${impares}`;
  console.log(mensaje);
}

/* Ejercicio 4. Crea un programa que permita ingresar la informacion de varios
empleados usando prompt() (preguntar al usuario si desea guardar otro empleado al terinar un regirstro)
y guarde cada empleado como un objeto con propiedades: nombre, edad y salario 
1. Al finalizar, muestra cuantos empleado se registraron.
2. Calcula el salario promedio,
3. muestra los nombres de los empleados mauores de 30 años
*/

function ejercicio4() {
  let empleados = [];
  let string = prompt(
    "Ingresa los siguientes datos separados por comas: \n " +
      "Nombre del empleado, edad, salario SIN CARACTERES ESPECIALES\n" +
      "Escribe 'salir' para SALIR"
  );
  let datos = string.split(",");
  empleados.push({
    nombre: datos[0],
    edad: parseFloat(datos[1]),
    salario: parseInt(datos[2]),
  });

  while (string !== "salir") {
    string = prompt(
      "Ingresa los siguientes datos separados por comas: \n " +
        "Nombre del empleado, edad, salario SIN CARACTERES ESPECIALES\n" +
        "Escribe 'salir' para SALIR"
    );
    if (string !== "salir") {
      let datos = string.split(",");
      empleados.push({
        nombre: datos[0],
        edad: parseFloat(datos[1]),
        salario: parseInt(datos[2]),
      });
    }
  }

  let mensaje = `Empleados registrados: ${empleados.length}\n`;
  let promedio = empleados.reduce((suma, empleado) => (suma = suma + empleado.salario), 0) / empleados.length;
  mensaje = `${mensaje} Promedio de salarios: ${Math.round(promedio)}\n`;
  let personas = empleados.filter((empleado) => empleado.edad > 30);
  mensaje = `${mensaje} Personas con mas de 30 anios: ${personas.map((persona) => persona.nombre)}`;
  console.log(mensaje);
}

/*Ejercicio 5: Simula un sistema que calcule la comision de ventas.
Pide al usuario el nombre del vendedor, monto de la venta y calcula su comision:

*Si vendio menos de $10,000 = 10%
*Si vendio $10,000 o mas = 15%

1. Vuarda cada venta como un objeto en un arreglo.
2. Permite ingresar multiples ventas (hasta que se ingreses 'salir')
3. Al final, muestra el total de ventas y la comision total pagada
*/

function ejercicio5() {
  let string = ``;
  let ventas = [];
  while (string !== "salir") {
    string = prompt(
      "Ingresa los siguientes datos separados por comas: \n " +
        "Nombre del vendedor, Monto de la venta SIN CARACTERES ESPECIALES\n" +
        "Escribe 'salir' para SALIR"
    );
    if (string !== "salir") {
      let datos = string.split(",");
      ventas.push({
        vendedor: datos[0],
        monto: parseFloat(datos[1]),
        comision: datos[1] < 10000 ? datos[1] * 0.1 : datos[1] * 0.15,
      });
    }
  }
  let mensaje = ``;
  let totalComisiones = 0;

  ventas.forEach((venta) => {
    mensaje = ` ${mensaje}Vendedor: ${venta.vendedor}  Monto vendido: ${venta.monto} Comision: ${venta.comision}\n`;
    totalComisiones = totalComisiones + venta.comision;
  });

  mensaje = `${mensaje} Comision total: ${totalComisiones}`;
  console.log(mensaje);
}

//llamadas funciones

// ejercicio1();
// ejercicio2();
// ejercicio3();
// ejercicio4();
// ejercicio5()
