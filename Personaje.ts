
export class Personaje {
    protected _nombre: string;
    protected _nivel: number;
   

    constructor(nombre: string) {
        this._nombre = nombre;
        this._nivel = 1;
        
    }
       
    get nombre() {
        return this._nombre;
    }

    get nivel() {
        return this._nivel;
    }
 

    subirNivel() {
        this._nivel += 1;
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}.`);
    }

    atacar() {
        console.log(`${this.nombre} está atacando.`);
    }

    defender() {
        console.log(`${this.nombre} está defendiendo.`);
    }

    poder() {
        console.log(`${this.nombre} lanza su poder de clase`); //ejemplo de polimorfismo cada clase hija modificara y sobrescribira este metodo dependiendo su clase.
    }
}