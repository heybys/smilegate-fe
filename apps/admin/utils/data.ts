import 'server-only';
import { MovieListResultResponse } from '@repo/ui';

export async function getData() {
  const res = await fetch(
    'http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888',
  );
  return res.json() as Promise<MovieListResultResponse>;
}
