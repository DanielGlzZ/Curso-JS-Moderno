const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Manera manual de encontrar el indice de un arreglo
// meses.forEach( (mes, index) => {
//     if(mes === 'Diciember') {
//         console.log(`Encontrado en el índice ${index}`);
//     }
// } )

//Encontrar el indice de Abril
const indice = meses.findIndex( mes => mes === 'Diciembre' );
console.log(indice >= 0 ? indice : 'No se encontró el indice');

//Encontrar un indice de un arreglo de objetos.. 
//retorna el primer elemento que encuentre con el valor 100
const indice2 = carrito.findIndex( producto => producto.precio === 100 ); 
console.log(indice2);