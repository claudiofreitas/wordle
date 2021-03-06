import Tile from './Tile';
import { ComponentMeta } from '@storybook/react';

const StoryConfig: ComponentMeta<typeof Tile> = {
  component: Tile,
};
export default StoryConfig;

export const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Tile variant="correct">t</Tile>
      <Tile>e</Tile>
      <Tile variant="present">s</Tile>
      <Tile variant="absent">t</Tile>
      <Tile />
    </div>
  );
};

export const Empty = () => {
  return <Tile />;
};

export const Undisclosed = () => {
  return <Tile variant="undisclosed">w</Tile>;
};

export const Correct = () => {
  return <Tile variant="correct">w</Tile>;
};

export const Present = () => {
  return <Tile variant="present">w</Tile>;
};

export const Absent = () => {
  return <Tile variant="absent">w</Tile>;
};
