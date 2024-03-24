import { http } from 'msw/core/http';
import { HttpResponse, HttpHandler } from 'msw';
import { MovieListResultResponse } from '@repo/ui';

const movieListResultResponse: MovieListResultResponse = {
  movieListResult: {
    totCnt: 3,
    source: '',
    movieList: [
      {
        movieCd: '20231111',
        movieNm: '땅에 쓰는 시',
        directors: [],
        companys: [],
      },
      {
        movieCd: '20232222',
        movieNm: '터미네이터',
        directors: [],
        companys: [],
      },
      {
        movieCd: '20233333',
        movieNm: '웡카',
        directors: [],
        companys: [],
      },
    ]
  }
};
const todos = ['숙제하기', '넷플릭스보기', '청소하기'];

export const handlers: HttpHandler[] = [
  // 영화 목록
  http.get('/movie-list', async () => {
    return HttpResponse.json(movieListResultResponse);
  }),

  // 할일 목록
  http.get('/todos', async () => {
    return HttpResponse.json(todos);
  }),

  // 할일 추가
  http.post('/todos', async ({ request }) => {
    todos.push(await request.text());
    return new HttpResponse(null, {
      status: 201,
    });
  }),
];
