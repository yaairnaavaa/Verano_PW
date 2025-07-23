function calificacion(){
    let calif = parseInt(prompt("Ingresa tu calificación (0-100)"));

    console.log(calif);

    if(calif < 70){
        console.log("Reprobaste");
    }else if(calif < 80){
        console.log("Suficiente");
    }else if(calif < 90){
        console.log("Notable");
    }else{
        console.log("Excelente");
    }    
}

function diaSemana(){
    let dia = parseInt(prompt("Ingresa el numero del dia de la semana (1-7)"));

    console.log(dia);

    switch(dia){
        case 1: console.log("Domingo"); break;

        case 2: console.log("Lunes"); break;

        case 3: console.log("Martes"); break;

        case 4: console.log("Miercoles"); break;

        case 5: console.log("Jueves"); break;

        case 6: console.log("Viernes"); break;

        case 7: console.log("Sabado"); break;

        default: console.log("Ingresar un valor valido (1-7)");
    }
}

function diaSemana2(){
    let dia = prompt("Ingresa el nombre del dia").toLowerCase();

    console.log(dia);

    switch(dia){
        case "domingo": console.log(1); break;

        case "lunes": console.log(2); break;

        case "martes": console.log(3); break;

        case "miercoles": console.log(4); break;

        case "jueves": console.log(5); break;

        case "viernes": console.log(6); break;

        case "sabado": console.log(7); break;

        default: console.log("Ingresar un nombre de dia valido");
    }
}

function tablaMultiplicar(n){
    for(let i = 1; i <= 10; i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}

function saludar(){
    let nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];
    console.log(nombres);

    for(let i = 0; i < nombres.length; i++){
        console.log(`Hola, ${nombres[i]}`);
    }
}

function map(){
    const numeros = [1, 2, 3, 4, 5];
    const dobles = numeros.map(n => n*2);
    const par = numeros.map(n => {
        if(n % 2 == 0){
            return "Par";
        } 
        return "Impar";
    });

    console.log(numeros);
    console.log(par);
    console.log(dobles);
}

function filter(){
    const numeros = [5, 10, 15, 20];
    const mayorque10 = numeros.filter(n => n > 10);

    console.log(numeros);
    console.log(mayorque10);
}

function reduce(){
    const numeros = [1, 2, 3, 4];
    const suma = numeros.reduce((acumulador, n) => 
        (acumulador+n), 0
    );

    console.log(numeros);
    console.log(suma);
}

function forEach(){
    let nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];
    console.log(nombres);

    let n2 = nombres.forEach(name => console.log("Hola " + name));
}

function objeto(){
    let persona = {
        nombre: "Carim",
        edad: "21",
        ciudad: "Tepic",
        imprimirNombre: function() {
            console.log("Nombre: " + this.nombre)
        }
    }

    console.log(persona);
    
    persona.carrera = "ISC";

    console.log(persona);

    delete persona.ciudad;

    console.log(persona);

    persona.imprimirNombre();
}

function potencia(n1, n2){
    var n3 = n1;
    for(let i=1; i<n2; i++){
        n1 = n1 * n3;
    }

    console.log(n1);
}

function ej2_2(){
    var nums = [];
    var n2 = 0;
    var mayor = [];

    for(let i=0; i<10; i++){
        nums[i] = Math.floor(Math.random() * 100) + 1;
        console.log(nums[i]);

        if(nums[i]>n2){
            n2 = nums[i];
        }
    }

    console.log("El numero mayor en el arreglo es: " + n2);
}

function ej2_3(){
    let pelicula = {
        Titulo: "Superman" ,
        Director: "James Gunn",
        Fecha: "2025",
        Protagonista: "Superman",
        Recaudacion: "$406,833,462"
    }

    console.log(pelicula);

    delete pelicula.Protagonista;

    console.log(pelicula);

    pelicula.productora = "DC Films"

    console.log(pelicula);
}

function ej2_4(){
    var ventas = [];
    var i = 0;
    var ingresos = 0;
    var vendido = 0;
    var difproducts = [];
    var cantproducts = [];

    do{
        ventas[i] = {
            nombre: prompt("Nombre: "),
            producto: prompt("Producto: ").toLowerCase(),
            cantidad: parseInt(prompt("Cantidad: ")),
            precio: parseInt(prompt("Precio por unidad: ")),
            totalVendido: function() {
                //console.log(this.cantidad * this.precio);
                return (this.cantidad * this.precio);
            }
        };

        difproducts.push(ventas[i].producto);
        cantproducts.push(ventas[i].cantidad);
 
        do{
            var more = (prompt("Desea agregar otro producto (Si / No): ").toLowerCase());
            //console.log(more);
        }while(more !== "si" && more !== "no")

        ingresos = ingresos + ventas[i].totalVendido();


        i++;
    }while(more == "si")

    const groupBy = (arr, getKey) => {
        return arr.reduce((memo, item) => {
            const key = getKey(item)
            memo[key] ||= [];
            memo[key].push(item);
            return memo;
        }, {})
    }

    const ventasPorNombre = groupBy(ventas, ({nombre}) => nombre);
    console.log(ventasPorNombre);
        
    console.log(ventas);

    console.log("Total de ventas: " + i);
    console.log("Total de ingresos: " + ingresos);
    //console.log(difproducts);
    //console.log(cantproducts);
    console.log("Unidades vendidas por producto");
    for(let y = 0; y < i; y++){
        console.log(difproducts[y] + ": " + cantproducts[y]);
    }

    const max = ventas.reduce(function(prev, current) {
        return (prev && prev.cantidad > current.cantidad) ? prev : current
    }) //returns object

    console.log("Vendedor con mas ventas: " + max.nombre);
}

//potencia(2,3);
ej2_4();

