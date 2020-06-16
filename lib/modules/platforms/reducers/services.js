import constants from '../constants';

const initialState = [];

/**
 * List of platforms services
 *
 * **Actions listened**:
 *
 *  * `FETCH_PLATFORMS_SERVICES`
 *  * `SUBSCRIBE_PLATFORMS_SERVICE`
 *  * `UNSUBSCRIBE_PLATFORMS_SERVICE`
 *
 * @alias module:Platforms.services
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('platforms', 'services').platformsServices;
 *
 * // state example
 * [
 *   {
 *     id: 384144,    // service
 *     ...service,
 *   }
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function platformsServicesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.UNSUBSCRIBE_PLATFORMS_SERVICE:
    case constants.SUBSCRIBE_PLATFORMS_SERVICE:
    case constants.FETCH_PLATFORMS_SERVICES:
      return (action.payload && action.payload.services) || [];

    default:
      return state;
  }
}
