class Pelicula {
    proyectarEnCine() {
        console.log(this.nombre + " está siendo proyectada");
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling']);
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr']);
pelicula.proyectarEnCine();
console.log(pelicula2);
pelicula2.proyectarEnCine();
export {};
//# sourceMappingURL=script5.js.map