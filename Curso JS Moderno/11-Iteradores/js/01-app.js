// for( let i = 0; i <= 200; i++ ) {
//     console.log(`Numero ${i}`);
// }

// for(let i = 0; i <= 50; i++) {
//     console.log(`Numero impar ${++i}`);
// }

// for(let i = 0; i <= 50; i++) {
//     console.log(`Numero par ${i++}`);
// }

// for(let i = 1; i <= 20; i++) {
//     if( i % 2 === 0) {
//         console.log(`El número ${i} es PAR`);
//     } else {
//         console.log(`El número ${i} es IMPAR`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 50}
]

console.log( carrito.length );

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}