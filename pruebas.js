import Escudera from "./src/Escudera.js";
import Asesora from "./src/Asesora.js";
import Luchadora from "./src/Luchadora.js";
import Reina from "./src/Reina.js";

let characters = [];

const daenerys = new Luchadora(
    "Daenerys",
    "Targaryen",
    17,
    "vivo",
    "dragones",
    0
);
const tyrion = new Asesora(
    "Tyrion",
    "Lannister",
    22,
    "vivo",
    "Daenerys Targaryen"
);
const bronn = new Escudera(
    "Bronn",
    "Aguasnegras",
    30,
    "vivo",
    "Jaime Lannister",
    8
);

characters = [
    {
        nombre: "Bronn",
        tipo: Escudera,
        edad: 30,
        vivo: true,
        serie: "Juego de Tronos",
        comunicado: "Soy una loser",
        familia: "Aguasnegras",
        luchadora: undefined,
        pelotismo: "Jaime Lannister",
    },
    {
        nombre: "Tyrion",
        edad: 22,
        vivo: true,
        serie: "Juego de Tronos",
        comunicado: "No sé por qué, pero creo que voy a morir pronto",
        familia: "Lannister",
        asesorada: undefined,
    },
    {
        nombre: "Daenerys",
        edad: 17,
        vivo: true,
        serie: "Juego de Tronos",
        comunicado: "Primero pego y luego pregunto",
        familia: "Targaryen",
        arma: "vivo",
        destreza: undefined,
    },
];

/* const paintCards = () => {
    const mainContainer = document.querySelector(
        ".characters-list.row.list-unstyled"
    );
    const cardContainer = document.createElement("li");
    mainContainer.appendChild(cardContainer);
    cardContainer.className = "character col";
};
 */

function habilidadesExtra(character) {
    if (character instanceof Reina) {
        return `<li>Años de reinado: ${character.reinado}</li>`;
    } else if (character instanceof Luchadora) {
        return `<li>Arma: ${character.arma}</li>
    <li>Destreza: ${character.destreza}</li>`;
    } else if (character instanceof Escudera) {
        return `<li>Arma: ${character.sirve}</li>`;
    }
}

function paintCards(array) {
    for (let i = 0; i < characters.length; i++) {
        let listBoard = document.getElementById("board");
        listBoard.insertAdjacentHTML(
            "afterbegin",
            `<li class="character col">
          <div class="card character__card">
            <img
              src="/img/${characters[i].nombre.toLowerCase()}.jpg"
              alt="${characters[i].nombre} ${characters[i].familia}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                  characters[i].nombre
              }</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${characters[i].edad}</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                ${characters[i].familia}
                  ${habilidadesExtra(characters[i])}
                  <li>Años de reinado: </li>
                  <li>Arma:</li>
                  <li>Destreza:</li>
                  <li>Peloteo:</li>
                  <li>Asesora a:</li>
                  <li>Sirve a:</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>`
        );
    }
}

characters.forEach(paintCards);
