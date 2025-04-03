import { BlockData } from "../App";

export const sortBlocks = (
  blocks: BlockData[],
  sortMode: "none" | "asc" | "desc"
): BlockData[] => {
  let sortedBlocks = [...blocks];

  if (sortMode === "asc") {
    sortedBlocks.sort((a, b) => a.currentTime - b.currentTime);
  } else if (sortMode === "desc") {
    sortedBlocks.sort((a, b) => b.currentTime - a.currentTime);
  }

  return sortedBlocks;
};
