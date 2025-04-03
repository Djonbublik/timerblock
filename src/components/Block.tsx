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
