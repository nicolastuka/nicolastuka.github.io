//Declaración de la clase teclado
class Keyboard {

    //propiedad pública
    arrKeys = [];

    //Método constructor
    constructor(arrKeys) {
        for (let i = 0; i < arrKeys.length; i++) {
            this.arrKeys.push(arrKeys[i]);
        }
    }
}