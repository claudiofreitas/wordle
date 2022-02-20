import Tile from './Tile';

export default {};

export const Default = () => {
  return (
    <div>
      <Tile variant="correct">t</Tile>
      <Tile>e</Tile>
      <Tile variant="present">s</Tile>
      <Tile variant="absent">t</Tile>
      <Tile />
    </div>
  );
};

export const Correct = () => {
  return <Tile variant="correct">w</Tile>;
};

export const Empty = () => {
  return <Tile>w</Tile>;
};

export const Present = () => {
  return <Tile variant="present">w</Tile>;
};

export const Absent = () => {
  return <Tile variant="absent">w</Tile>;
};

export const Undisclosed = () => {
  return <Tile variant="undisclosed">w</Tile>;
};
