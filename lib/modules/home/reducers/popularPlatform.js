import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of the shows on popular platform
 *
 * **Actions listened**:
 *
 *  * `FETCH_HOME_POPULAR_PLATFORM`
 *
 * @alias module:Home.popularPlatform
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('home', 'popularPlatform').homePopularPlatform;
 *
 * // state example
 * [
 *     {
 *       id: 123543,     // show ID
 *       ...show       // show element
 *     },
 *     ...
  * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function popularPlatformHomeReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.FETCH_HOME_POPULAR_PLATFORM: {
      const platformId = action.payload.platformId;
      const shows = state[platformId] || [];

      if (action.payload.shows.length === 0) {
        return state;
      }

      return {
        ...state,
        [platformId]: _uniqBy([...shows, ...action.payload.shows], 'id')
      };
    }

    default:
      return state;
  }
}
