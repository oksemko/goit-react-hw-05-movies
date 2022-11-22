const API_KEY = '378311cf9c579f7d628c96b9f736cee2';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export function fetchTrading() {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
}

export function fetchSearch(query) {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
}

export function fetchDetails(movieId) {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
}

export function fetchCast(movieId) {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export function fetchReview(movieId) {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}

export async function fetchGenres() {
  if (window.localStorage.getItem('genres')) {
    return;
  }
  const genres = await fetchWithErrorHandling(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );

  window.localStorage.setItem('genres', JSON.stringify(genres));
}
