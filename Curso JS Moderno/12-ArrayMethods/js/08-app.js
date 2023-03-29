const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Se busca que no se modifique el arreglo original
//Spread operator con arreglo de indices
console.log(meses);
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

// Con push si se modifica el arreglo original

const producto = { nombre: 'Disco Duro', precio: 300 }; 

//No se puede agregar un spread a un objeto, es unicamente con arreglos

const carrito2 = [...carrito, producto];

console.log(carrito2);