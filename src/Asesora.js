import Escudera from "./Escudera.js";
import Luchadora from "./Luchadora.js";
import Reina from "./Reina.js";
import Personaje from "./Personaje.js";

class Asesora extends Personaje {
    asesorada;

    constructor(nombre, familia, edad, asesorada) {
        super(nombre, familia, edad);
        this.comunicado = "No sé por qué, pero creo que voy a morir pronto";

        if (
            asesorada instanceof Reina ||
            asesorada instanceof Luchadora ||
            asesorada instanceof Asesora ||
            asesorada instanceof Escudera
        ) {
            this.asesorada = asesorada;
        }
    }
}

export default Asesora;
