import constants from '../constants';

/**
 * Clear comments for a specific movie
 *
 * **Dispatch**: `CLEAR_MOVIE_COMMENTS`
 *
 * @alias module:Comments.doClearMovieComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doClearMovieComments')({ movieId: 481 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.movieId]     MovieID
 *
 * @returns {Promise}
 */
const doClearMovieComments = ({ movieId }) =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_MOVIE_COMMENTS,
      payload: {
        movieId
      }
    });

export default doClearMovieComments;
