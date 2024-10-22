import { Luchador } from './Luchador';

export class Caballero extends Luchador {
    constructor(nombre: string, puntosDeVida: number, ataque: number, defensa: number, nivel: number, ataquesEspeciales: string[]) {
        super(nombre);

        // Mantener el nivel y estadísticas previas
        this._nivel = nivel;
        this.puntosDeVida = puntosDeVida + 15;
        this.ataque = ataque + 25;
        this.defensa = defensa + 15;
        this._ataquesEspeciales = [...ataquesEspeciales];
    }
}