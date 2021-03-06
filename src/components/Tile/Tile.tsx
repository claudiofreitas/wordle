import { ComponentPropsWithoutRef, CSSProperties, FC } from 'react';
import classNames from 'classnames';

type TileVariant = 'correct' | 'present' | 'absent' | 'empty' | 'undisclosed';

interface Props extends ComponentPropsWithoutRef<'div'> {
  variant?: TileVariant;
}

const Tile: FC<Props> = ({ children, className, variant = 'empty' }) => {
  const mixedClassNames = classNames('wordle-tile', className);

  const baseStyle: CSSProperties = {
    // Layouts
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: 62,
    height: 62,

    // Text
    fontFamily: '"Clear Sans", "Helvetica Neue", "Arial", "sans-serif"',
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: 700,

    // Appearance
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',

    // Other
    userSelect: 'none',
  };

  const styleByVariant: Record<TileVariant, CSSProperties> = {
    correct: {
      color: '#ffffff',
      backgroundColor: '#6aaa64',
    },
    present: {
      color: '#ffffff',
      backgroundColor: '#c9b458',
    },
    absent: {
      color: '#ffffff',
      backgroundColor: '#787c7e',
    },
    empty: {
      color: '#000000',
      backgroundColor: '#ffffff',
      borderColor: '#d3d6da',
    },
    undisclosed: {
      color: '#000000',
      backgroundColor: '#ffffff',
      borderColor: '#000000',
    },
  };

  return (
    <div
      className={mixedClassNames}
      style={{
        ...baseStyle,
        ...styleByVariant[variant],
      }}
    >
      {children}
    </div>
  );
};

export default Tile;
