import Personaje from "index.js";

class Reina extends Personaje {
  constructor(nombre, familia, edad, reinado) {
    super(nombre, familia, edad);
    if (typeof reinado === "number") {
      this.reinado = reinado;
    }
  }

  comunicar() {
    return "Vais a morir todos";
  }
}

export default Reina;
