import { render, screen } from '@testing-library/react';
import Tile from './Tile';

it('should display child', () => {
  render(<Tile>a</Tile>);
  expect(screen.getByText('a')).toBeInTheDocument();
});
