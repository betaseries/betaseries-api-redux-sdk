import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Subscribe to a service
 *
 * **Dispatch**: `SUBSCRIBE_PLATFORMS_SERVICE`
 *
 * @alias module:Platforms.doAddPlatformsService
 * @category actions
 *
 * @example
 * BetaSeries.getAction('platforms', 'doAddPlatformsService')({
 *   id: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Service ID
 * @returns {Promise}
 */
const doAddPlatformsService = ({ id }) =>
  dispatch =>
    ApiFetch.post('platforms/service', { id }).then(response =>
      dispatch({
        type: constants.SUBSCRIBE_PLATFORMS_SERVICE,
        payload: {
          id,
          services: response.services || []
        }
      }));

export default doAddPlatformsService;
