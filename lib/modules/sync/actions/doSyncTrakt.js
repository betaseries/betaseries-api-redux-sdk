import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Sync Trakt user
 *
 * **Dispatch**: `USER_LINK_TRAKT`
 *
 * @alias module:Sync.doSyncTrakt
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doSyncTrakt')({ username: 'maxime' });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {String}  [obj.user_id]   Trakt user id
 * @param {String}  [obj.username]  Trakt username
 *
 * @returns {Promise}
 */
const doSyncTrakt = ({ ...props }) =>
  dispatch =>
    ApiFetch.post('sync/trakt', {}, { ...props }).then(response =>
      dispatch({
        type: constants.USER_LINK_TRAKT,
        payload: {
          ...props,
          ...response
        }
      }));

export default doSyncTrakt;
