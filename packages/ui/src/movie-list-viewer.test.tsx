/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MovieListResultResponse, MovieListViewer } from './movie-list-viewer';

const data: MovieListResultResponse = {
  movieListResult: {
    totCnt: 3,
    source: '',
    movieList: [
      {
        movieCd: '20233271',
        movieNm: '땅에 쓰는 시',
        directors: [],
        companys: [],
      },
    ],
  },
};

describe('Movie List Viewer', () => {
  test('render', () => {
    render(<MovieListViewer data={data} />);
    const totalElement = screen.getByText(/total :/i);
    expect(totalElement).toBeInTheDocument();
  });

  it('should have total count', async () => {
    render(<MovieListViewer data={data} />);
    const totalElement = screen.getByText(/total :/i);
    expect(totalElement).toHaveTextContent(
      data.movieListResult.totCnt.toString(),
    );
  });
});
