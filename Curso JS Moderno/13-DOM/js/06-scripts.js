// const encabezado = document.querySelector('.contenido-hero h1');
const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// console.log(encabezado.innerText); // si en el css visibility: hidden; no lo va a encontrar
// console.log(encabezado.textContent); // si lo va a encontrar
// console.log(encabezado.innerHTML); // se trae el HTML

// const nuevoHeading = 'Nuevo Heading'
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';

