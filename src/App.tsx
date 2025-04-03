import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Block from "./components/Block";
import Controls from "./components/Controls";
import { getRandomColor, getRandomTime } from "./utils/helpers";
import { sortBlocks } from "./utils/sortUtils";
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export interface BlockData {
  id: number;
  color: string;
  initialTime: number;
  currentTime: number;
}

const App: React.FC = () => {
  const [blocks, setBlocks] = useState<BlockData[]>([]);
  const [colorInput, setColorInput] = useState("");
  const [sortMode, setSortMode] = useState<"none" | "asc" | "desc">("none");

  useEffect(() => {
    const initialBlocks = Array.from(
      { length: Math.floor(Math.random() * 10) + 5 },
      () => {
        const initialTime = getRandomTime();
        return {
          id: Date.now() + Math.random(),
          color: getRandomColor(),
          initialTime,
          currentTime: initialTime,
        };
      }
    );
    setBlocks(sortBlocks(initialBlocks, sortMode));

    const interval = setInterval(() => {
      setBlocks((prevBlocks) =>
        sortBlocks(
          prevBlocks
            .map((block) => {
              if (block.currentTime <= 1) {
                return { ...block, currentTime: 0 };
              }
              return { ...block, currentTime: block.currentTime - 1 };
            })
            .filter((block) => block.currentTime > 0),
          sortMode
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addBlock = (color: string, initialTime: number) => {
    const newBlock = {
      id: Date.now(),
      color,
      initialTime,
      currentTime: initialTime,
    };
    const newBlocks = [...blocks, newBlock];
    setBlocks(sortBlocks(newBlocks, sortMode));
  };

  const removeBlock = (id: number) => {
    setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== id));
  };

  const resetBlock = (id: number) => {
    setBlocks((prevBlocks) =>
      sortBlocks(
        prevBlocks.map((block) =>
          block.id === id ? { ...block, currentTime: 20 } : block
        ),
        sortMode
      )
    );
  };

  const shuffleBlocks = () => {
    const shuffledBlocks = [...blocks].sort(() => Math.random() - 0.5);
    setBlocks(sortBlocks(shuffledBlocks, sortMode));
  };

  useEffect(() => {
    setBlocks((prevBlocks) => sortBlocks(prevBlocks, sortMode));
  }, [sortMode]);

  const handleSortModeChange = () => {
    if (sortMode === "none") {
      setSortMode("asc");
    } else if (sortMode === "asc") {
      setSortMode("desc");
    } else {
      setSortMode("none");
    }
  };

  const handleAddBlock = () => {
    if (!/^#[0-9A-F]{6}$/i.test(colorInput)) {
      alert("Please enter a valid hex color.");
      return;
    }
    const initialTime = getRandomTime();
    const newBlocks = [
      ...blocks,
      {
        id: Date.now(),
        color: colorInput,
        initialTime,
        currentTime: initialTime,
      },
    ];
    const sortedBlocks = sortBlocks(newBlocks, sortMode);
    setBlocks(sortedBlocks);
    setColorInput("");
  };

  const getSortButtonColor = () => {
    if (sortMode === "none") {
      return "white";
    } else if (sortMode === "asc") {
      return "blue";
    } else {
      return "red";
    }
  };

  return (
    <AppContainer>
      <Controls
        colorInput={colorInput}
        onColorInputChange={(e) => setColorInput(e.target.value)}
        onAddBlock={handleAddBlock}
        onShuffleBlocks={shuffleBlocks}
        onSortModeChange={handleSortModeChange}
        getSortButtonColor={getSortButtonColor}
        sortMode={sortMode}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {blocks.map((block) => (
          <Block
            key={block.id}
            id={block.id}
            color={block.color}
            initialTime={block.initialTime}
            currentTime={block.currentTime}
            onRemove={() => removeBlock(block.id)}
            onReset={() => resetBlock(block.id)}
          />
        ))}
      </div>
    </AppContainer>
  );
};

export default App;
