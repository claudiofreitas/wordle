import Tile from './Tile';

export default {};

export const Default = () => {
  return (
    <div>
      <Tile state="correct">t</Tile>
      <Tile>e</Tile>
      <Tile state="present">s</Tile>
      <Tile state="absent">t</Tile>
      <Tile />
    </div>
  );
};

export const Correct = () => {
  return <Tile state="correct">w</Tile>;
};

export const Empty = () => {
  return <Tile>w</Tile>;
};

export const Present = () => {
  return <Tile state="present">w</Tile>;
};

export const Absent = () => {
  return <Tile state="absent">w</Tile>;
};

export const Undisclosed = () => {
  return <Tile state="undisclosed">w</Tile>;
};
