import { FC } from 'react';

const Tile: FC = ({ children }) => {
  return (
    <div
      style={{
        // Layouts
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 62,
        height: 62,

        // Text
        fontFamily: '"Clear Sans", "Helvetica Neue", "Arial", "sans-serif"',
        textTransform: 'uppercase',
        fontSize: 32,
        fontWeight: 700,

        // Appearance
        color: '#ffffff',
        backgroundColor: '#6aaa64',
      }}
    >
      {children}
    </div>
  );
};

export default Tile;
