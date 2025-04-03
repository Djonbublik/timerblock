import React from "react";
import styled from "styled-components";

interface BlockProps {
  id: number;
  color: string;
  initialTime: number;
  currentTime: number;
  onRemove: () => void;
  onReset: () => void;
}

const BlockContainer = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 10px; /* Закругленные углы */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Тени */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* Увеличение при наведении */
  }
`;

const Block: React.FC<BlockProps> = ({
  id,
  color,
  initialTime,
  currentTime,
  onRemove,
  onReset,
}) => {
  const handleClick = () => {
    onReset();
  };

  return (
    <BlockContainer color={color} onClick={handleClick}>
      {currentTime}
    </BlockContainer>
  );
};

export default Block;
