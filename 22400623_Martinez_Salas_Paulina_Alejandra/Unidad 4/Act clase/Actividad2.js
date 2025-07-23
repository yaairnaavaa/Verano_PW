
/*1. Escribe un programa que genere dos numeros aleatorios
y que escriba en consola qué numeros se generaron. 
Además el programa deberá señalar si los numeros son 
iguales y en caso de que no lo sean, mostrará cual es el mayor
*/

function aleatorios() {
    let n1 = Math.floor(Math.random() * 100) + 1;
    let n2 = Math.floor(Math.random() * 100) + 1;
    console.log(n1);
    console.log(n2);

    if (n1 == n2) {
        console.log("Los números son iguales");
    } else if (n1 >= n2) {
        console.log("El número " + n1 + " es mayor que " + n2);
    } else {
        console.log("El número " + n2 + " es mayor que " + n1);
    }
}

//aleatorios();

/*2. Una tienda departamental paga a sus empleados el 10% de comisión a quienes
vendan menos de $10,000.00 en artículos, mientras que otorga un 15% a quienes
vendan $10,000.00 o más. Diseña un programa que solicite un número entre $5,000 
y $30,000.00 (validar entrada hasta que sea número válido) en ventas para un empleado,
y muestre en pantalla cuánto dinero va a recibir por comisión.
 */
function tienda() {
    let n1 = parseInt(prompt("Ingresa : (5,000.00-30,000.00)"));
    // Validación de entrada
    if (n1 < 5000 || n1 > 30000) {
        console.log("Ingresa un número válido entre 5,000.00 y 30,000.00");
    } else {
        if (n1 < 10000) {
            let n2 = (n1 * .10);
            console.log("Te ganaste $" + n2 + " de comisión.");
        } else if (n1 > 10000) {
            let n3 = (n1 * .15);
            console.log("Te ganaste $" + n3 + " de comisión.");
        }
    }
}

//tienda();
/*3. Elabora un programa que genere un número aleatorio entre el número 2 y el 10, y
despues escriba la tabla de multiplicar del número generado.
*/
function aleatorio2() {
    let n1 = Math.floor(Math.random() * 9) + 2; // Genera un número entre 2 y 10
    console.log("Número aleatorio generado: " + n1);

    console.log("Tabla de multiplicar del " + n1 + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(n1 + " x " + i + " = " + (n1 * i));
    }

}
//aleatorio2();

/*4. Escribe un programa que solicite 10 números aleatorios entre el 1 y el 100, y
determine cuántos de esos números son pares y cuántos impares.*/
function aleatorio3() {
    let n1 = Math.floor(Math.random() * 100) + 1;

    if (n1 % 2 === 0) {
        console.log(n1 + " es par");

    }
}

//aleatorio3();
/*5. Escribe un programa que genere de forma continua números entre el 0 y el 5,
 hasta que salga el número 0*/

function aleatorio4() {
    let n1;
    do {
        n1 = Math.floor(Math.random() * 6); 
        console.log(n1);
    } while (n1 !== 0); // Continúa hasta que el número sea 0   
}
//aleatorio4();