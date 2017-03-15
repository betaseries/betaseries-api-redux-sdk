import BetaSeries from '../../../betaseries';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve movie
 *
 * **Dispatch**: `REMOVE_MEMBER_MOVIE`
 *
 * @alias module:Movies.doRemoveMovieMember
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doRemoveMovieMember')({ movieId: 438 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.movieId]   Movie ID
 *
 * @returns {Promise}
 */
const doRemoveMovieMember = ({ movieId }) =>
  (dispatch, getState) => {
    const oldMovie = getState().movies[movieId];

    dispatch({
      type: constants.REMOVE_MEMBER_MOVIE,
      payload: {
        memberId: BetaSeries.user.userId,
        movieId
      }
    });

    return ApiFetch.remove('movies/movie', { id: movieId }).catch(() =>
      dispatch({
        type: constants.FETCH_MEMBER_MOVIES,
        payload: {
          memberId: BetaSeries.user.userId,
          movies: [oldMovie]
        }
      }));
  };

export default doRemoveMovieMember;
