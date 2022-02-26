import Animations from './Animations';
import { ComponentMeta } from '@storybook/react';
import Tile from '../Tile/Tile';
import { useToggle } from 'react-use';
import classNames from 'classnames';
import { useEffect } from 'react';

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
  const animationName = 'animation-pop-in';
  const animationDurationInMs = 100;

  const [addClass, toggleAddClass] = useToggle(false);
  useEffect(() => {
    if (addClass) {
      setTimeout(() => {
        toggleAddClass(false);
      }, animationDurationInMs);
    }
  }, [addClass, toggleAddClass]);
  const animationClass = classNames({ [animationName]: addClass });

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
  const animationName = 'animation-flip-in';
  const animationDurationInMs = 250;

  const [addClass, toggleAddClass] = useToggle(false);
  useEffect(() => {
    if (addClass) {
      setTimeout(() => {
        toggleAddClass(false);
      }, animationDurationInMs);
    }
  }, [addClass, toggleAddClass]);
  const animationClass = classNames({ [animationName]: addClass });

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
  const animationName = 'animation-flip-out';
  const animationDurationInMs = 250;

  const [addClass, toggleAddClass] = useToggle(false);
  useEffect(() => {
    if (addClass) {
      setTimeout(() => {
        toggleAddClass(false);
      }, animationDurationInMs);
    }
  }, [addClass, toggleAddClass]);
  const animationClass = classNames({ [animationName]: addClass });

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
