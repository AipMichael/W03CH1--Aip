import Personaje from "./Personaje.js";

class MinisterOfMagic extends Personaje {
    MinisterOfMagicdo;

    constructor(nombre, familia, edad, term) {
        super(nombre, familia, edad);
        this.term = term;
        this.comunicado = "Nonsense! ";
    }
}

export default MinisterOfMagic;
