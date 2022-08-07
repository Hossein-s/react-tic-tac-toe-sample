import { useState } from "react";
import { BoardHead } from "../BoardHead";
import { PlayerIcon } from "../PlayerIcon";
import { Container, Cell, Row, Table } from "./styled";
import { checkGameFinish } from "../../utils/game-utils";
import { GameOver } from "../GameOver";

export function Board() {
  const [gameState, setGameState] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setTurn] = useState(1);
  const [gameFinished, setGameFinished] = useState(false);
  const [winner, setWinner] = useState(null);

  const onCellClick = (row, col) => {
    if (gameState[row][col] !== 0) {
      return;
    }

    // update game state and turn
    gameState[row][col] = turn;
    setGameState(gameState);
    setTurn(turn === 1 ? 2 : 1);

    const gameStatus = checkGameFinish(gameState);
    if (gameStatus !== null) {
      setGameFinished(true);
      setWinner(gameStatus);
    }
  };

  if (gameFinished) {
    const reset = () => {
      setGameState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
      setTurn(2);
      setGameFinished(false);
      setWinner(null);
    };

    return <GameOver winner={winner} onReset={reset} />;
  }

  return (
    <Container>
      <BoardHead turn={turn} />
      <Table>
        {gameState.map((row, rowIdx) => (
          <Row>
            {row.map((cell, colIdx) => (
              <Cell
                selected={cell !== 0}
                onClick={() => onCellClick(rowIdx, colIdx)}
              >
                {cell === 0 ? "" : <PlayerIcon player={cell} />}
              </Cell>
            ))}
          </Row>
        ))}
      </Table>
    </Container>
  );
}
