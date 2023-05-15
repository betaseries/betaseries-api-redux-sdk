import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unsync TVTime user
 *
 * **Dispatch**: `USER_UNLINK_TVTIME`
 *
 * @alias module:Sync.doUnsyncTvTime
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doUnsyncTvTime')();
 *
 * @param {Object}  [obj]         Accept the following:
 *
 * @returns {Promise}
 */
const doUnsyncTvTime = () =>
  dispatch =>
    ApiFetch.remove('sync/tvtime', {}).then(response =>
      dispatch({
        type: constants.USER_UNLINK_TVTIME,
        payload: response
      }));

export default doUnsyncTvTime;
