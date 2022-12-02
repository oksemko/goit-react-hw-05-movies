import { useState, useEffect } from "react";

import * as movieAPI from '../../../services/movie-api';
import { Gallery } from '../../Gallery/Gallery';

import { Notify } from 'notiflix/build/notiflix-notify-aio';



export function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    movieAPI.fetchTrending().then(setData);
  // eslint-disable-next-line
    { Notify.info(`Hello! Here You can review trending movies. 🤩`) }
  }, []);

  return <>
    {data && <Gallery data={data} />}
  </>;
}
