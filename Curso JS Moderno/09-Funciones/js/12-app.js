const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 50}
]

// .map crea un nuevo arreglo

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`)

// .forEach no crea un nuevo arreglo

carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`))

console.log(nuevoArreglo);
