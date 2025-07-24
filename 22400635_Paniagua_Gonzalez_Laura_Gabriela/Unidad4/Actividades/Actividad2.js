

/*
Escribe un programa que genere dos números aleatorios y se escriba en consola qué 
números se generaron. Además el programa debeŕa señalar si los números son iguales,
y en caso de que no lo sean, mostrará cuál es el mayor
*/
var firstRN = Math.floor(Math.random() )
var secondRN = Math.floor(Math.random() )
console.log("Primer numero: "+firstRN )
console.log("Segundo numero: "+secondRN)

function sameOrBigger(){
    if(firstRN == secondRN){
        console.log("Son Iguales")
    }else if (firstRN > secondRN){
        console.log(firstRN + "Es mayor")
    }else{
        console.log(secondRN + "Es mayor")
    }
}

sameOrBigger();


/*
Una tienda departamental paga a sus empleados el 10% de comisión a quienes vendan menos de 
10,000.00 en artículos, mientras que otorga un 15%  aquienes vendan $10,000.00 o más.
Diseña un programa que solicite 
*/ 

function calcularComision(ventasEmpleado){

    let porcentajeComision;
    let comision;
    
    console.log(`Ventas del empleado: $${ventasEmpleado.toLocaleString()}`);
    
    if(ventasEmpleado < 10000){
        porcentajeComision = 0.10; // 10%
        comision = ventasEmpleado * porcentajeComision;
        console.log("Comisión aplicable: 10%");
    } else {
        porcentajeComision = 0.15; // 15%
        comision = ventasEmpleado * porcentajeComision;
        console.log("Comisión aplicable: 15%");
    }
    
    console.log(`Comisión a recibir: $${comision.toLocaleString()}`);
    return comision;
}

/*
Diseña un programa que solicite un número entre $5,000 y $30,000 (validar entrada hasta que sea número válido) 
en ventas para un empleado, y muestre en pantalla cuánto dinero va a recibir por comisión.
*/
function calcularComisionConValidacion(){
    
    let ventasEjemplos = [3000, 8500, 15000, 35000, 10000];
    
    ventasEjemplos.forEach(ventas => {
        console.log(`\nProcesando ventas: $${ventas.toLocaleString()}`);
        
        if(ventas < 5000 || ventas > 30000) {
            console.log(" El monto debe estar entre $5,000 y $30,000");
            return;
        }
        
        let porcentajeComision = ventas < 10000 ? 0.10 : 0.15;
        let comision = ventas * porcentajeComision;
        
        console.log(`Ventas válidas: $${ventas.toLocaleString()}`);
        console.log(`Comisión (${porcentajeComision * 100}%): $${comision.toLocaleString()}`);
    });
}

calcularComisionConValidacion();
console.log("-------------------");

/*
Elabora un programa que genere un número aleatorio entre el número 2 y el 10, 
y después escriba la tabla de multiplicar del número generado.
*/
function tablaMultiplicar(){
    
    let numeroAleatorio = Math.floor(Math.random() * 9) + 2; // Entre 2 y 10
    console.log(`Tabla de multiplicar del ${numeroAleatorio}:`);
    
    for(let i = 1; i <= 10; i++){
        let resultado = numeroAleatorio * i;
        console.log(`${numeroAleatorio} x ${i} = ${resultado}`);
    }
}

tablaMultiplicar();
console.log("-------------------");

/*
Escribe un programa que solicite 10 números aleatorios entre el 1 y el 100, 
y determine cuántos de esos números son pares y cuántos impares.
*/
function contarParesImpares(){
    
    let numeros = [];
    let pares = 0;
    let impares = 0;
    
    for(let i = 0; i < 10; i++){
        let numero = Math.floor(Math.random() * 100) + 1;
        numeros.push(numero);
        
        if(numero % 2 === 0){
            pares++;
        } else {
            impares++;
        }
    }
    
    console.log("Números generados:", numeros);
    console.log(`Números pares: ${pares}`);
    console.log(`Números impares: ${impares}`);
    
    // Mostrar cuáles son pares e impares
    console.log("Pares:", numeros.filter(num => num % 2 === 0));
    console.log("Impares:", numeros.filter(num => num % 2 !== 0));
}

contarParesImpares();
console.log("-------------------");



/*
Escribe un programa que genere de forma continua números entre el 0 y el 5, 
hasta que salga el número 0.
*/
function generarHastaCero(){
    
    let numeroGenerado;
    let intentos = 0;
    let numerosGenerados = [];
    
    do {
        numeroGenerado = Math.floor(Math.random() * 6); // 0 a 5
        numerosGenerados.push(numeroGenerado);
        intentos++;
        console.log(`Intento ${intentos}: ${numeroGenerado}`);
    } while(numeroGenerado !== 0);
    
    console.log(`Salió 0, ${intentos}`);
    console.log("Números generados:", numerosGenerados);
}

generarHastaCero();
console.log("-------------------");
calcularComision(8500);  // Menos de 10,000
console.log("-------------------");
calcularComision(12000); // 10,000 o más
console.log("-------------------");
calcularComision(10000); // Exactamente 10,000


