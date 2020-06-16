import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unsubscribe from a service
 *
 * **Dispatch**: `UNSUBSCRIBE_PLATFORMS_SERVICE`
 *
 * @alias module:Platforms.doRemovePlatformsService
 * @category actions
 *
 * @example
 * BetaSeries.getAction('platforms', 'doRemovePlatformsService')({
 *   id: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Service ID
 * @returns {Promise}
 */
const doRemovePlatformsService = ({ id }) =>
  dispatch =>
    ApiFetch.remove('platforms/service', { id }).then(response =>
      dispatch({
        type: constants.UNSUBSCRIBE_PLATFORMS_SERVICE,
        payload: {
          id,
          services: response.services || []
        }
      }));

export default doRemovePlatformsService;
