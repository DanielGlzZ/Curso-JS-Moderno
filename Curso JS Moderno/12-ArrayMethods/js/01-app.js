const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo

// meses.forEach(mes => {
//     if(mes === 'Noviembre') {
//         console.log('Enero si existe');
//     }
// })

//Arreglo de indices
const resultado = meses.includes('Diciembre');
console.log(resultado);

//Arreglo de objetos

//En un arreglo de objetos se utiliza .some
const existe = carrito.some( producto => producto.nombre === 'Monitor' );

console.log(existe);

//En un arreglo tradicional con .some

const existe2 = meses.some( mes => mes === 'Febrero')

console.log(existe2);