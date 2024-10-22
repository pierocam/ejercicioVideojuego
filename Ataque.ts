export interface Ataque {
    nombre: string;
    realizarAtaque(): void;
}

export class TorpedoMagico implements Ataque {
    nombre: string;

    constructor() {
        this.nombre = "Torpedo Mágico";
    }

    realizarAtaque() {
        console.log(`Realizando un poderoso ${this.nombre}.`);
    }
}


export class GolpePoderoso implements Ataque {
    nombre: string;

    constructor() {
        this.nombre = "Golpe Poderoso";
    }

    realizarAtaque() {
        console.log(`Realizando un ${this.nombre}.`);
    }
}

export class TripleDisparo implements Ataque {
    nombre: string;

    constructor() {
        this.nombre = "Triple Disparo";
    }

    realizarAtaque() {
        console.log(`Realizando un ${this.nombre}.`);
    }
}