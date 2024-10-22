import { Personaje } from './Personaje';
import { TorpedoMagico } from './Ataque'; // El nuevo ataque que el mago puede aprender

export class Mago extends Personaje {
    private _puntosDeVida: number;
    private _ataque: number;
    private _defensa: number;
    protected _ataquesEspeciales: string[]; // Cambiar a un array de strings

    constructor(nombre: string) {
        super(nombre);
        this._puntosDeVida = 15;
        this._ataque = 10;
        this._defensa = 10;
        this._ataquesEspeciales = []; // Inicializar como un array vacío
      }

   // Método para abrir la caja mágica y aprender un ataque
   abrirCajaMagica() {
    const ataqueNuevo = new TorpedoMagico();
    this.aprenderAtaque(ataqueNuevo);
}

// Método para aprender un ataque
private aprenderAtaque(ataque: TorpedoMagico) {
    this._ataquesEspeciales.push(ataque.nombre); // Guardar solo el nombre del ataque
    console.log(`${this.nombre} ha abierto la caja mágica y ha aprendido el ataque ${ataque.nombre}.`);
}

usarAtaqueEspecial() {
    const ataqueEspecial = this._ataquesEspeciales[0]; // Obtener el nombre del primer ataque en el array
    if (ataqueEspecial) {
        console.log(`${this.nombre} está usando el ataque especial: ${ataqueEspecial}.`);
        const ataque = new TorpedoMagico(); 
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
        console.log(`${this.nombre} ha lanzado un hechizo eléctrico.`);
    }

    subirNivel() {
        super.subirNivel();
        this.puntosDeVida += 2;
        this.ataque += 4;
        this.defensa += 4;
    }

      

   // Método de evolución
   async evolucionar(): Promise<Mago | import('./HechiceroSupremo').HechiceroSupremo> {
    if (this.nivel >= 20) {
        const { HechiceroSupremo } = await import('./HechiceroSupremo');
        return new HechiceroSupremo(this.nombre, this.puntosDeVida, this.ataque, this.defensa, this.nivel, this._ataquesEspeciales);
    }
    return this;
}
}
