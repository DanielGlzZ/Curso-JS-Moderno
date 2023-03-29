// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, index) => {
    console.log(`${index} : ${pendiente}`);
} )

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 50}
]

const nuevoArreglo = carrito.forEach( (producto) => producto.nombre);

const nuevoArreglo2 = carrito.map( (producto) => producto.nombre);

console.log(nuevoArreglo);

console.log(nuevoArreglo2);