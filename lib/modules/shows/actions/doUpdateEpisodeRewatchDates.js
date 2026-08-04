import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Update episode rewatch dates
 *
 * **Dispatch**: `UPDATE_EPISODE_REWATCH_DATES`
 *
 * @alias module:Shows.doUpdateEpisodeRewatchDates
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUpdateEpisodeRewatchDates')({
 *   id: 438,
 *   old_date: '2020-01-01 00:00:00',
 *   new_date: '2020-01-02 00:00:00'
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Episode ID
 * @param {String}  [obj.old_date]    Date format (Y-m-d H:i:s)
 * @param {String}  [obj.new_date]    Date format (Y-m-d H:i:s)
 *
 * @returns {Promise}
 */
const doUpdateEpisodeRewatchDates = (
  {
    id,
    old_date,
    new_date,
    ...props
  }
) =>
  dispatch =>
    ApiFetch.post(
      'episodes/rewatch_date',
      {},
      {
        id,
        old_date,
        new_date,
        ...props
      }
    ).then(() => {
      dispatch({
        type: constants.UPDATE_EPISODE_REWATCH_DATES,
        payload: {
          ...props,
          id,
          old_date,
          new_date
        }
      });
    });

export default doUpdateEpisodeRewatchDates;
