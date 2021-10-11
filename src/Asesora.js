import Personaje from "index.js";
class Asesora extends Personaje {
  constructor(nombre, familia, edad, asesorada) {
    super(nombre, familia, edad);
    if (
      asesorada instanceof Reina ||
      asesorada instanceof Asesora ||
      asesorada instanceof Escudera ||
      asesorada instanceof Luchadora
    ) {
      this.asesorada = asesorada;
    }

      comunicar() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
  }

export default Asesora;