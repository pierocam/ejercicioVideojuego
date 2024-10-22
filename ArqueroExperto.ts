import { Arquero } from './Arquero';

export class ArqueroExperto extends Arquero {
    constructor(nombre: string, puntosDeVida: number, ataque: number, defensa: number, nivel: number, ataquesEspeciales: string[]) {
        super(nombre);

        // Mantener el nivel actual
        this._nivel = nivel;

        // Mantener las estadísticas y aplicar los incrementos
        this.puntosDeVida = puntosDeVida + 5;
        this.ataque = ataque + 15;
        this.defensa = defensa + 5;
        this._ataquesEspeciales = [...ataquesEspeciales];
    }
}