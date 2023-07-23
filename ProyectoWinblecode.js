

// Declaramos las variables globales 

var puntos = [0, 0]; // Inicializamos el arreglo puntos con valores iniciales para cada jugador
var rondas = [0, 0]; // Inicializamos el arreglo rondas con valores iniciales para cada jugador
var juegos = [0, 0]; // Inicializamos el arreglo juegos con valores iniciales para cada jugador

// Creamos la función añadir puntos para ir añadiendo los puntos a cada jugador
function anadirPuntos(jugador){
    let jugador_otro;

    if (jugador === 1){
        jugador_otro = 2;
    } else {
        jugador_otro = 1;
    }

    if (puntos[jugador] === 0){
        puntos[jugador] = 15;
        console.log('El jugador', jugador, 'tiene', puntos[jugador], 'puntos', 'y el', jugador_otro, 'tiene', puntos[jugador_otro]);
    } else if (puntos[jugador] === 15){
        puntos[jugador] = 30;
        console.log('El jugador', jugador, 'tiene', puntos[jugador], 'puntos', 'y el', jugador_otro, 'tiene', puntos[jugador_otro]);
    } else if (puntos[jugador] === 30){
        puntos[jugador] = 40;
        if (puntos[jugador_otro] === 40){
            console.log('Deuce');
            puntos[jugador] = 45;
            puntos[jugador_otro] = 45;
        } else {
            console.log('El jugador', jugador, 'tiene', puntos[jugador], 'puntos', 'y el', jugador_otro, 'tiene', puntos[jugador_otro]);
        }
    } else if (puntos[jugador] === 40){
        if (puntos[jugador_otro] === 40){
            console.log('Deuce');
            puntos[jugador] = 45;
            puntos[jugador_otro] = 45;
        } else if (puntos[jugador_otro] === 45){
            puntos[jugador_otro] = 40;
            console.log('Volvemos a deuce');   
        } else {
            puntos[jugador] = 50;
            console.log('El jugador', jugador, 'ha ganado la ronda');
        }   
    } else if (puntos[jugador] === 45){
        puntos[jugador] = 50;
        console.log('El jugador', jugador, 'ha ganado la ronda');
    }
}
// PARTIDA
juegos[1]= 0;
juegos[2]= 0;
while(juegos[1] < 2 && juegos[2] < 2 ) {

// JUEGO
    let juego = false;
    let jugador_bis = 0;
    let jugador_otro_bis = 0;
    rondas[1] = 0;
    rondas[2] = 0;
        while (!juego) {
    // RONDA
            puntos[1] = 0;
            puntos[2] = 0;
            while (puntos[1] !== 50 && puntos[2] !== 50){
                let jugador = Math.floor(Math.random() * 2) + 1;
                anadirPuntos(jugador);
            }


            if (puntos[1] === 50){
            jugador_bis = 1;
            jugador_otro_bis = 2;
            } else {
            jugador_bis = 2;
            jugador_otro_bis = 1;
        }

    // Actualizamos las rondas
    rondas[jugador_bis]++;

    if (rondas[jugador_bis]===4 && rondas[jugador_otro_bis]<=2){
            console.log('El jugador', jugador_bis, 'gana el juego');
            juego= true;
        } else if(rondas[jugador_bis]===5 && rondas[jugador_otro_bis]<=3){
            console.log('El jugador', jugador_bis, 'gana el juego');
            juego= true;
        }else if(rondas[jugador_bis]===6 && rondas[jugador_otro_bis]<=4){
            console.log('El jugador', jugador_bis, 'gana el juego');
            juego= true;
        }else if(rondas[jugador_bis]===7){
            console.log('El jugador', jugador_bis, 'gana el juego');
            juego= true;    
        }
        
    }

    juegos[jugador_bis]++;
    if(juegos[jugador_bis]==2){
        console.log('El jugador', jugador_bis,'gana el partido');
    }
}
