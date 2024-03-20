import { getData } from '@app/utils/data';
import { Counter } from '@components/counter';
import { MovieListViewer } from '@repo/ui';

export default async function Movie() {
  const data = await getData();
  return (
    <>
      <h1>movie-list page</h1>
      <MovieListViewer data={data} />
      <Counter initCount={data?.movieListResult?.totCnt} />
    </>
  );
}
