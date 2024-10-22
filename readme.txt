Ejercicio Videojuego

Se utilizó herencia, creando una clase padre llamada "Personaje" y tres clases hijas: "Mago", "Luchador" y "Arquero". A su vez, estas tres evolucionan al llegar al nivel 20, 
en "Hechicero Supremo", "Caballero" y "Arquero Experto".

Se incorporaron stats como puntos de vida, ataque y defensa. Estas tienen diferentes niveles al inicio de cada clase y suben de manera diferente para cada una a medida que 
escalan de nivel. Además, al llegar al nivel 20 y evolucionar, no solo mantienen su nivel y sus stats, sino que además adquieren un buff que les mejora un poco más como premio 
por alcanzar el nivel 20.

Se incorporaron métodos de ataque, defensa y poder; este último funciona como un ejemplo de polimorfismo, ya que la clase padre lo incorpora de manera genérica y cada tipo de 
personaje sobrescribirá el método con características propias.

También se incorporó un método especial para abrir una caja mágica y que esta incorpore un ataque especial que se puede ejecutar.

Por ahora, el subir de nivel se realiza mediante un método; con un bucle for podemos hacer pruebas para evolucionar a cualquiera de nuestras clases. En profundidad, y si el 
proyecto avanza, los personajes podrían subir de nivel al ganar experiencia venciendo a enemigos.



