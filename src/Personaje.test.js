import Personaje from "./Personaje";

describe("Given the class Personaje", () => {
    describe("When it receives the specifications for parent: .characters-list, and an object: bellatrix ", () => {
        test("Then it should create an element <li> with two classes: .character col", () => {
            // Arrange
            const parent = document.querySelector(".characters-list");
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

            // Act
            new Personaje(parent, bellatrix);
            const result = parent.querySelector(className);
            // Assert
            expect(result).not.toBeNull(expected);
        });
    });
});
