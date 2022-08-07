import { PlayerIcon } from "../PlayerIcon";
import { IconWrapper, Title, Wrapper } from "./styled";

export function BoardHead({ turn }) {
  return (
    <Wrapper>
      <Title>Turn:</Title>
      <IconWrapper>
        <PlayerIcon player={turn} size="sm" />
      </IconWrapper>
    </Wrapper>
  );
}
