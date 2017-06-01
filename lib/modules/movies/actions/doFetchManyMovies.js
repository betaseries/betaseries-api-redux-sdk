import _difference from 'lodash/difference';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve many movies
 *
 * **Dispatch**: `FETCH_MANY_MOVIES`
 *
 * @alias module:Movies.doFetchManyMovies
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchManyMovies')({ movieIds: [1275, 481] });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Array}   [obj.movieIds]    List of movies ID
 *
 * @returns {Promise}
 */
const doFetchManyMovies = ({ movieIds }) =>
  (dispatch, getState) => {
    const state = getState();

    // fetch movies only if does not exist on reducers
    const cleanMovieIds = _difference(
      movieIds,
      Object.keys(state.movies).map(movie => parseInt(movie, 10))
    );

    if (cleanMovieIds.length === 0) {
      return Promise.resolve();
    }

    return ApiFetch.get('movies/movie', {
      id: cleanMovieIds.join(',')
    }).then(response =>
      dispatch({
        type: constants.FETCH_MANY_MOVIES,
        payload: {
          movieIds: cleanMovieIds,
          movies: cleanMovieIds.length === 1
            ? [response.movie]
            : response.movies
        }
      }));
  };

export default doFetchManyMovies;
