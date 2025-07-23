//Actividad 2 

//ejercicio 1:
console.log("-------Ejercicio 1-------")
let n1 = Math.floor(Math.random() * 1000);
let n2 = Math.floor(Math.random() * 1000);

console.log(n1);
console.log(n2);

if (n1 < n2) {
    console.log("Es mayor:" + n2)
} else if (n1 > n2) {
    console.log("Es mayor: " + n1)
} else if (n1 == n2) {
    console.log("Son iguales")
}

//ejercicio 2:
console.log("-------Ejercicio 2-------")

/*
let venta
let comision
do {
    const v = prompt("venta realizada: ")
    venta = parseInt(v, 10)

    if (isNaN(venta)) {
        alert("numero invalido")
    } else if (venta < 5000 || venta > 30000) {
        alert("numero debe ser entre 5000 y 30000")
    }
} while (isNaN(venta) || venta < 5000 || venta > 30000)
if (venta < 10000) {
    comision = (venta * 10) / 100
} else {
    comision = (venta * 15) / 100
}

alert(" tu comision es de: " + comision)

*/

//ejercicio 3:
console.log("-------Ejercicio 3-------")
let nu = Math.floor((Math.random() * 10) + 1)

for (let i = 1; i <= 10; i++) {
    console.log(nu + "x" + i + "=" + (nu * i))
}

//ejercicio 4:
console.log("-------Ejercicio 4-------")

let x = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 100) + 1;

    if (x % 2 === 0) {
        console.log(x + " es par");
    } else (console.log(x + " es impar"))
}

//ejercicio 5:
console.log("-------Ejercicio 5-------")

let y

do {
    y = Math.floor(Math.random() * 11)
    console.log("numero: " + y)
} while (y !== 0)
