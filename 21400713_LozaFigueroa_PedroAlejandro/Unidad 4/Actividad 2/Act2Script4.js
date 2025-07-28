/*Escribe un programa que solicite 10 números elatorios entre
el 1 y el 100, y determine cuántos de esos números son pares
y cuántos impares */


let impar = [];
let par = [];
let num = [];
let a = 0;
let b = 0;

for(i=0; i<10; i++){
    do {
        num[i] = prompt("Ingrese un número entre 1 y 100.");
        if(num[i]>100 || num[i]<1){
            alert("El número debe de estar entre 1 y 100 obligatoriamente.");
            num[i]=0;
        }
    } while (num[i]>100 || num[i]<1);

    if(num[i] % 2 === 0){
        par[a]=num[i];
        a++;
    } else {
        impar[b]=num[i];
        b++;
    }
}

console.log("Hay "+a+" números pares y "+b+" números impares.");