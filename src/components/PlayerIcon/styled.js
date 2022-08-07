import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Player1 = styled(FontAwesomeIcon)`
  font-size: ${({ size }) => (size === "lg" ? "50px" : "30px")};
  color: #ff2db8;
`;

export const Player2 = styled(FontAwesomeIcon)`
  font-size: ${({ size }) => (size === "lg" ? "40px" : "27px")};
  color: #3699e3;
`;
