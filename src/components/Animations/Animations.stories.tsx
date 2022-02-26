import Animations from './Animations';
import { ComponentMeta } from '@storybook/react';
import Tile from '../Tile/Tile';
import { useToggle } from 'react-use';
import classNames from 'classnames';

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
  const [addClass, toggleAddClass] = useToggle(false);
  const animationClass = classNames({ 'animation-pop-in': addClass });

  return (
    <>
      <button onClick={toggleAddClass}>Toggle</button>
      Animation class: {addClass ? 'on' : 'off'}
      <br />
      <br />
      <Animations>
        <Tile className={animationClass}>w</Tile>
      </Animations>
    </>
  );
};

export const FlipIn = () => {
  const [addClass, toggleAddClass] = useToggle(false);
  const animationClass = classNames({ 'animation-flip-in': addClass });

  return (
    <>
      <button onClick={toggleAddClass}>Toggle</button>
      Animation class: {addClass ? 'on' : 'off'}
      <br />
      <br />
      <Animations>
        <Tile className={animationClass}>w</Tile>
      </Animations>
    </>
  );
};

export const FlipOut = () => {
  const [addClass, toggleAddClass] = useToggle(false);
  const animationClass = classNames({ 'animation-flip-out': addClass });

  return (
    <>
      <button onClick={toggleAddClass}>Toggle</button>
      Animation class: {addClass ? 'on' : 'off'}
      <br />
      <br />
      <Animations>
        <Tile className={animationClass}>w</Tile>
      </Animations>
    </>
  );
};
