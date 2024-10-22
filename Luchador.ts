import { Personaje } from './Personaje';
import { GolpePoderoso } from './Ataque';

export class Luchador extends Personaje {
    private _puntosDeVida: number;
    private _ataque: number;
    private _defensa: number;
    protected _ataquesEspeciales: string[]; // Cambiar a un array de strings

    constructor(nombre: string) {
        super(nombre);
        this._puntosDeVida = 20;
        this._ataque = 10;
        this._defensa = 10;
        this._ataquesEspeciales = []; // Inicializar como un array vacío
    }

 // Método para abrir la caja mágica y aprender un ataque
 abrirCajaMagica() {
  const ataqueNuevo = new GolpePoderoso();
  this.aprenderAtaque(ataqueNuevo);
}

// Método para aprender un ataque
private aprenderAtaque(ataque: GolpePoderoso) {
  this._ataquesEspeciales.push(ataque.nombre); 
  console.log(`${this.nombre} ha abierto la caja mágica y ha aprendido el ataque ${ataque.nombre}.`);
}

usarAtaqueEspecial() {
    const ataqueEspecial = this._ataquesEspeciales[0]; 
    if (ataqueEspecial) {
        console.log(`${this.nombre} está usando el ataque especial: ${ataqueEspecial}.`);
        const ataque = new GolpePoderoso(); 
        ataque.realizarAtaque(); 
    } else {
        console.log(`${this.nombre} no tiene ataques especiales disponibles.`);
    }
}

    get puntosDeVida() {
        return this._puntosDeVida;
    }

    set puntosDeVida(value: number) {
        this._puntosDeVida = value;
    }

    get ataque() {
        return this._ataque;
    }

    set ataque(value: number) {
        this._ataque = value;
    }

    get defensa() {
        return this._defensa;
    }

    set defensa(value: number) {
        this._defensa = value;
    }

    get ataquesEspeciales() { 
        return this._ataquesEspeciales.join(", "); // Devolver los nombres como una cadena
    }

    poder() {
        console.log(`${this.nombre} adquiere una coraza inmune a los ataques por 5 segundos.`);
    }

    subirNivel() {
        super.subirNivel();
        this.puntosDeVida += 4;
        this.ataque += 4;
        this.defensa += 2;
    }

    // Método de evolución
    async evolucionar(): Promise<Luchador | import('./Caballero').Caballero> {
        if (this.nivel >= 20) {
            const { Caballero } = await import('./Caballero');
            return new Caballero(this.nombre, this.puntosDeVida, this.ataque, this.defensa, this.nivel, this._ataquesEspeciales);
        }
        return this;
    }
}
