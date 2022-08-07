import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.table`
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 6px 15px 2px rgb(40 255 188 / 31%);
`;

export const Row = styled.tr`
  &:first-child td {
    border-top: 0;
  }

  &:last-child td {
    border-bottom: 0;
  }
`;

export const Cell = styled.td`
  width: 100px;
  height: 100px;
  border: 5px solid rgb(224 224 224);
  text-align: center;
  cursor: ${({ selected }) => (selected ? "not-allowed" : "pointer")};

  &:first-child {
    border-left: 0;
  }

  &:last-child {
    border-right: 0;
  }
`;
