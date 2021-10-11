import Escudera from "Luchadora.js";
import Asesora from "./Asesora.js";
import Luchadora from "./Luchadora.js";
import Reina from "./Reina.js";

class Personaje {
  nombre;
  familia;
  edad;
  estado = "vivo";
  serie = "Juego de Tronos";

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  comunicar() {}

  morir() {
    this.estado = "muerto";
  }
}

const joffrey = new Reina("Joffrey", "Baratheon", 3);
const jaime = new Luchadora("Jaime", "Lannister", 20, "honda", 7);
console.log(jaime.morir());

export default Personaje;
