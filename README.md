# introJS
Tercera práctica de mi Bootcamp de Desarrollo Web en Keepcoding.

Wimblecode.

Este es un programa implementado en JavaScript que simula un torneo entre cuatro jugadores. El programa utiliza un objeto jugador para llevar un registro de la información de los jugadores, sus puntos y el progreso del juego.

Asignación de Puntos: Los jugadores pueden ganar puntos de acuerdo a las siguientes reglas: 

¿Como se gana un torneo? 

Si un jugador gana un partido, avanza y se enfrenta al siguiente jugador que ganó su partido.
 
¿Como se gana un partido? 

Cada partido tiene juegos, el que gane 2 es el ganador del partido.

¿Como se gana un juego? 

Para ganar un juego, el jugador tiene que cumplir estos requisitos:

- Debe ganar 4 rondas.
- Para que un juego se considere como victoria, debe tener una diferencia de 2 con respecto al otro jugador cuando llegue a 4. Es decir, si el jugador 1 tiene 4 rondas ganadas y el jugador 2 tiene 3, el jugador 1 aún no es considerado ganador. Tendría que ganar una quinta ronda.
- El máximo de rondas es 7, en caso de un partido muy reñido.

¿Como se gana una ronda? 

El sistema de puntuación es el siguiente:
- Cada jugador puede tener alguno de estos puntos en un juego: 0, 15, 30, 40. Cada vez que un jugador se lleva un punto, la puntuación aumenta en este orden: 0 -> 15 -> 30 -> 40 -> Ganas*.
- Si tienes 40 y ganas la siguiente tirada, ganas la ronda, pero hay reglas especiales:
  
            - Si ambos tienen 40 puntos, los jugadores están en "deuce" (empate).
            - Si el juego está en "deuce", el ganador de un punto obtendrá ventaja y si gana el siguiente punto ganaría la ronda.
            - Si el jugador con ventaja gana la pelota, gana la ronda.
            - Si el jugador sin ventaja gana, vuelven a estar en "deuce". 
Uso:

Abre el archivo index.html en tu navegador.

Abre la consola del navegador para ver la salida del juego.

Funcionalidades:

El programa ofrece las siguientes funcionalidades:

pointWonBy(jugadorNum): Asigna un punto al jugador especificado (1 o 2).
getCurrentRoundScore(): Muestra la puntuación actual de la ronda.
getMatchScore(): Muestra el marcador general del partido.
getGameScore(): Muestra el marcador del juego actual.
getWinner(): Muestra al ganador del partido, si lo hay.
jugarPartido(jugador1,jugador2) que retorna el ganador del partido.
