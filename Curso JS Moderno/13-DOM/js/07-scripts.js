// const encabezado = document.querySelector('h1');

// De esta manera puedo saber las distintas propiedades de
// estilo que le puedo aplicar al h1

// console.log(encabezado.style);

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);