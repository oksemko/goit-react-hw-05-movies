import { useState, lazy, useEffect } from 'react';
import * as movieAPI from '../../../services/movie-api';
import { Gallery } from 'components/Gallery/Gallery';

import { SearchForm, Button, Label, Input } from './MoviesPage.styled';
import { useSearchParams, useLocation } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const NotFoundPage = lazy(() => import('../NotFound/NotFound'));

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(null);
   // eslint-disable-next-line no-unused-vars
  let [_, setSearchParams] = useSearchParams();

  const handleInputChange = event => {
    setSearchQuery(event.currentTarget.value);
  };
  const { search } = useLocation();

  useEffect(() => {
    if (!search) {
      return;
    }
    movieAPI.fetchSearch(search.slice(7)).then(setData);
  }, [search]);


  const handleSubmit = event => {
    event.preventDefault();
    const normalizeSearchQuery = searchQuery.trim().toLowerCase();
    if (!normalizeSearchQuery) {
      return;
    }
    movieAPI.fetchSearch(normalizeSearchQuery).then(setData);
    setSearchParams(`query=${normalizeSearchQuery}`);
    // setSearchQuery('');
  // eslint-disable-next-line
    { Notify.info(`Hooray! You found ${searchQuery}. 🤩 Relax & review !`) }
  }


  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search movies ... 🧐"
          value={searchQuery}
          onChange={handleInputChange}
        />

        <Button type="submit">
          <Label>Search</Label>
        </Button>

      </SearchForm>
      {data?.results?.length ? <Gallery data={data} /> : <NotFoundPage />}

    </>
  );
}
