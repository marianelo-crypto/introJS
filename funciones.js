let scorePlayer1 = 0;
let scorePlayer2 = 0;
let player1Name = "Player 1";
let player2Name = "Player 2";
let roundsWonPlayer1 = 0;
let roundsWonPlayer2 = 0;

function createMatch(player1, player2) {
  player1Name = player1;
  player2Name = player2;
  console.log(`${player1Name} vs ${player2Name}`);
}

function pointWonBy(player) {
  if (player === 1) {
    scorePlayer1++;
  } else if (player === 2) {
    scorePlayer2++;
  }

  if (scorePlayer1 >= 4 && scorePlayer1 >= scorePlayer2 + 2) {
    roundWonBy(1);
  } else if (scorePlayer2 >= 4 && scorePlayer2 >= scorePlayer1 + 2) {
    roundWonBy(2);
  }

  console.log(getCurrentRoundScore());
}

function roundWonBy(player) {
  if (player === 1) {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    roundsWonPlayer1++;
    console.log(`¡${player1Name} wins the game!`);
  } else if (player === 2) {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    roundsWonPlayer2++;
    console.log(`¡${player2Name} wins the game!`);
  }
}

function getCurrentRoundScore() {
  if (scorePlayer1 >= 3 && scorePlayer2 >= 3) {
    if (scorePlayer1 === scorePlayer2) {
      return "Deuce";
    } else if (scorePlayer1 === scorePlayer2 + 1) {
      return `Advantage ${player1Name}`;
    } else if (scorePlayer2 === scorePlayer1 + 1) {
      return `Advantage ${player2Name}`;
    }
  }

  return `${player1Name} ${getScoreDescription(scorePlayer1)} - ${player2Name} ${getScoreDescription(scorePlayer2)}`;
}

function getScoreDescription(score) {
  switch (score) {
    case 0:
      return "0";
    case 1:
      return "15";
    case 2:
      return "30";
    case 3:
      return "40";
    default:
      return "50";
  }
}

function getGameScore() {
  const roundsNeededPlayer1 = Math.max(0, 4 - roundsWonPlayer1);
  const roundsNeededPlayer2 = Math.max(0, 4 - roundsWonPlayer2);
  return `--- Game Score ---
${player1Name}: ${roundsWonPlayer1} - ${player2Name}: ${roundsWonPlayer2}
${player1Name} needs ${roundsNeededPlayer1} rounds to win the game.
${player2Name} needs ${roundsNeededPlayer2} rounds to win the game.`;
}

function getMatchScore() {
  if (roundsWonPlayer1 >= 4 || roundsWonPlayer2 >= 4) {
    if (roundsWonPlayer1 > roundsWonPlayer2) {
      return `¡${player1Name} ha ganado el juego!`;
    } else if (roundsWonPlayer1 < roundsWonPlayer2) {
      return `¡${player2Name} ha ganado el juego!`;
    } else {
      return `El juego está empatado, sigue jugando.`;
    }
  }
}









