function diaSemana(){

}

function tabkaMultiplicar(){
    for (let i=1; i <=10; i ++){
        console.log(`$(n) X $(i) = %(null)`);
    }
}

//tablaMultiplicar(7)


function saludar(){
    let nombre = ("Ana","Luis","Carlos","Marta","Pedro")
    console.log(nombre)

    for (let i = 0; i< nombre.length; i++){
        console.log(` 'Hola, ' ${nombre[i]} `);
    }
}


//saludar()


/*Metodo interno que recorre el arreglo 
For map se hace el recorrido
el nombre de mi arreglo original le decimos que a cada uno de los elementos
sera llamado como n y a ese n se le multiplica por 2

function map (){
    const numeros =[1,2,3,4,5];
    console.log(numeros);
    const dobles = numeros.map(n => n*2);
    console.log(dobles);
}

*/ 

/* Define si es Par o Impar 


function map (){
    const numeros =[1,2,3,4,5];
    console.log(numeros);
    const dobles = numeros.map(n =>  {
        if (n%2 == 0){
            return "Par"
        }
        return "Impar"
    });
    console.log(dobles)
}
*/



function map (){
    let numeros =["Ana","Luis","Carlos","Marta","Pedro"];
    console.log(numeros);
    let dobles = numeros.map(name =>  {
        return name + " algo";
    });
    console.log(dobles)
}


map()

/* Funcion filter */

function map_mayoresQue10 (){
    const numeros =[5,10,15,20,25];
    console.log(numeros)
    const mayoresQue10 = numeros.filter(n => n > 10)
    console.log(mayoresQue10)

}

map_mayoresQue10()

/* Reduced
Toma los elementos de un arreglo y genera un unico valor
*/

function Reduced(){
    const numeros =[1,2,3,4];
    console.log(numeros)        /* Valor previo     */
    const suma = numeros.reduce( (acumulador, n) =>
      (acumulador++),0)   /* Primera iteracion acumulador = 0 */
    console.log()
}

Reduced()

function forEach(){
     const nombres =["Ana","Luis","Carlos","Marta","Pedro"];
    console.log(nombres);
    nombres.forEach(name => "Hola " + name)
}

forEach()


function objeto() {
    let persona = {
        nombre: "Laura",
        edad: 22,
        ciudad: "Tepic",
        /* Anadir un metodo imprimir nombre */

        imprimirNombre: function(){
            console.log("Nombre: "+ this.nombre)
        }
    }
    console.log(persona);
    persona.carrera = "ISC";
    console.log(persona);
    delete persona.ciudad;
    console.log(persona);

    persona.imprimirNombre;
}


objeto()

