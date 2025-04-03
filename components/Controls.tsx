import React from "react";
import styled from "styled-components";
import SortButton from "./SortButton"; // Импортируйте обновленный компонент

interface ControlsProps {
  colorInput: string;
  onColorInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddBlock: () => void;
  onShuffleBlocks: () => void;
  onSortModeChange: () => void;
  getSortButtonColor: () => string;
  sortMode: "none" | "asc" | "desc";
}

const ControlsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Controls: React.FC<ControlsProps> = ({
  colorInput,
  onColorInputChange,
  onAddBlock,
  onShuffleBlocks,
  onSortModeChange,
  getSortButtonColor,
  sortMode,
}) => {
  return (
    <ControlsContainer>
      <Input
        type="text"
        value={colorInput}
        onChange={onColorInputChange}
        placeholder="Enter hex color"
      />
      <Button onClick={onAddBlock}>Add Block</Button>
      <Button onClick={onShuffleBlocks}>Shuffle Blocks</Button>
      <SortButton bgColor={getSortButtonColor()} onClick={onSortModeChange}>
        {`Sort by Time (${
          sortMode === "none"
            ? "None"
            : sortMode === "asc"
            ? "Ascending"
            : "Descending"
        })`}
      </SortButton>
    </ControlsContainer>
  );
};

export default Controls;
