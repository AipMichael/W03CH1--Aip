import Student from "./Student.js";
import DeathEater from "./DeathEater.js";
import MinisterOfMagic from "./MinisterOfMagic.js";
import Personaje from "./Personaje.js";

class Auror extends Personaje {
    lider;

    constructor(nombre, familia, edad, lider) {
        super(nombre, familia, edad);
        this.comunicado = "A promise must never be broken";

        if (
            lider instanceof MinisterOfMagic ||
            lider instanceof DeathEater ||
            lider instanceof Auror ||
            lider instanceof Student
        ) {
            this.lider = lider;
        }
    }
}

export default Auror;
