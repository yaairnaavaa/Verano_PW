/*
Ejercicio 1.

Escribe un programa que genere dos números aleatorios y que escriba en consola 
qué números se generaron. Además, el programa deberá señalar si los números 
son iguales, y en caso de que no lo sean, mostrará cuál es el mayor.
*/

function ejercicio1() {
    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);

    console.log("Número aleatorio 1: " + num1)
    console.log("Número aleatorio 2: " + num2)

    if(num1 > num2 ) {
        console.log(num1 + " es MAYOR que " + num2);
    } else if (num2 > num1 ) {
        console.log(num2 + " es MAYOR que " + num1);
    } else {
        console.log("Son IGUALES");
    }
}

console.log("Ejercicio 1.");
ejercicio1();

console.log("");

/*
Ejercicio 2.

Una tienda departamental paga a sus empleados el 10% de comisión a quienes
vendan menos de $10,000.00 en artículos, mientras que otorga un 15% a quienes
vendan $10,000.00 o más. Diseña un programa que solicite un número entre $5,000
y $30,000 (validar entrada hasta que sea un número válido) en ventas para un 
empleado, y muestre en pantalla cuánto dinero va a recibir por comisión.
*/

function ejercicio2() {
    let ventas;

    do {
        ventas = parseInt(prompt("Ingrese sus Ventas: "))
    } while(ventas < 5000 || ventas > 30000);

    if(ventas < 10000) {
        ventas *= 0.10;
    } else {
        ventas *= 0.15;
    }

    console.log("Dinero por comisión = " + ventas)
}

console.log("Ejercicio 2.");
//ejercicio2();

console.log("");

/*
Ejercicio 3.

Elabora un programa que genere un número aleatorio entre el número 2 y el 10,
y después escriba la tabla de multiplicar del número generado.
*/

function ejercicio3() {
    let min = 2, max = 10;
    let num = Math.round(Math.random() * (max - min)) + min;

    for (let i=1; i<=10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

console.log("Ejercicio 3.");
ejercicio3();

console.log("");

/* 
Ejercicio 4.

Escribe un programa que solicite 10 números aleatorios entre el 1 y el 100,
y determine cuántos de esos números son pares y cuántos impares.
*/

function ejercicio4() {
    let num, par = 0, impar = 0;

    for(let i=1; i <= 10; i++) {
        num = Math.round(Math.random() * 100) + 1;
        console.log("Número " + i + ": " + num);

        if(num % 2 == 0) {
            par++;
        } else {
            impar++;
        }
    }

    console.log("Cant. de Pares: " + par);
    console.log("Cant. de Impares: " + impar);
}

console.log("Ejercicio 4.");
ejercicio4();

console.log("");

/* 
Ejercicio 5.

Escribe un programa que genere de forma continua números 
entre el 0 y el 5, hasta que salga el número 0.
*/

function ejercicio5() {
    let num;
    
    do {
        num = Math.round(Math.random() * 5);
        console.log(num);
    } while(num != 0);
}

console.log("Ejercicio 5.");
ejercicio5();
