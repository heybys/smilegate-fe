interface Response {
  movieListResult: MovieListResult;
}

interface MovieListResult {
  totCnt: number;
  source: string;
  movieList: Movie[];
}

interface Movie {
  movieCd: string;
  movieNm: string;
  movieNmEn: string;
  prdtYear: string;
  openDt: string;
  typeNm: string;
  prdtStatNm: string;
  nationAlt: string;
  genreAlt: string;
  repNationNm: string;
  repGenreNm: string;
  directors: Director[];
  companys: Company[];
}

interface Director {
  peopleNm: string;
}

interface Company {
  companyCd: string;
  companyNm: string;
}

async function getData() {
  const res = await fetch(
    'http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888',
  );
  return res.json() as Promise<Response>;
}

export async function SsrMovieList() {
  const data = await getData();

  return (
    <>
      {data?.movieListResult?.movieList?.map((movie) => (
        <div key={movie.movieCd}>{movie.movieNm}</div>
      ))}
    </>
  );
}
