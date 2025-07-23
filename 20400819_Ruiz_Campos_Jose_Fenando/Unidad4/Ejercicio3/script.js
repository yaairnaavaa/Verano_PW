
function potencia(){
    let base = parseInt(prompt("Ingrese la base:"));
    let exponente = parseInt(prompt("Ingrese el exponente:"));
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    console.log("El resultado de " + base + " elevado a la potencia de " + exponente + " es: " + resultado);
}


function masGrande(){
    numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros[i] = Math.floor(Math.random() * 100);
    }
    console.log("Números generados: " + numeros.join(", "));
    let mayor = numeros.reduce((max, num) => num > max ? num : max, 0);
    console.log("El número más grande es: " + mayor);
}

function Pelicula(){
    let pelicula = {
        titulo: "Pacific Rim",
        director: "Guillermo del Toro",
        año: 2013,
        protagonista: "Charlie Hunnam",
        productora: ""
    };
    console.log(pelicula);
    pelicula.productora = "Legendary Pictures";
    console.log("Pelicula actualizada:", pelicula);
}

function tienda(){
    let vendedores = [];
    let numVendedores = parseInt(prompt("Ingrese el número de vendedores:"));
    for (let j = 0; j < numVendedores; j++) {
        let ventas = {
            Vendedor: "",
            No_ventas: 0,
            Laptop: 0,
            Mouse: 0,
            Teclado: 0,
            total: 0
        };

        let vendedor = prompt(`Ingrese el nombre del vendedor ${j + 1}:`);
        let no_ventas = parseInt(prompt(`Ingrese el número de ventas realizadas por ${vendedor}:`));
        ventas.Vendedor = vendedor;
        ventas.No_ventas = no_ventas;

        do {
            let producto;
            let opcion;
            do {
                opcion = prompt(
                    "Seleccione el producto vendido:\n1. Laptop\n2. Mouse\n3. Teclado"
                );
                switch (opcion) {
                    case "1":
                        producto = "Laptop";
                        break;
                    case "2":
                        producto = "Mouse";
                        break;
                    case "3":
                        producto = "Teclado";
                        break;
                    default:
                        alert("Opción no válida. Intente de nuevo.");
                }
            } while (!["1", "2", "3"].includes(opcion));
            let precio = parseFloat(prompt(`Ingrese el precio de ${producto}:`));
            let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} vendidos:`));
            ventas[producto] = (ventas[producto] || 0) + cantidad;
            ventas.total += precio * cantidad;
        } while (confirm("¿Desea ingresar más ventas para el mismo vendedor?"));
        vendedores.push(ventas);
        console.log("Ventas registradas para", vendedor, ":", ventas);
    }

    let totalIngresos = vendedores.reduce((acc, v) => acc + v.total, 0);
    console.log("Total de ingresos: " + totalIngresos);
    console.log("Unidades vendidas por producto:");
    console.log("Laptops:", vendedores.reduce((acc, v) => acc + v.Laptop, 0));
    console.log("Mouses:", vendedores.reduce((acc, v) => acc + v.Mouse, 0));
    console.log("Teclados:", vendedores.reduce((acc, v) => acc + v.Teclado, 0));
    console.log("Vendedores:", vendedores.map(v => v.Vendedor).join(", "));
    console.log("Vendedor con mas ventas:", vendedores.reduce((max, v) => v.total > max.total ? v : max, vendedores[0]));
}


function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Calcular potencia\n2. Encontrar número más grande\n3. Mostrar información de película\n4. Registrar ventas de tienda\n5. Salir");
        switch (opcion) {
            case "1":
                potencia();
                break;
            case "2":
                masGrande();
                break;
            case "3":
                Pelicula();
                break;
            case "4":
                tienda();
                break;
            case "5":
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "5");
}

menu();