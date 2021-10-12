import Componente from "./Componente.js";

class Personaje extends Componente {
    nombre;
    edad;
    vivo = true;
    serie = "Game of Thrones";
    comunicado = "I live to love.";

    static familia = {
        arryn: "casa arryn",
        stark: "casa stark",
        targaryan: "casa targaryan",
    };

    constructor(parentElement, { nombre, familia, edad }) {
        super(parentElement, "character col", "li");
        this.nombre = nombre;
        this.familia = familia;
        this.edad = edad;

        this.generateHtml();
    }

    morir() {
        this.vivo = false;
    }

    comunicar() {
        return this.comunicado;
    }

    generateHtml() {
        const htmlText = `
                        <div class="card character__card">
                            <img
                                src="./images/${this.nombre}.jpg"
                                alt="Nombre y familia del personaje"
                                class="character__picture card-img-top"
                            />
                            <div class="card-body">
                                <h2 class="character__name card-title h4">
                                    ${this.nombre} ${this.familia}
                                </h2>
                                <div class="character__info">
                                    <ul class="list-unstyled">
                                        <li>Edad: 8 años</li>
                                        <li>
                                            Estado:
                                            <i class="fas fa-thumbs-down"></i>
                                            <i class="fas fa-thumbs-up"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="character__overlay">
                                    <ul class="list-unstyled">
                                        <li>Años de reinado: X</li>
                                        <li>Arma: XXX</li>
                                        <li>Destreza: X</li>
                                        <li>Peloteo: X</li>
                                        <li>Asesora a: X</li>
                                        <li>Sirve a: X</li>
                                    </ul>
                                    <div class="character__actions">
                                        <button class="character__action btn">
                                            habla
                                        </button>
                                        <button class="character__action btn">
                                            muere
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <i class="emoji"></i>
                        </div>
                     `;
        this.element.innerHTML = htmlText;
    }
}

/* const bellatrix = {
    nombre: "Bellatrix",
    tipo: Escudera,
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
 */
export default Personaje;
