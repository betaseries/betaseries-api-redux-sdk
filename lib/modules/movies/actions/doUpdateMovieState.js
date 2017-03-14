import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add note on movie
 *
 * **Dispatch**: `UPDATE_MOVIE_STATE`
 *
 * @alias module:Movies.doUpdateMovieState
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doUpdateMovieState')({
 *   movieId: 438,
 *   state: 2,
 * });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.movieId]   Movie ID
 * @param {Number}  [obj.state]     State of movie
 *   (`0` = to see, `1` = seen, `2` = doesn't want to see
 * @returns {Promise}
 */
const doUpdateMovieState = ({ movieId, state }) => (dispatch, getState) => {
  const oldState = getState().movies[movieId].auth_user.status;

  dispatch({
    type: constants.UPDATE_MOVIE_STATE,
    payload: { movieId, state },
  });

  return ApiFetch.post('movies/movie', { id: movieId, state })
    .catch(() => (
      dispatch({
        type: constants.UPDATE_MOVIE_STATE,
        payload: { movieId, oldState },
      })
    ));
};

export default doUpdateMovieState;
