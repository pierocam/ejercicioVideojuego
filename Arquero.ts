import { Personaje } from './Personaje';
import { TripleDisparo } from './Ataque';

export class Arquero extends Personaje {
    private _puntosDeVida: number;
    private _ataque: number;
    private _defensa: number;
    protected _ataquesEspeciales: string[];

    constructor(nombre: string) {
        super(nombre);
        this._puntosDeVida = 10;
        this._ataque = 15;
        this._defensa = 10;
        this._ataquesEspeciales = []; // Inicializar como un array vacío
    }

 // Método para abrir la caja mágica y aprender un ataque
 abrirCajaMagica() {
  const ataqueNuevo = new TripleDisparo();
  this.aprenderAtaque(ataqueNuevo);
}

// Método para aprender un ataque
private aprenderAtaque(ataque: TripleDisparo) {
  this._ataquesEspeciales.push(ataque.nombre); 
  console.log(`${this.nombre} ha abierto la caja mágica y ha aprendido el ataque ${ataque.nombre}.`);
}

usarAtaqueEspecial() {
    const ataqueEspecial = this._ataquesEspeciales[0]; 
    if (ataqueEspecial) {
        console.log(`${this.nombre} está usando el ataque especial: ${ataqueEspecial}.`);
        const ataque = new TripleDisparo(); 
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

    poder() {
        console.log(`${this.nombre} ha lanzado una trampa que inmoviliza e impide que los enemigos ataquen.`);
    }

    subirNivel() {
        super.subirNivel();
        this.puntosDeVida += 2;
        this.ataque += 6;
        this.defensa += 2;
    }
    async evolucionar(): Promise<Arquero | import('./ArqueroExperto').ArqueroExperto> {
        if (this.nivel >= 20) {
            const { ArqueroExperto } = await import('./ArqueroExperto');
            // Pasar el nivel y las estadísticas actuales al nuevo ArqueroExperto
            return new ArqueroExperto(this.nombre, this.puntosDeVida, this.ataque, this.defensa, this.nivel, this._ataquesEspeciales);
        }
        return this;
    }
    
}
