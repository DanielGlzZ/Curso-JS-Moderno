const carrito = [];

//  Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular", 
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

const producto4 = {
    nombre: "Celular 2", 
    precio: 100
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);

console.table(carrito);

// Eliminar ultimo elemento de un arreglo...
// carrito.pop();

// Eliminar el inicio del arreglo
// carrito.shift();

carrito.splice(3, 1);
console.table(carrito);