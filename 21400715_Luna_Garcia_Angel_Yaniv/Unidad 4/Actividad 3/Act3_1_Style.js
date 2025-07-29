
function Act3_1(){
   let base= prompt("Ingresa la base: ");
   let expo= prompt("Ingresa el exp: ");
        let num=1;
        for(i=1;i<=expo;i++){
                num=(base*num);
                console.log(base+" ^ "+i+" = "+num);
        }
        console.log("El resultado es: "+num)
}


function Act3_2(){
        let arreglo = [10];
        let mayor=0;
        for(i=0;i<10;i++){
           arreglo[i]=Math.round(Math.random()*100);
           if (mayor<arreglo[i]){
                mayor=arreglo[i];
                console.log('Mayor en iteracion '+i+' es: '+mayor)
           } 

        }
        console.log('El mayor numero del arreglo es: '+mayor)
}

function Act3_3(){
   const pelicula = {
    titulo: "Titanes del Pacífico",
    director: "Guillermo del Toro",
    Lanzamiento: 2013,
    protagonista: "Mako",
    taquilla: 12000000 
};     
        console.log(pelicula);
        delete pelicula.protagonista;        
        console.log(pelicula);
        pelicula.productora="Atlus";
        console.log(pelicula);
}

function Act3_4(){
        
}

Act3_1();
Act3_2();
Act3_3();
