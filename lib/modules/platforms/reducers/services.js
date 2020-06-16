import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of platforms services
 *
 * **Actions listened**:
 *
 *  * `FETCH_PLATFORMS_SERVICES`
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
    case constants.FETCH_PLATFORMS_SERVICES:
      return _uniqBy(
        [...(state || []), ...(action.payload.services || [])],
        'id'
      );

    default:
      return state;
  }
}
