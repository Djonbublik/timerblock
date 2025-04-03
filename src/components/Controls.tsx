import React from "react";
import styled from "styled-components";

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
  background-color: gray;
  color: black;
`;

const Input = styled.input`
  margin-right: 10px;
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
      <Button
        onClick={onSortModeChange}
        style={{ backgroundColor: getSortButtonColor(), color: "black" }} // Set text color to black
      >
        Sort by Time (
        {sortMode === "none"
          ? "None"
          : sortMode === "asc"
          ? "Ascending"
          : "Descending"}
        )
      </Button>
    </ControlsContainer>
  );
};

export default Controls;
