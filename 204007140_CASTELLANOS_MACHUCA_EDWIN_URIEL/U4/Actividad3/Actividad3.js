function potencia(base,exponente){
    let resul =1;
    for(let i=0;i<exponente;i++){
        resul=resul*base
    }
    console.log(resul)
}
potencia();
function numeros (){
    numeros=[];
    let mayor=0;

    for(let i =0;i<10;i++){
        numeros[i] =  Math.floor(Math.random() * 101);
  
        if(mayor> numeros[i]){
            mayor=mayor;
        }else if(numeros[i]>mayor){
            mayor=numeros[i];
        }
    }

    console.log(numeros);
    console.log(mayor);


}
function pelicula(){

    let peli={
        Titulo: "The Shining",
        Director:"Stanley Kubrick",
        AñoLan: 1980,
        Prota:"Jack Nicholson como Jack Torrance",
        Recauda:"44 millones de dolares"

    }

    console.log(peli);
    delete peli.Prota;
    console.log(peli);
    peli.productora = "Warner Bros";
    console.log(peli);


}

function cuatro(){
    do{
        var ventas = prompt("Ingresa la cantidad de ventas");
    }while(ventas!=Number(ventas) || ventas<=0);

    const name = [];
    const nameproducto = [];
    const cantidad = [];
    const preciouni = [];
    const total = [];

    for(let i=0;i<ventas;i++){
        let ven = {
            name: prompt("Ingresa el nombre del vendedor"),
            nameproducto: prompt("Ingresa el nombre del producto"),
            cantidad: parseInt(prompt("Ingresa la cantidad de productos vendidos")),
            preciouni: parseFloat(prompt("Ingresa el precio unitario"))

        };

        total[i]=ven.cantidad*ven.preciouni
        name[i] = ven.name;
        nameproducto[i] = ven.nameproducto;
        cantidad[i] = ven.cantidad;
        preciouni[i] = ven.preciouni;
    }
    console.log("Total de ventas realizadas: " + ventas);
    console.log("Total de ingresos:"+(total.reduce((acumulador,n)=>(acumulador+n),0)));
    console.log("Productos y cantidades vendidas:");
    nameproducto.forEach((producto, i) => {
    console.log(`Producto: ${producto}, Cantidad vendida: ${cantidad[i]}`);
    });


}
