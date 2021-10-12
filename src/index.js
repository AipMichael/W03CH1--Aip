import Escudera from "./Escudera.js";
import Luchadora from "./Luchadora.js";
import Reina from "./Reina.js";
import Personaje from "./Personaje.js";
import Componente from "./Componente.js";

const bellatrix = {
    nombre: "Bellatrix",
    edad: 46,
    vivo: true,
    serie: "Harry Potter",
    comunicado: "I killed Sirius Black",
    familia: "Lestrange",
    luchadora: undefined,
    pelotismo: "Lord Voldemort",
};

const parent = document.querySelector(".characters-list");

const bella = new Personaje(parent, bellatrix);
