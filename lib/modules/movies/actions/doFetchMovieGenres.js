import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve genres of movies
 *
 * **Dispatch**: `FETCH_MOVIE_GENRES`
 *
 * @alias module:Movies.doFetchMovieGenres
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchMovieGenres')();
 *
 * @param {Object}  [obj]           Accept the following:
 *
 * @returns {Promise}
 */
const doFetchMovieGenres = () =>
  dispatch =>
    ApiFetch.get('movies/genres', {}).then(response =>
      dispatch({
        type: constants.FETCH_MOVIE_GENRES,
        payload: {
          genres: response.genres
        }
      }));

export default doFetchMovieGenres;
