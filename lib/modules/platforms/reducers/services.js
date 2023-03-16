import constants from '../constants';
import BetaSeries from '../../../betaseries';

const initialState = {};

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
 * {
 *   '12': [{
 *     id: 384144,    // service
 *     ...service,
 *   }]
 *   ...,
 * {
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function platformsServicesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.UNSUBSCRIBE_PLATFORMS_SERVICE:
    case constants.SUBSCRIBE_PLATFORMS_SERVICE: {
      const userId = BetaSeries.user.userId;
      return {
        ...state,
        [userId]: (action.payload && action.payload.services) || []
      };
    }

    case constants.FETCH_PLATFORMS_SERVICES: {
      const userId = (action.payload && action.payload.id) ||
        BetaSeries.user.userId;

      return {
        ...state,
        [userId]: (action.payload && action.payload.services) || []
      };
    }

    default:
      return state;
  }
}
