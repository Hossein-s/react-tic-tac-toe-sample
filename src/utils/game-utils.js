export function checkGameFinish(gameState) {
  // check win status in rows
  for (let i = 0; i < 3; i++) {
    if (
      gameState[i][0] !== 0 &&
      gameState[i][0] === gameState[i][1] &&
      gameState[i][1] === gameState[i][2]
    ) {
      return gameState[i][0];
    }
  }

  // check win status in columns
  for (let i = 0; i < 3; i++) {
    if (
      gameState[0][i] !== 0 &&
      gameState[0][i] === gameState[1][i] &&
      gameState[1][i] === gameState[2][i]
    ) {
      return gameState[i][0];
    }
  }

  // check diagonal win
  if (
    gameState[1][1] !== 0 &&
    gameState[0][0] === gameState[1][1] &&
    gameState[1][1] === gameState[2][2]
  ) {
    return gameState[1][1];
  }

  if (
    gameState[1][1] !== 0 &&
    gameState[0][2] === gameState[1][1] &&
    gameState[1][1] === gameState[2][0]
  ) {
    return gameState[1][1];
  }

  // check for draw status
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameState[i][j] === 0) {
        return null;
      }
    }
  }

  // if no empty cell exists, it's draw
  return 0;
}
