import Luchadora from "./Luchadora.js";
import Personaje from "./Personaje.js";

class Escudera extends Personaje {
    luchadora;
    pelotismo;

    constructor(nombre, familia, edad, luchador, pelotismo) {
        super(nombre, familia, edad);
        this.comunicado = "Soy una loser";
        this.pelotismo = pelotismo;

        if (luchador instanceof Luchadora) {
            this.luchadora = luchadora;
        }
    }
}

export default Escudera;
