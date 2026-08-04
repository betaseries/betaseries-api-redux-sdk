import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Update episode watch date
 *
 * **Dispatch**: `UPDATE_EPISODE_WATCH_DATE`
 *
 * @alias module:Shows.doUpdateEpisodeWatchDate
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUpdateEpisodeWatchDate')({
 *   id: 438,
 *   new_date: '2020-01-02 00:00:00'
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Episode ID
 * @param {String}  [obj.new_date]    Date format (Y-m-d H:i:s)
 *
 * @returns {Promise}
 */
const doUpdateEpisodeWatchDate = (
  {
    id,
    new_date,
    ...props
  }
) =>
  dispatch =>
    ApiFetch.post(
      'episodes/watched_date',
      {},
      {
        id,
        new_date,
        ...props
      }
    ).then(() => {
      dispatch({
        type: constants.UPDATE_EPISODE_WATCH_DATE,
        payload: {
          ...props,
          id,
          new_date
        }
      });
    });

export default doUpdateEpisodeWatchDate;
