function multiplicar() {
    let numeroM = parseInt(prompt("Numero a multiplicar"))
    console.log("Tabla del: " + numeroM)

    function mostrarTablaMultiplicar(numero) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
    mostrarTablaMultiplicar(numeroM);
}

/*Pide al usuario que ingrese 5 calif usando prompt() dentro de un ciclo
guardalas en un arreglo y al final muestra:
1.- Todas las calificacipones
2.- El promedio
3.- Si el estudiante aprobo (>=6) o no */

function calif(){
    let calificaciones = [];
    let suma = 0;

    for (let i = 0; i < 5; i++) {
        let calificacion = parseFloat(prompt(`Ingresa la calificación ${i + 1}:`));

        while (calificacion < 0 || calificacion > 10) {
            calificacion = parseFloat(prompt(`Calificación inválida. Ingresa de nuevo la calificación ${i + 1} (0 a 10):`));
        }

        calificaciones.push(calificacion);
        suma += calificacion;
    }

    console.log("Calificaciones:", calificaciones);

    let promedio = suma / calificaciones.length;
    console.log("Promedio:", promedio.toFixed(2));
    if (promedio >= 6) {
        console.log("El estudiante aprobó.");
    } else {
        console.log("El estudiante no aprobó.");
    }
}


/*Genera 20 num aleatorios entre 1 y 100
guardalos en un arreglo y muestra cuantos pares y cuantos impar*/
function aleatorios() {
    let al = [];

    for (let i = 0; i < 20; i++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        al.push(numero)
    }

    let pares = 0;
    let impares = 0;

    for (let i = 0; i < al.length; i++) {
        if (al[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log("Números generados:", al);
    console.log(`Total de números pares: ${pares}`);
    console.log(`Total de números impares: ${impares}`);
}



/*
Crea un programa que permita ingresar informacion de varios empleados usando prompt()
preguntar al usuario si desea guardar otro empleado al terminar un registro
y guardar cada empleado como un objeto con propiedades:
nombre, edad, salario
Al finalizar muestra cuantos empleados se registraron
Clacula el salario promedio
Muestra los nombres de los empleados mayores de 30 años
*/
function employeer() {
    let empleados = [];

    let continuar = true;

    while (continuar) {
        let nombre = prompt("Ingresa el nombre del empleado:");
        let edad = parseInt(prompt("Ingresa la edad del empleado:"));
        let salario = parseFloat(prompt("Ingresa el salario del empleado:"));

        empleados.push({
            nombre: nombre,
            edad: edad,
            salario: salario
        });

        let respuesta = prompt("¿Deseas agregar otro empleado? (sí/no)").toLowerCase();
        if (respuesta !== "sí" && respuesta !== "si") {
            continuar = false;
        }
    }

    console.log(`Total de empleados registrados: ${empleados.length}`);

    let sumaSalarios = empleados.reduce((total, emp) => total + emp.salario, 0);
    let salarioPromedio = sumaSalarios / empleados.length;
    console.log(`Salario promedio: $${salarioPromedio.toFixed(2)}`);

    let mayoresDe30 = empleados.filter(emp => emp.edad > 30);
    let nombresMayores = mayoresDe30.map(emp => emp.nombre);

    console.log("Empleados mayores de 30 años:");
    nombresMayores.forEach(nombre => console.log(`- ${nombre}`));
}


/*Simula un sistema que calcule la comision de ventas
pide al usuario el nombre del vendedor, monto de venta y calcula su comision
*Si vendio menos de $10,000 = 10%
*Si vendio $10,000 o mas = 15%
Guarda cada venta como un objeto en un arreglo
Permite ingresar multiples ventas(Hasta que se ingrese "salir"
Al final muestra un total de ventas y la comision total pagada)
*/

function comision(){
    let vendedor = prompt("Nombre del vendedor")
    let ventas = []
    let continuar = true

    while (continuar) {
        let monto = parseFloat(prompt("Monto de venta:"));

        let porcentaje = monto < 10000 ? 0.10 : 0.15;
        let comision = monto * porcentaje;

        ventas.push({
            monto: monto,
            comision: comision
        });

        let respuesta = prompt("¿Deseas agregar otra venta? (sí/salir)").toLowerCase();
        if (respuesta == "salir"|| respuesta == "Salir") {
            continuar = false;
        }else continuar = true;
    }
    console.log(`Nombre del vendedor: ${vendedor}`)
    console.log(`Total de ventas registradas: ${ventas.length}`);
    
    let totalVentas = 0;
    let totalComisiones = 0;

    ventas.forEach(v => {
        console.log(`Venta: $${v.monto} | Comisión: $${v.comision.toFixed(2)}`);
        totalVentas += v.monto;
        totalComisiones += v.comision;
    });
    console.log(`Monto total vendido: $${totalVentas.toFixed(2)}`);
    console.log(`Total de comisiones pagadas: $${totalComisiones.toFixed(2)}`);
}


function menu(){
    let opcion = parseInt(prompt("Ingrese opcion:\n 1: Multiplicar\n 2: Calificaciones22 \n 3: Aleatorios \n 4: Empleado\n 5: Comision"))
    switch(opcion){
        case 1:
            multiplicar()
        case 2:
           calif()
        case 3:
            aleatorios()
        case 4:
            employeer()
        case 5:
           comision()
    }
}
menu();