import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve TV Time data
 *
 * **Dispatch**: `GET_TVTIME_DATA`
 *
 * @alias module:Sync.doFetchTvTimeData
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doFetchTvTimeData')();
 *
 * @param {Object}  [obj]             Accept the following:
 *
 * @returns {Promise}
 */
const doFetchTvTimeData = () =>
  dispatch =>
    ApiFetch.get('sync/tvtime', {}).then(response =>
      dispatch({
        type: constants.GET_TVTIME_DATA,
        payload: {
          user_id: response.user_id || null
        }
      }));

export default doFetchTvTimeData;
