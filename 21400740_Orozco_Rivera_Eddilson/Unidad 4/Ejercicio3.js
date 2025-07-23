//1. 
function potencia(base,exponente){
    let resultado = 1;    

    for(let i = 1; i <= exponente; i++){
        resultado =+ resultado * base;
    }
    return console.log(resultado);
}

//potencia(2,4);


//2. 
function MasGrande(){
    let numeros = []
    for(let i = 1; i <= 10; i++){
        numeros.push(parseInt((Math.random()*100)+1));
    }
        console.log(numeros);
    
        let max = 0;
    for(let i = 0; i < numeros.length; i++){    
        if(numeros[i] > max){
            max = numeros[i];
        }
    }

    console.log("Numero mayor: "+max)
}

//MasGrande();

//3. Peliculon
function objeto(){
    let pelicula = {
        titulo: "La granja",
        director: "Steve Oedekerk",
        año: "2006",
        protagonista: "Otis la vaca",
        recaudacion: "$116.5"
    }
    console.log(pelicula);
    delete pelicula.protagonista;
    console.log(pelicula);
}

//objeto();

//4. Tienda
function tienda(ventas){
    let ventas = [];
    let boliviano = true;

    while(boliviano){
        let vendedor;
        
        
        let venta = {
            nombre,
            producto,
            cantidad,
            precio 
        }

        
    }
    
    

console.log(venta);
}



