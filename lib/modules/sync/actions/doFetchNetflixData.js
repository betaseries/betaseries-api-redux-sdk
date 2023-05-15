import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve Netflix data
 *
 * **Dispatch**: `FETCH_NETFLIX`
 *
 * @alias module:Sync.doFetchNetflixData
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doFetchNetflixData')();
 *
 * @param {Object}  [obj]             Accept the following:
 *
 * @returns {Promise}
 */
const doFetchNetflixData = () =>
  dispatch =>
    ApiFetch.get('sync/netflix', {}).then(response =>
      dispatch({
        type: constants.FETCH_NETFLIX,
        payload: {
          profile: response.profile || null
        }
      }));

export default doFetchNetflixData;
