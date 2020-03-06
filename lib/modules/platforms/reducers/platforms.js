import constants from '../constants';

const initialState = {};

/**
 * List of platforms
 *
 * **Actions listened**:
 *
 *  * `FETCH_PLATFORMS_LIST`
 *
 * @alias module:Platforms.platforms
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('platforms', 'platforms').platforms;
 *
 * // state example
 * {
 *   'us': [{
 *     id: 384144,    // platform
 *     ...platform,
 *   } ...],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function platformsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PLATFORMS_LIST:
      return {
        ...state,
        [action.payload.country]: action.payload.platforms
      };

    default:
      return state;
  }
}
