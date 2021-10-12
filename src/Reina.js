import Personaje from "./Personaje.js";

class Reina extends Personaje {
    reinado;

    constructor(nombre, familia, edad, reinado) {
        super(nombre, familia, edad);
        this.reinado = reinado;
        this.comunicado = "Vais a morir todos! ";
    }
}

export default Reina;
