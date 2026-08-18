import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Update movie watch date
 *
 * **Dispatch**: `UPDATE_MOVIE_WATCH_DATE`
 *
 * @alias module:Movies.doUpdateMovieWatchDate
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doUpdateMovieWatchDate')({
 *   id: 438,
 *   new_date: '2020-01-02 00:00:00'
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Movie ID
 * @param {String}  [obj.new_date]    Date format (Y-m-d H:i:s)
 *
 * @returns {Promise}
 */
const doUpdateMovieWatchDate = (
  {
    id,
    new_date,
    ...props
  }
) =>
  dispatch =>
    ApiFetch.post(
      'movies/watched_date',
      {},
      {
        id,
        new_date,
        ...props
      }
    ).then(() => {
      dispatch({
        type: constants.UPDATE_MOVIE_WATCH_DATE,
        payload: {
          ...props,
          id,
          new_date
        }
      });
    });

export default doUpdateMovieWatchDate;
