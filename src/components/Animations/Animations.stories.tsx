import Animations from './Animations';
import { ComponentMeta } from '@storybook/react';
import Tile from '../Tile/Tile';

const StoryConfig: ComponentMeta<typeof Animations> = {
  component: Animations,
};
export default StoryConfig;

export const Default = () => {
  return (
    <Animations>
      <Tile className="animation-pop-in">w</Tile>
    </Animations>
  );
};

export const PopIn = () => {
  return (
    <Animations>
      <Tile className="animation-pop-in">w</Tile>
    </Animations>
  );
};
