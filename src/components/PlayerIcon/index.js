import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Player1, Player2 } from "./styled";

export function PlayerIcon({ player, size = "lg" }) {
  if (player === 1) {
    return <Player1 icon={faXmark} size={size} />;
  } else {
    return <Player2 icon={faCircle} size={size} />;
  }
}
