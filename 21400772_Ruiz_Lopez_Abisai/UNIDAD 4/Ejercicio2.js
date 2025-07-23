
/*1*/
function comparacion(){
    let n1 = parseInt(Math.random()*100);
    console.log("Primer número 1: " + n1);

    let n2 = parseInt(Math.random()*100);
    console.log("Segundo número 2:" + n2);


    if(n1 > n2){
        console.log("El primer número es mayor");
    }else if (n1 < n2){
        console.log("El segundo número es mayor");
    }else{
        console.log("Ambos números son iguales");
    }
}


/*2*/
function comision(){
    let venta = 0;
    /*VALIDACION*/
    while((venta<5000) || (venta >30000)){
        venta= prompt("Ingresa tu venta final ($5000 - $30000)");
    }
    if(venta < 10000){
        console.log("tu comisión es de $" + venta*0.1);
    }else{
        console.log("tu comisión es de $" + venta*0.15);
    }
}


/*3*/
function tablas(){
    const numero = Math.floor(Math.random() * 8) + 2;
    console.log("Tabla del " + numero);
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

/*4*/
function paresEimpares(){
let pares = 0, impares = 0;

    for (let i = 0; i < 10; i++) {
        const num = Math.floor(Math.random() * 100) + 1;
        console.log("Número " + (i + 1) + ": " + num);
        num % 2 === 0 ? pares++ : impares++;
    }
    console.log("Pares: "+ pares);
    console.log("Impares: "+ impares);
}

/*5*/
function numGenerador(){
    let num;
    do {
        num = parseInt(Math.random()*(6));
        console.log("Número generado: "+ num);
    } while (num !== 0);
}

/*CALLS */
comparacion();
comision();
tablas();
paresEimpares();
numGenerador();