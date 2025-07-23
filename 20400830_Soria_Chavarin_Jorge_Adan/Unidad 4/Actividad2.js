
function NumAleatorio(){
    let a = Math.random(12)*100;
    let b = Math.random(12)*100;
    console.log(a);
    console.log(b);
    if(a == b){
        console.log("Son numero iguales")
    }
    else {
        console.log("Son numeros diferentes");
    }
}

function TiendaDepartamental(){
    let ventas = prompt("Ingresa la cantidad por ventas netas");
    let comision = parseFloat(ventas);

    if(ventas >= 5000 && ventas <= 10000){
        console.log("La cantidad de comision es:"+comision*.10);

    }else if(ventas >= 10000 && ventas <= 30000){
        console.log("La cantidad de comision es:"+comision*.15);
    } else {
        console.log("Ingrese una cantidad valida")
    }
}

function TableAleatorio(){
    let numero = Math.floor(Math.random() * 9) + 2;
console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

}

    function ContarPares(){
        let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(`Número ${i + 1}: ${aleatorio}`);

    if (aleatorio % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Total pares: ${pares}`);
console.log(`Total impares: ${impares}`);


}

function generarCero(){
    let numeroGenerado;

do {
    numeroGenerado = Math.floor(Math.random() * 6);
    console.log(`Número generado: ${numeroGenerado}`);
} while (numeroGenerado !== 0);

console.log("Programa finalizado");

}
//generarCero();
//ContarPares();
//TableAleatorio();
//TiendaDepartamental();
//NumAleatorio();