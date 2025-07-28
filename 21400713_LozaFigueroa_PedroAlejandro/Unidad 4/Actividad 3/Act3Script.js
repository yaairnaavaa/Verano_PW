
//Act 1
function Potencia(basee, potenciaa){
    let base = prompt("Ingrese la base");
    let potencia = prompt("Ingrese el exponente");

    for (potencia;potencia>0;potencia--){
        base=base*base;
    }

    console.log("El resultado de la potencia es: "+base);
}

Potencia(base,potencia);


//Act 2
function NumGrande() {
    let numeros = [];
    let mayor=0;

    for (i=0;i<10;i++){
        numeros[i]=Math.floor(Math.random()*100)+1;

        if (numeros[i]>mayor){
            mayor=numeros[i];
        }
    }

    console.log("El número más grande encontrado fue: "+mayor);
}

//Act 3
function DatosPelicula(){
    
}