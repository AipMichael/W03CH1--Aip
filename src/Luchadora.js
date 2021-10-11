import Personaje from "index.js";

class Luchadora extends Personaje {
  constructor(nombre, familia, edad, arma, destreza) {
    super(nombre, familia, edad);
    this.arma = arma;
    if (typeof destreza === "number" && destreza < 10 && destreza > 10) {
      this.destreza = destreza;
    }
  }

  comunicar() {
    return "Primero pego y luego pregunto";
  }
}
export default Luchadora;
