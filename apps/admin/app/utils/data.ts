import 'server-only';

export async function getData() {
  const res = await fetch(
    'http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888',
  );
  return res.json() as Promise<MovieListResultResponse>;
}

export interface MovieListResultResponse {
  movieListResult: MovieListResult;
}

export interface MovieListResult {
  totCnt: number;
  source: string;
  movieList: Movie[];
}

export interface Movie {
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

export interface Director {
  peopleNm: string;
}

export interface Company {
  companyCd: string;
  companyNm: string;
}
