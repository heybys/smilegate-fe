import 'server-only';
import { MovieListResultResponse } from '@repo/ui';

export async function getData() {
  const res = await fetch(
    'http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&openStartDt=2023&curPage=3',
  );
  return res.json() as Promise<MovieListResultResponse>;
}
