import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve characters of the movie
 *
 * **Dispatch**: `FETCH_MOVIE_CHARACTERS`
 *
 * @alias module:Movies.doFetchMovieCharacters
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchMovieCharacters')({ movieId: 591 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.movieId]   Movie ID
 *
 * @returns {Promise}
 */
const doFetchMovieCharacters = ({ movieId }) =>
  dispatch =>
    ApiFetch.get('movies/characters', { id: movieId }).then(response =>
      dispatch({
        type: constants.FETCH_MOVIE_CHARACTERS,
        payload: {
          movieId,
          characters: response.characters
        }
      }));

export default doFetchMovieCharacters;
