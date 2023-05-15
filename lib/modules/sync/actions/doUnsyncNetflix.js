import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unsync netflix user
 *
 * **Dispatch**: `DELETE_NETFLIX`
 *
 * @alias module:Sync.doUnsyncNetflix
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doUnsyncNetflix')();
 *
 * @param {Object}  [obj]         Accept the following:
 *
 * @returns {Promise}
 */
const doUnsyncNetflix = () =>
  dispatch =>
    ApiFetch.remove('sync/netflix', {}).then(response =>
      dispatch({
        type: constants.DELETE_NETFLIX,
        payload: response
      }));

export default doUnsyncNetflix;
