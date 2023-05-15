import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve Trakt data
 *
 * **Dispatch**: `GET_TRAKT_DATA`
 *
 * @alias module:Sync.doFetchTraktData
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doFetchTraktData')();
 *
 * @param {Object}  [obj]             Accept the following:
 *
 * @returns {Promise}
 */
const doFetchTraktData = () =>
  dispatch =>
    ApiFetch.get('sync/trakt', {}).then(response =>
      dispatch({
        type: constants.GET_TRAKT_DATA,
        payload: response
      }));

export default doFetchTraktData;
