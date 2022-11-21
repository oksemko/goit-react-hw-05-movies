import { useState, useEffect } from "react";

import * as movieAPI from '../../../service/movie-api';
import { Gallery } from "../../Gallery/Gallery";


export function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    movieAPI.fetchTrending().then(setData);
  }, []);

  return
  <>
    {data && <Gallery data={data} />}
  </>;
}
