import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve Plex webhook data
 *
 * **Dispatch**: `FETCH_PLEX_WEBHOOK`
 *
 * @alias module:Sync.doFetchPlexWebhook
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doFetchPlexWebhook')();
 *
 * @param {Object}  [obj]             Accept the following:
 *
 * @returns {Promise}
 */
const doFetchPlexWebhook = () =>
  dispatch =>
    ApiFetch.get('sync/plex', {}).then(response =>
      dispatch({
        type: constants.FETCH_PLEX_WEBHOOK,
        payload: response
      }));

export default doFetchPlexWebhook;
