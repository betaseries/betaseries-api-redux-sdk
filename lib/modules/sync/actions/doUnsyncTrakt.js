import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unsync Trakt user
 *
 * **Dispatch**: `USER_UNLINK_TRAKT`
 *
 * @alias module:Sync.doUnsyncTrakt
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doUnsyncTrakt')();
 *
 * @param {Object}  [obj]         Accept the following:
 *
 * @returns {Promise}
 */
const doUnsyncTrakt = () =>
  dispatch =>
    ApiFetch.remove('sync/trakt', {}).then(response =>
      dispatch({
        type: constants.USER_UNLINK_TRAKT,
        payload: response
      }));

export default doUnsyncTrakt;
