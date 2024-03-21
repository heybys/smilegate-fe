import React from 'react';
import { render } from '@testing-library/react';
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

test('render', () => {
  render(<MovieListViewer data={data} />);
  // expect(screen)..toBeTruthy();
});
