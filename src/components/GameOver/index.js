import { PlayerIcon } from "../PlayerIcon";
import { Container, Title, Button } from "./styled";

export function GameOver({ winner, onReset }) {
  return (
    <Container>
      <Title>
        {winner === 0 ? (
          <>
            Draw
            <PlayerIcon player={1} size="sm" />
            <PlayerIcon player={2} size="sm" />
          </>
        ) : (
          <>
            Winner: <PlayerIcon player={winner} size="sm" />
          </>
        )}
      </Title>
      <Button onClick={onReset}>Reset</Button>
    </Container>
  );
}
