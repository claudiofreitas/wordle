import { ComponentPropsWithoutRef, FC } from 'react';
import './Animations.scss';
import classNames from 'classnames';

interface Props extends ComponentPropsWithoutRef<'div'> {}

const Animations: FC<Props> = ({ children, className, ...rest }) => {
  const mixedClassNames = classNames('wordle-animations', className);

  return (
    <div {...rest} className={mixedClassNames}>
      {children}
    </div>
  );
};

export default Animations;
