// Creamos el objeto jugador
const jugador = {
  // Creamos el array de objetos gamer
  gamer: [
    {
      nombre: "", 
      numero: 0, 
      puntos: 0, 
      juegos: 0,
      rondas:0,
      partidos:0,
      
    },
    {
      nombre: "", 
      numero: 1, 
      puntos: 0, 
      juegos: 0,
      rondas:0,
      partidos:0,
    },
    {
      nombre: "", 
      numero: 2, 
      puntos: 0, 
      juegos: 0,
      rondas:0,
      partidos:0,
   
    },
  ],

  // Constructor de partida
  createMatch: function (nom1, nom2) {
    // Variables de jugadores
    this.gamer[1].nombre = nom1; // Asignar nombre al jugador 1
    this.gamer[2].nombre = nom2; // Asignar nombre al jugador 2
   

    const self = this; // Guardar la referencia a "this"
    // Función para asignar puntos
    function pointWonBy(jugadorNum) {
      let jugador_otro = jugadorNum === 1 ? 2 : 1; // Obtener el número del otro jugador

      switch (self.gamer[jugadorNum].puntos) {
        case 0:
          self.gamer[jugadorNum].puntos = 15; // Puntuación de 15

          break;
        case 15:
          self.gamer[jugadorNum].puntos = 30; // Puntuación de 30

          break;
        case 30:
          
          self.gamer[jugadorNum].puntos = 40; // Puntuación de 40
          
          break;
        case 40:
          if (self.gamer[jugador_otro].puntos === 40) {
            self.gamer[jugadorNum].puntos = 45; // Puntuación de 45 (ventaja)
          } else if (self.gamer[jugador_otro].puntos === 45) {
            self.gamer[jugador_otro].puntos = 40; // Cambiar la puntuación del otro jugador a 40
          } else {
            self.gamer[jugadorNum].puntos = "Gana";
          }
          break;
        case 45:
          self.gamer[jugadorNum].puntos = "Gana"; // Jugador gana el juego

          break;
      }
    }
    // Función para obtener la puntuación actual
    function getCurrentRoundScore() {
      if(self.gamer[1].puntos ==="Gana"){
        console.log(self.gamer[1].nombre +" ganó la ronda");
      } else
      if(self.gamer[2].puntos ==="Gana"){
        console.log(self.gamer[2].nombre +" ganó la ronda");
      }else
      if(self.gamer[1].puntos === 40 && self.gamer[2].puntos === 40) {
        console.log("Deuce"); // Puntuación en empate (Deuce)
      }else
      if (self.gamer[1].puntos === 45) {
        console.log("Advantage " + self.gamer[1].nombre); // Ventaja para jugador 1
      } else
      if (self.gamer[2].puntos === 45) {
        console.log("Advantage " + self.gamer[2].nombre); // Ventaja para jugador 2
      } else {
        console.log(
          self.gamer[1].nombre +
            " " +
            self.gamer[1].puntos +
            " - " +
            self.gamer[2].puntos +
            " " +
            self.gamer[2].nombre
        ); // Mostrar puntuación normal
      }
    }
    // Función para obtener el marcador del partido
    function getMatchScore() {
      console.log(self.gamer[1].nombre, self.gamer[1].juegos +" _ "+ self.gamer[2].juegos, self.gamer[2].nombre)
    }
    // Función para obtener el marcador del juego
    function getGameScore(){
      console.log(self.gamer[1].nombre, self.gamer[1].rondas +" _ "+ self.gamer[2].rondas, self.gamer[2].nombre)
    }
    // Función para obtener al ganador del partido
    function getWinner(){
      if(self.gamer[1].juegos===2){
        console.log(self.gamer[1].nombre + " ha ganado el partido")
      }
      if(self.gamer[2].juegos===2){
        console.log(self.gamer[2].nombre + " ha ganado el partido")
      }
    }
    
    return {
      pointWonBy: pointWonBy, 
      getCurrentRoundScore: getCurrentRoundScore, 
      getMatchScore: getMatchScore,
      getGameScore : getGameScore,
      getWinner: getWinner,

    };
  },
};
