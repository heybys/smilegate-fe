/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Movie from './page';

it('App Router: Works with Client Components (React State)', () => {
  render(<Movie />);
  expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
    'movie-list page',
  );
});
