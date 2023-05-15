import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Sync netflix user
 *
 * **Dispatch**: `SYNC_NETFLIX`
 *
 * @alias module:Sync.doSyncNetflix
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doSyncNetflix')({ cookie: 'cookie', guid: 'guid', name: 'maxime' });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {String}  [obj.cookie]  Netflix cookie
 * @param {String}  [obj.guid]    Netflix guid
 * @param {String}  [obj.name]    Netflix username
 *
 * @returns {Promise}
 */
const doSyncNetflix = ({ cookie, guid, name, ...props }) =>
  dispatch =>
    ApiFetch.post(
      'sync/netflix',
      {},
      { cookie, guid, profile: name, ...props }
    ).then(response =>
      dispatch({
        type: constants.SYNC_NETFLIX,
        payload: {
          ...props,
          ...response
        }
      }));

export default doSyncNetflix;
