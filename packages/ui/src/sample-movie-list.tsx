'use client';

import { useEffect, useState } from 'react';

interface Response {
  boxOfficeResult: BoxOfficeResult;
}

interface BoxOfficeResult {
  dailyBoxOfficeList: DailyBoxOffice[];
}

interface DailyBoxOffice {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
}

export const SampleMovieList = () => {
  const [movies, setMovies] = useState<DailyBoxOffice[]>([]);

  useEffect(() => {
    fetch(
      'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101',
    )
      .then((res) => res.json())
      .then((data: Response) => {
        setMovies(data.boxOfficeResult.dailyBoxOfficeList);
      });
  }, []);

  return (
    <div>
      {movies.length == 0
        ? 'data loading...'
        : movies.map((movie) => <div key={movie.rank}>{movie.movieNm}</div>)}
    </div>
  );
};
