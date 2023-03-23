const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción ${id}`),
    crearPlaylist: name => console.log(`La playlist ${name} se ha creado`),
    reproducirPlaylist: name => console.log(`La playlist ${name} se está reproduciendo`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter SandMan'
reproductor.obtenerCancion;

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar();

reproductor.borrar(20)

reproductor.crearPlaylist('The best playlist ever created')
reproductor.reproducirPlaylist('The best anime playlist')