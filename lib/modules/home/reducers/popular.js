import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of the popular shows from the last 30 days
 *
 * **Actions listened**:
 *
 *  * `FETCH_HOME_POPULAR`
 *
 * @alias module:Home.popular
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('home', 'popular').homePopular;
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
export default function popularHomeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_HOME_POPULAR:
      return _uniqBy([...(action.payload.shows || []), ...(state || [])], 'id');

    default:
      return state;
  }
}
