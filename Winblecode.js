const jugador = {
    gamer: [
        {
            nombre: "",
            numero: 0,
            puntos: 0,
        },
        {
            nombre: "",
            numero: 1,
            puntos: 0,
        },
        {
            nombre: "",
            numero: 2,
            puntos: 0,
        },
    ],

    // Constructor de partida
    createMatch: function (nom1, nom2) {
        // Variables de jugadores
        this.gamer[1].nombre = nom1;
        this.gamer[2].nombre = nom2;

        const self = this; // Guardar la referencia a "this"

        // Función para asignar puntos
        function pointWonBy(jugadorNum) {
            let jugador_otro = jugadorNum === 1 ? 2 : 1;

            switch (self.gamer[jugadorNum].puntos) {
                case 0:
                    self.gamer[jugadorNum].puntos = 15;
                    break;
                case 15:
                    self.gamer[jugadorNum].puntos = 30;
                    break;
                case 30:
                    if (self.gamer[jugador_otro].puntos === 40) {
                        self.gamer[jugadorNum].puntos = 40;
                    } else {
                        self.gamer[jugadorNum].puntos = 40;
                    }
                    break;
                case 40:
                    if (self.gamer[jugador_otro].puntos === 40) {
                        self.gamer[jugadorNum].puntos = 45;
                    } else if (self.gamer[jugador_otro].puntos === 45) {
                        self.gamer[jugador_otro].puntos = 40;
                    }
                    break;
                case 45:
                    if (self.gamer[jugador_otro].puntos === 40) {
                        self.gamer[jugadorNum].puntos = "Gana";
                        
                    }
                    break;
            }
        }

        function getCurrentRoundScore() {
            if(self.gamer[1].puntos===40 && self.gamer[2].puntos===40) {
                console.log("Deuce");
            } else if (self.gamer[1].puntos===45){
                console.log("Advantage " + self.gamer[1].nombre);    
            }else if (self.gamer[2].puntos===45){
                console.log("Advantage " + self.gamer[2].nombre);    
            }else{
            console.log(
                self.gamer[1].nombre +
                " " +
                self.gamer[1].puntos +
                " - " +
                self.gamer[2].puntos +
                " " +
                self.gamer[2].nombre
            );
        }
    }
        return {
            pointWonBy: pointWonBy,
            getCurrentRoundScore: getCurrentRoundScore
        };
    }
}
