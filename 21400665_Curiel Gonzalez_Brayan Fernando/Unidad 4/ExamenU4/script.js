/*
Examen U4: Ejercicio 1 Tabla de multiplicar. 
Crea un programa que pida al usuario un numero del 1 al 10 mediante un prompt() y muestre
su tabla de multiplicar del 1 al 10 en consola.
*/
function tabla(){
    let numero = prompt("dame un numero (1-10): ");
        
    for(let i=1; i<=10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
//tabla();


/*
Examen U4: Ejercicio 2 Promedio de calificaciones.
Pide al usuario que ingrese  5 calificaciones (usando prompt() dentro de un ciclo),
guardalas en un arreglo y al final muestra:
1.- todas las calificaciones.
2.- el promedio.
3.- si el estudiante aprobo (>=6) o no.
*/

function promedioCalificaciones(){
    let calificaciones = [];
    
    for(let i = 0; i < 5; i++){
        let calificacion = parseFloat(prompt(`calif: ${i + 1}: `));
        calificaciones.push(calificacion);
    }
    
    console.log("calif:");
    console.log(calificaciones);
    
    let suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
    let promedio = suma / calificaciones.length;
    
    console.log("Promedio: " + promedio.toFixed(2));
    
    if(promedio >= 6){
        console.log("aprobo");
    }else{
        console.log("reprobo");
    }
}
//promedioCalificaciones();

/*
Examen U4: Ejercicio 3 Contar pares e impares
Genera 20 numeros aleatorios entre 1 y 100, guardalos en un arreglo y muestra
cuantos son pares y cuantos impares.
*/

function contarParesImpares(){
    let numeros = [];
    
    for(let i = 0; i < 20; i++){
        let numero = Math.floor(Math.random() * 100) + 1; // números aleatorios 1-100
        numeros.push(numero);
    }
    
    console.log("Numeros:");
    console.log(numeros);
    
    let pares = 0;
    let impares = 0;
    
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares++;
        }else{
            impares++;
        }
    }
    
    console.log("pares: " + pares);
    console.log("impares: " + impares);
}
//contarParesImpares();

/*
Examen U4: Ejercicio 4 Registro de empleados.
Crea un programa que permita ingresar informacion de varios empleados usando prompt() (preguntar al usuario
si desea guardar otro empleado al terminar un registro) y guarde cada empleado
como un objeto con propiedades: nombre, edad y salario:
1.- al finalizar, muestre cuantos empleados se registraron.
2.- calcula el salario promedio.
3.- muestra los nombres de los empleados mayores de 30 años.
*/

function registroEmpleados(){
    let empleados = [];
    let continuar = true;
    
    while(continuar){
        let nombre = prompt("nombre:");
        let edad = parseInt(prompt("edad:"));
        let salario = parseFloat(prompt("salario:"));
        
        let empleado = {
            nombre: nombre,
            edad: edad,
            salario: salario
        };        
    }
    
    console.log("Empleados registrados: " + empleados.length);
    
    let suma = 0;
    for(let i = 0; i < empleados.length; i++){
        suma = suma + empleados[i].salario;
    }
    let promedio = suma / empleados.length;
    console.log("promedio: $" + promedio);
    
    console.log("mayores a 30 años:");
    for(let i = 0; i < empleados.length; i++){
        if(empleados[i].edad > 30){
            console.log(empleados[i].nombre);
        }
    }
}
//registroEmpleados();

/*
Examen U4: Ejercicio 5 Calculadora de comiciones.
Simula un sistema que calcule la comision de ventas.
pide al usuario el nombre del vendedor, monto de venta y 
calcula su comision:

si vendio menos de $10,000 = 10%
si vendio $10,000 o mas = 15%

1.- guarda cada venta como un objeto en un arreglo.
2.- permite ingresar multiples ventas (hasta que se
ingrese "salir").
3.- al final, muestra el total de ventas y la comision total
pagada. 
*/

function calculadoraComisiones(){
    let ventas = [];
    let continuar = true;
    
    while(continuar){
        let vendedor = prompt("Ingresa el nombre:");
        
        if(vendedor === "salir"){
            continuar = false;
        }else{
            let monto = parseFloat(prompt("monto de la venta:"));
            let comision;
            
            if(monto < 10000){
                comision = monto * 0.10;
            }else{
                comision = monto * 0.15;
            }
        }
    }
    
    let totalVentas = 0;
    let totalComisiones = 0;
    
    console.log("Total de ventas: $" + totalVentas);
    console.log("Total de comisiones pagadas: $" + totalComisiones);
}
//calculadoraComisiones();