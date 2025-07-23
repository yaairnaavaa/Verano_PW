function ej1(){
    const n1 = Math.floor(Math.random()*100);
    const n2 = Math.floor(Math.random()*100);
    console.log("El primer numero aleatorio es: "+n1)
    console.log("El segundo numero aleatorio es: "+n2)
    if(n1>n2){
        console.log("N1 es mayor a N2");
    }else if(n2>n1){
        console.log("N2 es mayor a N1");
    }else{
        console.log("N1 es igual a N2");
    }
}

function ej2(){
    let ingreso = parseInt(prompt("Ingresa tus ingresos en ventas ($5000 - $30000)"));

    while (ingreso < 5000 || ingreso > 30000 || isNaN(ingreso)) {
        alert("Ingreso inválido");
        ingreso = parseInt(prompt("Ingresa tus ingresos en ventas ($5000 - $30000)"));
    }

    alert("Ingreso válido: $" + ingreso);

    let comision;
    if (ingreso < 10000) {
        comision = ingreso * 0.10;
    } else {
        comision = ingreso * 0.15;
    }

    alert("Tu comisión es: $" + comision);
}

function ej3() {
    let numero = Math.floor(Math.random() * 9) + 2;
    console.log("Número para la tabla: " + numero);

    let contador = 1;
    while (contador <= 10) {
        console.log(numero + " x " + contador + " = " + (numero * contador));
        contador++;
    }
}

function ej4() {
    let i = 1;
    let pares = 0;
    let impares = 0;

    while (i <= 10) {
        let num = Math.floor(Math.random() * 100) + 1;
        console.log("Número " + i + ": " + num);

        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }

        i++;
    }

    console.log("Pares: " + pares);
    console.log("Impares: " + impares);
}

function ej5() {
    let num = -1;

    while (num !== 0) {
        num = Math.floor(Math.random() * 6); // entre 0 y 5
        console.log("Número entre 0 y 5: " + num);
    }

    console.log("Salio 0");
}

ej3();