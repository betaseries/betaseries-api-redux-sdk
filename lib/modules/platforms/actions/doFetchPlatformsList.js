import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve all platforms
 *
 * **Dispatch**: `FETCH_PLATFORMS_LIST`
 *
 * @alias module:Platforms.doFetchPlatformsList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('platforms', 'doFetchPlatformsList')({
 *   country: 'fr',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.country]     Country code (2 caracters)
 *
 * @returns {Promise}
 */
const doFetchPlatformsList = ({ country }) =>
  dispatch =>
    ApiFetch.get('platforms/list', {
      country
    }).then(response =>
      dispatch({
        type: constants.FETCH_PLATFORMS_LIST,
        payload: {
          country,
          platforms: response.platforms || {}
        }
      }));

export default doFetchPlatformsList;
