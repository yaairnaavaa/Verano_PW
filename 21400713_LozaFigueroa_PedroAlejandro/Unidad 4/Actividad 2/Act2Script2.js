/*2. Una tienda departamental paga a sus empleados el 10% de
comisión a quienes vendan menos de $10,000.00 en artículos,
mientras que otorga un 15% a quienes vendan $10,000.00 o
más. Diseña un programa que solicite un número entre $5,000 
y 30,000.00 (validar entrada hasta que sea número válido) en
ventas para un empleado, y muestre en pantalla cuánto dinero
va a recibir por comisión */


let a;
do { a = prompt("Ingrese sus ventas:$");
    if (a<5000 || a>30000) {
        console.log("El número debe de estar entre $5,000 y $30,000.");
    }
}while (a<5000 || a>30000);

let com;

if (a<10000){
    com=a*0.10;
} else {
    com=a*0.15;
}

alert("Vas a recibir $"+com.toFixed(2)+" de comisión.");

