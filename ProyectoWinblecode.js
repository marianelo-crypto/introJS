// RONDA

let jugador = Math.floor(Math.random() * 2) + 1;
var puntos=[];

// Inicializo puntuación de los jugadores para probar la función

//puntos[1]=40;
//puntos[2]=45;


// Creamos la funcion añadir puntos para ir añadiendo los puntos a cada jugador
function anadirPuntos(jugador){
    let jugador_otro;

    if (jugador===1){
        jugador_otro=2;
    } else {
        jugador_otro=1;
    }

    if (puntos[jugador] === 0){
        puntos[jugador]=15;
        console.log('El jugador',jugador, 'tiene',puntos[jugador],'puntos', 'y el', jugador_otro,'tiene',puntos[jugador_otro]);
    } else if(puntos[jugador] === 15){
        puntos[jugador]=30;
        console.log('El jugador',jugador, 'tiene',puntos[jugador],'puntos', 'y el', jugador_otro,'tiene',puntos[jugador_otro]);
    } else if(puntos[jugador] === 30){
        puntos[jugador]=40;
        if(puntos[otro_jugador]===40){
            console.log('Deuce');
        } else console.log('El jugador',jugador, 'tiene',puntos[jugador],'puntos', 'y el', jugador_otro,'tiene',puntos[jugador_otro]);
    } else if (puntos[jugador]===40){
        if(puntos[1]===puntos[2]){
        puntos[jugador]=45;
        console.log('El jugador',jugador, 'tiene ventaja');
        } else if(puntos[jugador_otro]===45){
        puntos[jugador_otro]=40; 
        console.log('Volvemos a deuce');   
        }else {
            puntos[jugador]=50;
            console.log('El jugador',jugador, 'ha ganado la partida');
        }   
    } else if (puntos[jugador]===45){
        puntos[jugador]=50;
        console.log('El jugador',jugador, 'ha ganado la partida');
    }
}

anadirPuntos(jugador);