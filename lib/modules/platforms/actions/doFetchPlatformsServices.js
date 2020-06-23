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
const doFetchPlatformsServices = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('platforms/services', { ...props }).then(response =>
      dispatch({
        type: constants.FETCH_PLATFORMS_SERVICES,
        payload: {
          ...props,
          services: response.services || []
        }
      }));

export default doFetchPlatformsServices;
