import 'server-only';

import { MovieListResultResponse } from '@repo/ui';

export async function getMovieList(): Promise<MovieListResultResponse> {
  const res = await fetch('http://localhost:9090/movie-list');
  return res.json();
}

export async function getTodos(): Promise<string[]> {
  const res = await fetch('http://localhost:9090/todos');
  return res.json();
}
