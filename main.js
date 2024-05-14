const conjuntoRemeras = [{
    nombre: "REMERA BLANCA",
    precio: 5000
},
{
    nombre: "REMERA NEGRA",
    precio: 5500
},
{
    nombre: "REMERA AZUL",
    precio: 3500
}];

const conjuntoPantalones = [{
    nombre: "JEAN CLARO",
    precio: 10000
},
{
    nombre: "JEAN OSCURO",
    precio: 11000
},
{
    nombre: "JEAN NEGRO",
    precio: 10500
}];

const carrito = [];

function buscar() {
let palabra;
alert("Bienvenido a nuestra tienda. Aquí puedes encontrar nuestras remeras y pantalones.");
palabra = prompt('Escribe "remeras" para buscar las remeras y "pantalones" para buscar pantalones').toLowerCase().trim();
if (palabra == "remeras") {
    console.log("REMERAS");
    console.log(conjuntoRemeras);
} else if (palabra === "pantalones") {
    console.log("PANTALONES");
    console.log(conjuntoPantalones);
} else {
    alert("Por favor, ingresa una opción válida (remeras o pantalones).");
    buscar();
}
return palabra;
}

let palabraElegida = buscar();
let remeraEncontrada;
let pantalonEncontrado;

function mostrarPrompt() {
let continuar = true;
while (continuar) {
    let agregarCarrito = prompt("Escribe el nombre del producto que quieres agregar al carrito tal como aparece").toUpperCase();
    let hayRemera = conjuntoRemeras.find(producto => producto.nombre === agregarCarrito);
    let hayPantalon = conjuntoPantalones.find(producto => producto.nombre === agregarCarrito);
    if (hayRemera || hayPantalon) {
        continuar = false;
        if (palabraElegida === "remeras" && hayRemera) {
            remeraEncontrada = hayRemera;
            carrito.push(remeraEncontrada);
            console.log(remeraEncontrada.nombre + ". Ha sido agregada al carrito.");
        } else if (palabraElegida === "pantalones" && hayPantalon) {
            pantalonEncontrado = hayPantalon;
            carrito.push(pantalonEncontrado);
            console.log(pantalonEncontrado.nombre + ". Ha sido agregado al carrito.");
        }
    } else {
        alert("El producto ingresado no se encuentra en esta sección. Por favor, inténtalo de nuevo.");
    }
}

let continuarCarrito = prompt("¿Quieres seguir agregando productos de la misma sección? (si/no)").toLowerCase();
if (continuarCarrito === "si") {
    mostrarPrompt();
} else {
    let agregarOtros = prompt("¿Quieres agregar productos de la otra sección? (si/no)").toLowerCase();
    if (agregarOtros === "si") {
        palabraElegida = buscar();
        setTimeout(mostrarPrompt, 6000);
    } else {
        console.log("Gracias por tu compra. Aquí está tu carrito:", carrito);
        let total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        console.log ("Este es el Total. " + total);
    }
}
}

setTimeout(mostrarPrompt, 6000);