/* ==================== EJERCICIO 1 ====================

function ejercicio1() {
    
    // Generar dos números aleatorios entre 1 y 100
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    
    console.log(`Primer número generado: ${num1}`);
    console.log(`Segundo número generado: ${num2}`);
    
    if (num1 === num2) {
        console.log("¡Los números son iguales!");
    } else if (num1 > num2) {
        console.log(`${num1} es MAYOR que ${num2}`);
    } else {
        console.log(`${num2} es MAYOR que ${num1}`);
    }
}

ejercicio1();
*/


// ==================== EJERCICIO 2 ====================
/*
function ejercicio2() {
    let ventas;
    
    ventas = 10000; 
    
    // Validar que esté en el rango correcto
    if (ventas < 5000 || ventas > 30000) {
        console.log("Error: Las ventas deben estar entre $5,000 y $30,000");
        return;
    }
    
    let comision;
    let porcentaje;
    
    if (ventas < 10000) {
        porcentaje = 10;
        comision = ventas * 0.10;
    } else {
        porcentaje = 15;
        comision = ventas * 0.15;
    }
    
    console.log('Ventas:' + ventas);
    console.log('Porcentaje de comisión: ' + porcentaje  +'%');
    console.log('Comisión a recibir: ' + comision);
}

ejercicio2();
*/

// ==================== EJERCICIO 3 ====================
// Generar número aleatorio entre 2 y 10
// Mostrar tabla de multiplicar del número generado

/*
function ejercicio3() {
    const numero = Math.floor(Math.random() * 9) + 2; // Entre 2 y 10
    
    console.log(`Número generado: ${numero}`);
    console.log(`Tabla de multiplicar del ${numero}:`);
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} × ${i} = ${numero * i}`);
    }
}

ejercicio3();
*/

// ==================== EJERCICIO 4 ====================
// Solicitar 10 números entre 1 y 100
// Determinar cuántos son pares y cuántos impares
/*
function ejercicio4() {
    const numeros = [];
    let pares = 0;
    let impares = 0;
    
    // Generar 10 números aleatorios para simular entrada
    console.log("Números generados:");
    for (let i = 0; i < 10; i++) {
        const numero = Math.floor(Math.random() * 100) + 1;
        numeros.push(numero);
        
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
        
        console.log(`${i + 1}. ${numero} (${numero % 2 === 0 ? 'par' : 'impar'})`);
    }
    
    console.log('\nResultados:');
    console.log('Números pares: ' +pares);
    console.log('Números impares: ' + impares);
}

ejercicio4();
*/

// ==================== EJERCICIO 5 ====================
// Generar números entre 0 y 5 hasta que salga 0
// Mostrar cada número generado

function ejercicio5() {
    let numero;
    
    console.log("Generando números hasta obtener 0:");
    
    do {
        numero = Math.floor(Math.random() * 6); // Entre 0 y 5
        console.log('Número generado: '+numero);
    } while (numero !== 0);
    
}

ejercicio5();
