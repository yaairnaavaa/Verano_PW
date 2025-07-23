//EXAMEN UNIODAD 4 - Juan Carlos Gonzalez Delgado
/*
//EJERCICIO 1 ----------------------------------------------------------------
let numero = parseInt(prompt("Ingresa un número del 1 al 10:")); 
   
if (!isNaN(numero) && numero >= 1 && numero <= 10) {
  console.log("Tabla del: " + numero);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
} else {
  console.log("Número inválido. Por favor ingresa un número del 1 al 10.");
}

//EJERCICIO 2 ----------------------------------------------------------------

let calificaciones = [];
let suma = 0;

// Pedir 5 calificaciones
for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt(`Ingresa la calificación ${i + 1}:`));

    // Validar que sea un número válido
    while (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        calificacion = parseFloat(prompt(`Calificación inválida. Ingresa nuevamente la calificación ${i + 1} (0 a 10):`));
    }

    calificaciones.push(calificacion);
    suma += calificacion;
}

// Calcular promedio
let promedio = suma / calificaciones.length;

// Mostrar resultado
console.log("Calificaciones ingresadas:", calificaciones.join(", "));
console.log("Promedio:", promedio.toFixed(2));
if (promedio >= 6) {
    console.log("El estudiante aprobó.");
} else {
    console.log("El estudiante no aprobó.");
}

// ==================== EJERCICIO 3 ====================
let numeros = [];
let pares = 0;
let impares = 0;

for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 100) + 1;
    numeros.push(num);

    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

// Mostrar los números
console.log("Números generados:", numeros.join(", "));
console.log("Cantidad de números pares:", pares);
console.log("Cantidad de números impares:", impares);

// ==================== EJERCICIO 4 ====================
let empleados = [];
let continuar = true;

while (continuar) {
    let nombre = prompt("Ingrese el nombre del empleado:");
    let edad = parseInt(prompt("Ingrese la edad del empleado:"));
    let salario = parseFloat(prompt("Ingrese el salario del empleado:"));

    while (isNaN(edad) || edad <= 0) {
        edad = parseInt(prompt("Edad inválida. Ingrese una edad válida:"));
    }

    while (isNaN(salario) || salario < 0) {
        salario = parseFloat(prompt("Salario inválido. Ingrese un salario válido:"));
    }

    let empleado = {
        nombre: nombre,
        edad: edad,
        salario: salario
    };

    empleados.push(empleado);

    let respuesta = prompt("¿Deseas registrar otro empleado? (sí/no)").toLowerCase();
    if (respuesta !== "sí" && respuesta !== "si") {
        continuar = false;
    }
}

let totalEmpleados = empleados.length;
let sumaSalarios = 0;
let mayores30 = [];

for (let emp of empleados) {
    sumaSalarios += emp.salario;
    if (emp.edad > 30) {
        mayores30.push(emp.nombre);
    }
}

let promedioSalario = sumaSalarios / totalEmpleados;

// Mostrar resultados
console.log("Total de empleados registrados:", totalEmpleados);
console.log("Salario promedio:", promedioSalario.toFixed(2));
console.log("Empleados mayores de 30 años:", mayores30.length > 0 ? mayores30.join(", ") : "Ninguno");

*/
// ==================== EJERCICIO 5 ====================
let ventas = [];
let entrada;

while (true) {
    entrada = prompt("Ingresa el nombre del vendedor (o escribe 'salir' para terminar):");

    if (entrada === null || entrada.toLowerCase() === "salir") {
        break;
    }

    let nombre = entrada;
    let monto = parseFloat(prompt("Ingresa el monto de la venta de " + nombre + ":"));

    
    while (isNaN(monto) || monto < 0) {
        monto = parseFloat(prompt("Monto inválido. Ingresa un monto válido para " + nombre + ":"));
    }

    
    let comision = monto < 10000 ? monto * 0.10 : monto * 0.15;

    
    ventas.push({
        vendedor: nombre,
        montoVenta: monto,
        comision: comision
    });
}

let totalVentas = 0;
let totalComisiones = 0;

for (let venta of ventas) {
    totalVentas += venta.montoVenta;
    totalComisiones += venta.comision;
}

console.log("Total de ventas realizadas:", ventas.length);
console.log("Monto total vendido: $" + totalVentas.toFixed(2));
console.log("Comisión total pagada: $" + totalComisiones.toFixed(2));