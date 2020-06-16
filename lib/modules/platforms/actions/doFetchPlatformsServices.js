import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve all platforms services
 *
 * **Dispatch**: `FETCH_PLATFORMS_SERVICES`
 *
 * @alias module:Platforms.doFetchPlatformsServices
 * @category actions
 *
 * @example
 * BetaSeries.getAction('platforms', 'doFetchPlatformsServices')();
 *
 * @param {Object}  [obj]             Accept the following:
 *
 * @returns {Promise}
 */
const doFetchPlatformsServices = () =>
  dispatch =>
    ApiFetch.get('platforms/services', {}).then(response =>
      dispatch({
        type: constants.FETCH_PLATFORMS_SERVICES,
        payload: {
          services: response.services || []
        }
      }));

export default doFetchPlatformsServices;
