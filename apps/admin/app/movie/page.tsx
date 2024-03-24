import { getMovieList } from '@utils/data';
import { Counter } from '@components/Counter';
import { MovieListViewer } from '@repo/ui';

export default async function Movie() {
  const data = await getMovieList();
  return (
    <>
      <h1>movie-list page</h1>
      <MovieListViewer data={data} />
      <Counter initCount={data?.movieListResult?.totCnt} />
    </>
  );
}
