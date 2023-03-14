iniciarApp();
function iniciarApp() {
    console.log('Iniciando app...');

    segundaFuncion();
}


function segundaFuncion() {
    console.log('Desde la segunda función');

    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticado usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}