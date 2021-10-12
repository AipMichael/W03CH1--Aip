import Personaje from "./Personaje.js";

class DeathEater extends Personaje {
    wand;
    skill;

    constructor(nombre, familia, edad, wand, skill) {
        super(nombre, familia, edad);
        this.comunicado = "LI killed Serius Black";
        this.wand = wand;
        if (skill >= 0 && skill <= 10) {
            this.skill = skill;
        }
    }
}
export default DeathEater;
