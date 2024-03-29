/**
 * @jest-environment jsdom
 */
// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Movie from './page';

jest.mock('../../utils/data', () => ({
  getMovieList: () =>
    Promise.resolve({
      movieListResult: {
        totCnt: 100, // 가짜 응답 데이터
      },
    }),
}));

jest.mock('@repo/ui', () => {
  return {
    __esModule: true,
    MovieListViewer: () => {
      // 목킹할 컴포넌트의 가짜 구현
      return <div>Mocked MovieListViewer</div>;
    },
  };
});

jest.mock('../../components/counter', () => {
  return {
    __esModule: true,
    Counter: () => {
      // 목킹할 컴포넌트의 가짜 구현
      return <div>Mocked Counter</div>;
    },
  };
});

describe('Movie Page', () => {
  test('render', async () => {
    render(await Movie());
    const titleElement = screen.getByText(/movie-list page/i);
    expect(titleElement).toBeInTheDocument();
  });
});
