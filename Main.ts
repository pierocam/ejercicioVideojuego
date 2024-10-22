import { Mago } from './Mago';
import { Luchador } from './Luchador';
import { Arquero } from './Arquero';


(async () => {
    const mago = new Mago("Facha22");
    mago.atacar();
    mago.poder();
    mago.subirNivel();
    mago.abrirCajaMagica();
    mago.usarAtaqueEspecial(); 
    const magoEvolucionado = await mago.evolucionar();
    console.log(magoEvolucionado);

    const luchador = new Luchador("Xenoverse_");
    luchador.defender();
    luchador.poder();
    luchador.subirNivel();
    luchador.abrirCajaMagica();
    luchador.usarAtaqueEspecial();
    const luchadorEvolucionado = await luchador.evolucionar();
    console.log(luchadorEvolucionado);

    const arquero = new Arquero("FlechaVerde32");
    arquero.atacar();
    arquero.poder();
    for (let i = 0; i < 19; i++) {
        arquero.subirNivel();
    }
    arquero.abrirCajaMagica();
    arquero.usarAtaqueEspecial();
        const arqueroEvolucionado = await arquero.evolucionar();
    console.log(arqueroEvolucionado);
})();