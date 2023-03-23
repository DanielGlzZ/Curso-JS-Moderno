const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción ${id}`);
    },
    crearPlaylist: function(name) {
        console.log(`La playlist ${name} se ha creado`);
    },
    reproducirPlaylist: function(name) {
        console.log(`La playlist ${name} se está reproduciendo`);
    }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar();

reproductor.borrar(20)

reproductor.crearPlaylist('The best playlist ever created')
reproductor.reproducirPlaylist('The best playlist ever created')