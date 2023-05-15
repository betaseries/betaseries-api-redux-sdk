import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Sync TVTime user
 *
 * **Dispatch**: `USER_LINK_TVTIME`
 *
 * @alias module:Sync.doSyncTvTime
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doSyncTvTime')({ user_id: 1 });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {String}  [obj.user_id] TVTime user id
 *
 * @returns {Promise}
 */
const doSyncTvTime = ({ ...props }) =>
  dispatch =>
    ApiFetch.post('sync/tvtime', {}, { ...props }).then(response =>
      dispatch({
        type: constants.USER_LINK_TVTIME,
        payload: {
          ...props,
          ...response
        }
      }));

export default doSyncTvTime;
