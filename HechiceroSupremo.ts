import { Mago } from './Mago';

export class HechiceroSupremo extends Mago {
    constructor(nombre: string, puntosDeVida: number, ataque: number, defensa: number, nivel: number, ataquesEspeciales: string[]) {
        super(nombre);

        // Mantener el nivel y estadísticas previas
        this._nivel = nivel;
        this.puntosDeVida = puntosDeVida + 10;
        this.ataque = ataque + 20;
        this.defensa = defensa + 10;
        this._ataquesEspeciales = [...ataquesEspeciales];
    }
}