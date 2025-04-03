export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const getRandomTime = () => Math.floor(Math.random() * 20) + 1;
