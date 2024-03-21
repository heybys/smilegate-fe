'use client';

export interface MovieListResultResponse {
  movieListResult: MovieListResult;
}

export interface MovieListResult {
  totCnt: number;
  source: string;
  movieList: Movie[];
}

export interface Movie {
  movieCd?: string;
  movieNm?: string;
  movieNmEn?: string;
  prdtYear?: string;
  openDt?: string;
  typeNm?: string;
  prdtStatNm?: string;
  nationAlt?: string;
  genreAlt?: string;
  repNationNm?: string;
  repGenreNm?: string;
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

interface MovieListViewerProps {
  data: MovieListResultResponse;
}

export function MovieListViewer({ data }: MovieListViewerProps) {
  return (
    <>
      <div>total : {data.movieListResult?.totCnt}</div>
      {data.movieListResult?.movieList?.map((movie) => (
        <div key={movie.movieCd}>{movie.movieNm}</div>
      ))}
    </>
  );
}
