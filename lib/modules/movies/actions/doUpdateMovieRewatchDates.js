import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Update movie rewatch dates
 *
 * **Dispatch**: `UPDATE_MOVIE_REWATCH_DATES`
 *
 * @alias module:Movies.doUpdateMovieRewatchDates
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doUpdateMovieRewatchDates')({
 *   id: 438,
 *   old_date: '2020-01-01 00:00:00',
 *   new_date: '2020-01-02 00:00:00'
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Movie ID
 * @param {String}  [obj.old_date]    Date format (Y-m-d H:i:s)
 * @param {String}  [obj.new_date]    Date format (Y-m-d H:i:s)
 *
 * @returns {Promise}
 */
const doUpdateMovieRewatchDates = (
  {
    id,
    old_date,
    new_date,
    ...props
  }
) =>
  dispatch =>
    ApiFetch.post(
      'movies/rewatch_date',
      {},
      {
        id,
        old_date,
        new_date,
        ...props
      }
    ).then(() => {
      dispatch({
        type: constants.UPDATE_MOVIE_REWATCH_DATES,
        payload: {
          ...props,
          id,
          old_date,
          new_date
        }
      });
    });

export default doUpdateMovieRewatchDates;
